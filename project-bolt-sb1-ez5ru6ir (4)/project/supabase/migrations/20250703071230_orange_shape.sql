/*
  # Update Projects Data

  1. Changes
    - Remove old sample projects
    - Add new real projects (NIFF Jodhpur and Ambica Enterprises)
    
  2. Security
    - Maintain existing RLS policies
*/

-- Remove old sample projects
DELETE FROM projects WHERE slug IN ('neural-ecommerce-platform', 'quantum-blockchain-voting', 'holographic-healthcare-app');

-- Insert new real projects
INSERT INTO projects (title, slug, description, image_url, technologies, category, client_name, completion_date, project_url, featured) VALUES
('NIFF Jodhpur - Film Festival Website', 'niff-jodhpur-website', 'Official website for the National Independent Film Festival Jodhpur, featuring event information, film submissions, and festival updates with modern responsive design.', 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg', ARRAY['React', 'Node.js', 'MongoDB', 'Event Management'], 'Web Development', 'NIFF Jodhpur', '2024-12-01', 'https://niffjodhpur.com/', true),
('Ambica Enterprises - Business Website', 'ambica-enterprises-website', 'Professional business website for Ambica Enterprises showcasing services, portfolio, and company information with modern design and SEO optimization.', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', ARRAY['React', 'Responsive Design', 'Business Solutions', 'SEO'], 'Web Development', 'Ambica Enterprises', '2024-11-15', 'https://ambicaenterprisess.in/', true);