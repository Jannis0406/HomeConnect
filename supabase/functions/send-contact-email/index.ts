import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service_type?: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    const contactData: ContactRequest = await req.json();

    if (!contactData.name || !contactData.email || !contactData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      return new Response(
        JSON.stringify({ error: "Database configuration missing" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const dbResponse = await fetch(`${supabaseUrl}/rest/v1/contact_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseKey}`,
        "Apikey": supabaseKey,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone || null,
        message: contactData.message,
        service_type: contactData.service_type || "general",
      }),
    });

    if (!dbResponse.ok) {
      console.error("Database error:", await dbResponse.text());
      return new Response(
        JSON.stringify({ error: "Failed to save contact request" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailContent = `
Neue Kontaktanfrage von der Website erhalten:

Name: ${contactData.name}
E-Mail: ${contactData.email}
${contactData.phone ? `Telefon: ${contactData.phone}` : ""}
${contactData.service_type ? `Service-Typ: ${contactData.service_type}` : ""}

Nachricht:
${contactData.message}

---
Diese E-Mail wurde automatisch von Ihrer Website generiert.
    `.trim();

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "noreply@home-connect-solutions.de",
          to: "info@home-connect-solutions.de",
          subject: `Neue Kontaktanfrage: ${contactData.name}`,
          text: emailContent,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Email send error:", await emailResponse.text());
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact request submitted successfully"
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
