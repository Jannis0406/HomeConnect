import { useState, useEffect, useRef } from 'react';
import { Monitor, Wifi, Thermometer, Headphones, ChevronRight, ChevronDown, Phone, Mail, Check, Menu, X, Zap, Shield, Globe, Clock, Users, Star, ArrowRight, Play, Cpu, Server, Cloud, Lock, Settings, Home, Router, Smartphone, Lightbulb, Theater as Thermostat, Cable, Building2, Award, HeartHandshake, Sparkles, Move3d } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type Page = 'home' | 'it' | 'elektrik' | 'thermostats' | 'wlan' | 'support' | 'impressum' | 'datenschutz';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentPage]);

  const navigateToPage = (page: Page) => setCurrentPage(page);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service_type: formData.get('service') || 'general',
      message: formData.get('message'),
    };

    try {
      const { error } = await supabase.from('contact_requests').insert([data]);
      if (!error) {
        setFormSubmitted(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (err) {
      console.error('Error:', err);
    }
    setIsSubmitting(false);
  };

  const services = [
    { icon: Monitor, title: 'IT-Dienstleistungen', desc: 'Windows, Mac, PC-Zusammenbau', gradient: 'from-blue-500 to-cyan-400' },
    { icon: Zap, title: 'Elektrik', desc: 'Thermostate, Steckdosen, Lampen', gradient: 'from-amber-500 to-orange-400' },
    { icon: Thermometer, title: 'Smarte Thermostate', desc: 'tado°, TP-Link Tapo', gradient: 'from-orange-500 to-red-400' },
    { icon: Wifi, title: 'WLAN-Optimierung', desc: 'Mesh, Router, Netzwerk', gradient: 'from-cyan-500 to-blue-400' },
    { icon: Headphones, title: 'IT-Support', desc: 'Remote & Vor-Ort', gradient: 'from-green-500 to-emerald-400' },
  ];

  const steps = [
    { num: '01', title: 'Kontaktaufnahme', desc: 'Rufen Sie uns an oder schreiben Sie uns' },
    { num: '02', title: 'Analyse', desc: 'Wir prüfen Ihre Anforderungen' },
    { num: '03', title: 'Angebot', desc: 'Transparente Preisgestaltung' },
    { num: '04', title: 'Umsetzung', desc: 'Professionelle Realisierung' },
  ];

  // Navigation Component
  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigateToPage('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center glow">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">HomeConnect</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {services.map((s) => (
              <button
                key={s.title}
                onClick={() => {
                  if (s.title === 'IT-Dienstleistungen') navigateToPage('it');
                  else if (s.title === 'Elektrik') navigateToPage('elektrik');
                  else if (s.title === 'Smarte Thermostate') navigateToPage('thermostats');
                  else if (s.title === 'WLAN-Optimierung') navigateToPage('wlan');
                  else if (s.title === 'IT-Support') navigateToPage('support');
                }}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={scrollToContact} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white transition-colors">
              Kontakt
            </button>
            <button onClick={scrollToContact} className="px-5 py-2.5 text-sm bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105">
              Beratung anfragen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-6 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {services.map((s) => (
                <button
                  key={s.title}
                  onClick={() => {
                    if (s.title === 'IT-Dienstleistungen') navigateToPage('it');
                    else if (s.title === 'Elektrik') navigateToPage('elektrik');
                    else if (s.title === 'Smarte Thermostate') navigateToPage('thermostats');
                    else if (s.title === 'WLAN-Optimierung') navigateToPage('wlan');
                    else if (s.title === 'IT-Support') navigateToPage('support');
                  }}
                  className="text-gray-400 hover:text-white text-left py-2"
                >
                  {s.title}
                </button>
              ))}
              <button onClick={scrollToContact} className="mt-4 px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-center">
                Beratung anfragen
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
            <Monitor className="w-10 h-10 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed opacity-30">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center">
            <Wifi className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center">
            <Thermometer className="w-7 h-7 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 right-40 animate-float-delayed opacity-30" style={{ animationDelay: '3s' }}>
          <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
            <Shield className="w-9 h-9 text-white" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-blur-in">
          <span className="text-white">IT, Elektrik &</span>
          <br />
          <span className="gradient-text">Smart Home</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Professionelle IT-Lösungen, smarte Thermostate und zuverlässige Elektroarbeiten – alles aus einer Hand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button onClick={scrollToContact} className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:scale-105 flex items-center gap-2">
            Kostenlose Beratung
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="group px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all flex items-center gap-2">
            Leistungen ansehen
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );

  // Services Section
  const ServicesSection = () => (
    <section id="services" className="relative py-32 bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400">Unsere Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Leistungen für</span>
            <span className="gradient-text"> jedes Zuhause</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Von der IT-Infrastruktur bis zur smarten Heizung – wir machen Ihr Zuhause intelligent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => {
                if (service.title === 'IT-Dienstleistungen') navigateToPage('it');
                else if (service.title === 'Elektrik') navigateToPage('elektrik');
                else if (service.title === 'Smarte Thermostate') navigateToPage('thermostats');
                else if (service.title === 'WLAN-Optimierung') navigateToPage('wlan');
                else if (service.title === 'IT-Support') navigateToPage('support');
              }}
              className="group glass-hover rounded-3xl p-8 text-left hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/25`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.desc}</p>
              <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Mehr erfahren</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  // Why Us Section
  const WhyUsSection = () => {
    const reasons = [
      { icon: Award, title: 'Zertifizierte Experten', desc: 'Fachinformatiker & Elektriker' },
      { icon: Clock, title: 'Schnelle Reaktion', desc: 'Innerhalb von 2-3 Tagen vor Ort' },
      { icon: Shield, title: 'Transparente Preise', desc: 'Keine versteckten Kosten' },
      { icon: HeartHandshake, title: 'Persöhnlicher Service', desc: 'Individuelle Beratung' },
    ];

    return (
      <section className="relative py-32 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400">Warum wir?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ihre Vorteile</span>
                <br />
                <span className="gradient-text">mit HomeConnect</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Zwei Spezialisten unter einem Dach. IT und Elektrik nahtlos vernetzt – für Ihr smartes Zuhause.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{reason.title}</h3>
                      <p className="text-sm text-gray-500">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass rounded-3xl p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                      <Monitor className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Jannis Claus</h3>
                      <p className="text-blue-400 text-sm">Fachinformatiker</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Maximilian Orth</h3>
                      <p className="text-amber-400 text-sm">Elektriker</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Smart Home Showcase
  const SmartHomeSection = () => (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse-slow" />
          <div className="absolute inset-20 rounded-full border border-cyan-500/30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-40 rounded-full border border-cyan-500/40 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Home className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400">Smart Home</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Ein Haus.</span>
            <br />
            <span className="gradient-text">Vernetzt. Intelligent.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Thermostate, WLAN, Beleuchtung – wir vernetzen Ihr Zuhause für mehr Komfort und Effizienz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Thermometer className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Smarte Thermostate</h3>
            <p className="text-gray-500">tado°, TP-Link, Fritz – bis zu 30% Heizkosten sparen</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wifi className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Ganzes Haus WLAN</h3>
            <p className="text-gray-500">Mesh-Systeme für stabilen Empfang in jedem Raum</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Smarte Beleuchtung</h3>
            <p className="text-gray-500">Automatisch, stimmungsvoll, energiesparend</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Process Section
  const ProcessSection = () => (
    <section className="relative py-32 bg-gradient-to-b from-black via-blue-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Move3d className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400">So funktioniert's</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">4 Schritte</span>
            <span className="text-white"> zum smarten Zuhause</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="text-6xl font-bold gradient-text opacity-20 mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-cyan-500/30">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section id="contact" className="relative py-32 bg-black">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400">Kontakt</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Lassen Sie uns</span>
              <br />
              <span className="gradient-text">sprechen</span>
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Kostenlose Beratung – wir helfen Ihnen gerne weiter.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <p className="text-white font-medium">015204571030</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-Mail</p>
                  <p className="text-white font-medium">info@home-connect-solutions.de</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Adresse</p>
                  <p className="text-white font-medium">Am Breiten Stein 1, 36284 Hohenroda</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Vielen Dank!</h3>
                  <p className="text-gray-400">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmitContact} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                      <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">E-Mail *</label>
                      <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="ihre@email.de" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Telefon</label>
                      <input name="phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="0123 456789" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Service</label>
                      <select name="service" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors">
                        <option value="" className="bg-gray-900">Bitte wählen</option>
                        <option value="it" className="bg-gray-900">IT-Dienstleistungen</option>
                        <option value="elektrik" className="bg-gray-900">Elektrik</option>
                        <option value="thermostats" className="bg-gray-900">Smarte Thermostate</option>
                        <option value="wlan" className="bg-gray-900">WLAN-Optimierung</option>
                        <option value="support" className="bg-gray-900">IT-Support</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nachricht</label>
                    <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors resize-none" placeholder="Ihre Nachricht..." />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Wird gesendet...</>
                    ) : (
                      <>
                        Nachricht senden
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="relative pt-20 pb-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">HomeConnect</span>
            </div>
            <p className="text-gray-500 mb-6">
              IT, Elektrik & Smart Home aus Osthessen. Ihr Partner für intelligente Haustechnik.
            </p>
            <div className="flex gap-4">
              <a href="tel:015204571030" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5 text-gray-400" />
              </a>
              <a href="mailto:info@home-connect-solutions.de" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-3">
              <li><button onClick={() => navigateToPage('it')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">IT-Dienstleistungen</button></li>
              <li><button onClick={() => navigateToPage('elektrik')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Elektrik</button></li>
              <li><button onClick={() => navigateToPage('thermostats')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Smarte Thermostate</button></li>
              <li><button onClick={() => navigateToPage('wlan')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">WLAN-Optimierung</button></li>
              <li><button onClick={() => navigateToPage('support')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">IT-Support</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Kontakt</button></li>
              <li><button onClick={() => navigateToPage('impressum')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Impressum</button></li>
              <li><button onClick={() => navigateToPage('datenschutz')} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Datenschutz</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>HomeConnect Solutions GbR</li>
              <li>Am Breiten Stein 1</li>
              <li>36284 Hohenroda</li>
              <li className="pt-2">
                <a href="tel:015204571030" className="hover:text-cyan-400 transition-colors">015204571030</a>
              </li>
              <li>
                <a href="mailto:info@home-connect-solutions.de" className="hover:text-cyan-400 transition-colors">info@home-connect-solutions.de</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} HomeConnect Solutions. Alle Rechte vorbehalten.</p>
          <p className="text-gray-700 text-xs">Mit Liebe gemacht in Osthessen</p>
        </div>
      </div>
    </footer>
  );

  // Thermostats Page
  const ThermostatsPage = () => (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-red-400 opacity-20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center mb-8 premium-shadow">
            <Thermometer className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Smarte Thermostate</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Intelligent heizen, Energie sparen – bis zu 30% weniger Heizkosten mit tado° oder TP-Link.
          </p>
          <button onClick={scrollToContact} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center gap-2">
            Kostenlose Beratung anfragen
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-950/50 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400">Die Vorteile</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Warum smarte Thermostate?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Weniger Energie, mehr Komfort – in drei einfachen Vorteilen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">30%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bis zu 30% Ersparnis</h3>
              <p className="text-gray-500">Weniger Heizkosten durch intelligente Steuerung.</p>
            </div>
            <div className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automatische Anpassung</h3>
              <p className="text-gray-500">Das System lernt Ihre Gewohnheiten und passt sich an.</p>
            </div>
            <div className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Steuerung per App</h3>
              <p className="text-gray-500">Heizung bequem unterwegs kontrollieren.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heizungs-Kompatibilität */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Check className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400">Kompatibilität</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ist Ihre Heizung geeignet?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Sehen Sie sofort, wie viel Sie sparen können.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Erdgas-Heizung', savings: '15–30%', status: 'Ideal geeignet', color: 'green' },
              { name: 'Ölheizung', savings: '15–30%', status: 'Ideal geeignet', color: 'green' },
              { name: 'Pellets / Holz', savings: '5–10%', status: 'Bedingt geeignet', color: 'yellow' },
              { name: 'Fernwärme', savings: '3–8%', status: 'Bedingt geeignet', color: 'yellow' },
              { name: 'Wärmepumpe', savings: '0–5%', status: 'Weniger geeignet', color: 'red' },
              { name: 'Nachtspeicher', savings: '0%', status: 'Nicht geeignet', color: 'red' },
            ].map((heating, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{heating.name}</h3>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    heating.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    heating.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {heating.savings} Ersparnis
                  </span>
                </div>
                <p className={`text-sm ${
                  heating.color === 'green' ? 'text-green-400' :
                  heating.color === 'yellow' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>{heating.status}.</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">Unsicher? Kostenlose Beratung – wir prüfen Ihre Heizung.</p>
            <button onClick={scrollToContact} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center gap-2">
              Analyse anfragen
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pakete */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-950/50 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400">Unsere Pakete</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Wählen Sie die passende Lösung</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basis Paket */}
            <div className="glass rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Basis Paket</h3>
                <p className="text-gray-500 text-sm mb-4">TP-Link Tapo Hardware</p>
                <div className="text-3xl font-bold gradient-text mb-2">Preis auf Anfrage</div>
                <p className="text-gray-600 text-sm">nach individueller Beratung</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Für normale Heizkörper</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">LED-Display mit Temperaturanzeige</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">App-Steuerung & Zeitpläne</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Sprachsteuerung (Alexa, Google, Siri)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Geofencing-Funktion</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Professionelle Installation & Support</span>
                </div>
              </div>

              <button onClick={scrollToContact} className="w-full py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-all">
                Beratung anfragen
              </button>
            </div>

            {/* Premium Paket */}
            <div className="relative glass rounded-3xl p-8 hover:bg-white/10 transition-all border-2 border-cyan-500/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold rounded-full">
                EMPFOHLEN
              </div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Premium Paket</h3>
                <p className="text-gray-500 text-sm mb-4">tado° Hardware</p>
                <div className="text-3xl font-bold gradient-text mb-2">Preis auf Anfrage</div>
                <p className="text-gray-600 text-sm">nach individueller Beratung</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Für Heizkörper & Fußbodenheizung</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Premium Touch-Display</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Deutscher Premium-Hersteller (tado°)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Fenster-Auf-Erkennung integriert</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Wetter-Integration & Geofencing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Erweiterte App-Funktionen</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Premium-Support & Installation</span>
                </div>
              </div>

              <button onClick={scrollToContact} className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Beratung anfragen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Settings className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400">Direkt-Vergleich</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Alle Features im Überblick</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Merkmal</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Basis (TP-Link)</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-medium">Premium (tado°)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Heizkörper</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Fußbodenheizung</td>
                  <td className="py-4 px-4 text-center"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Fenster-Auf-Erkennung</td>
                  <td className="py-4 px-4 text-center text-gray-500">Optional</td>
                  <td className="py-4 px-4 text-center text-cyan-400">Integriert</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Display</td>
                  <td className="py-4 px-4 text-center text-gray-400">Standard LED</td>
                  <td className="py-4 px-4 text-center text-cyan-400">Touch-Display</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">App-Steuerung</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Sprachsteuerung</td>
                  <td className="py-4 px-4 text-center text-gray-400">Alexa, Google, Siri</td>
                  <td className="py-4 px-4 text-center text-gray-400">Alexa, Google, Siri</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Geofencing</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Wetter-Integration</td>
                  <td className="py-4 px-4 text-center"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 px-4 text-gray-300">Preis</td>
                  <td className="py-4 px-4 text-center text-gray-400">Auf Anfrage</td>
                  <td className="py-4 px-4 text-center text-cyan-400">Auf Anfrage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );

  // Service Page Template
  const ServicePage = ({ icon: Icon, title, subtitle, gradient, features, items }: { icon: any, title: string, subtitle: string, gradient: string, features: { icon: any, title: string, items: string[] }[] }) => (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r ${gradient} opacity-20 rounded-full blur-[128px]`} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8 premium-shadow`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">{subtitle}</p>
          <button onClick={scrollToContact} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center gap-2">
            Beratung anfragen
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-500 text-sm">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );

  // Main Render
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {currentPage === 'home' && (
        <>
          <HeroSection />
          <ServicesSection />
          <WhyUsSection />
          <SmartHomeSection />
          <ProcessSection />
          <ContactSection />
          <Footer />
        </>
      )}

      {currentPage === 'it' && (
        <ServicePage
          icon={Monitor}
          title="IT-Dienstleistungen"
          subtitle="Windows, Mac, PC-Zusammenbau, Netzwerk – kompetent und zuverlässig"
          gradient="from-blue-500 to-cyan-400"
          features={[
            { icon: Monitor, title: 'Windows-Systeme', items: ['Installation & Neuaufsetzen', 'Fehlerbehebung', 'Viren-Entfernung', 'Windows 10/11 Upgrade'] },
            { icon: Cpu, title: 'Mac & macOS', items: ['macOS-Updates', 'iCloud & Apple-ID', 'Migration & Daten', 'Performance-Optimierung'] },
            { icon: Server, title: 'PC-Zusammenbau', items: ['Hardware-Beratung', 'Gaming-PCs', 'Arbeits-PCs', 'Hardware-Upgrade'] },
            { icon: Wifi, title: 'Netzwerk & WLAN', items: ['Router-Einrichtung', 'Mesh-Systeme', 'NAS & Drucker', 'Netzwerk-Absicherung'] },
            { icon: Cloud, title: 'Cloud & Daten', items: ['Cloud-Backup', 'Daten-Sync', 'Sicherheits-Backup', 'Daten-Wiederherstellung'] },
            { icon: Lock, title: 'Sicherheit', items: ['Virenschutz', 'Firewall', 'Password-Manager', 'Verschlüsselung'] },
          ]}
        />
      )}

      {currentPage === 'elektrik' && (
        <ServicePage
          icon={Zap}
          title="Elektrik"
          subtitle="Thermostat-Installation und einfache Elektroarbeiten – zuverlässig und sauber"
          gradient="from-amber-500 to-orange-400"
          features={[
            { icon: Thermometer, title: 'Thermostat-Montage', items: ['tado° Installation', 'TP-Link Tapo', 'App-Einrichtung'] },
            { icon: Lightbulb, title: 'Beleuchtung', items: ['Deckenlampen', 'Wandleuchten', 'LED-Streifen', 'Außenbeleuchtung'] },
            { icon: Cable, title: 'Steckdosen & Schalter', items: ['Tausch', 'Neuinstallation', 'Smart Home ready', 'USB-Ladesteckdosen'] },
            { icon: Settings, title: 'Reparaturen', items: ['Fehlersuche', 'Kabelreparatur', 'Klingelanlagen', 'Bewegungsmelder'] },
          ]}
        />
      )}

      {currentPage === 'thermostats' && <ThermostatsPage />}

      {currentPage === 'wlan' && (
        <ServicePage
          icon={Wifi}
          title="WLAN-Optimierung"
          subtitle="Stabiles Internet in jedem Raum – Analyse, Mesh, Profi-Setup"
          gradient="from-cyan-500 to-blue-400"
          features={[
            { icon: Globe, title: 'Netzwerkanalyse', items: ['Signal-Messung', 'Schwachstellen', 'Störquellen', 'Kanal-Optimierung'] },
            { icon: Router, title: 'Mesh-Systeme', items: ['TP-Link Deco', 'Fritz! Mesh', 'Access Points', 'WLAN-Extender'] },
            { icon: Shield, title: 'Sicherheit', items: ['Gastnetzwerk', 'Kindersicherung', 'Verschlüsselung', 'Firewall'] },
            { icon: Server, title: 'Heimserver', items: ['NAS-Einrichtung', 'Netzwerkdrucker', 'Smart Home Zentrale', 'Media-Server'] },
          ]}
        />
      )}

      {currentPage === 'support' && (
        <ServicePage
          icon={Headphones}
          title="IT-Support"
          subtitle="Schnelle Hilfe – remote oder vor Ort"
          gradient="from-green-500 to-emerald-400"
          features={[
            { icon: Monitor, title: 'Remote-Support', items: ['TeamViewer', 'AnyDesk', 'Software-Installation', 'Fehlerbehebung'] },
            { icon: Home, title: 'Vor-Ort Service', items: ['PC-Reparatur', 'Hardware-Fehler', 'Neuaufsetzen', 'Einrichtung'] },
            { icon: Clock, title: 'Reaktionszeit', items: ['Schnelle Reaktion', 'Termine nach Wunsch', 'Wochenende möglich', 'Notfall-Service'] },
            { icon: Users, title: 'Für alle', items: ['Windows & Mac', 'Tablets & Smartphones', 'Einweisung', 'Erklärung'] },
          ]}
        />
      )}

      {currentPage === 'impressum' && (
        <div className="min-h-screen bg-black pt-24">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
            <div className="glass rounded-3xl p-8 space-y-8 text-gray-400">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
                <p>HomeConnect Solutions GbR<br />Am Breiten Stein 1<br />36284 Hohenroda</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Vertreten durch</h2>
                <p>Jannis Claus<br />Maximilian Orth</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
                <p>Telefon: 015204571030<br />E-Mail: info@home-connect-solutions.de</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}

      {currentPage === 'datenschutz' && (
        <div className="min-h-screen bg-black pt-24">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
            <div className="glass rounded-3xl p-8 space-y-6 text-gray-400">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">1. Datenschutz auf einen Blick</h2>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">2. Verantwortliche Stelle</h2>
                <p>HomeConnect Solutions GbR<br />Am Breiten Stein 1, 36284 Hohenroda<br />Telefon: 015204571030<br />E-Mail: info@home-connect-solutions.de</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">3. Datenerfassung</h2>
                <p>Wenn Sie das Kontaktformular nutzen, werden die eingegebenen Daten zur Bearbeitung Ihrer Anfrage gespeichert und verarbeitet.</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
