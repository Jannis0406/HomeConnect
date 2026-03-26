/*
  # Create contact_requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `service_type` (text) - thermostats, wlan, support, consultation
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for public inserts (form submissions)
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  service_type text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts"
  ON contact_requests
  FOR INSERT
  TO public
  WITH CHECK (true);
