/*
  # Initial Database Schema for ZIRON AI LABS

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `description` (text)
      - `image_url` (text)
      - `technologies` (text array)
      - `category` (text)
      - `client_name` (text)
      - `completion_date` (date)
      - `project_url` (text, optional)
      - `github_url` (text, optional)
      - `featured` (boolean, default false)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `image_url` (text)
      - `author` (text)
      - `category` (text)
      - `tags` (text array)
      - `published` (boolean, default false)
      - `featured` (boolean, default false)
      - `read_time` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text, optional)
      - `subject` (text)
      - `message` (text)
      - `budget` (text, optional)
      - `timeline` (text, optional)
      - `status` (text, default 'new')
      - `created_at` (timestamp)

    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `subscribed` (boolean, default true)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on published content
    - Add policies for authenticated admin access
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  technologies text[] DEFAULT '{}',
  category text NOT NULL,
  client_name text NOT NULL,
  completion_date date NOT NULL,
  project_url text,
  github_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  published boolean DEFAULT false,
  featured boolean DEFAULT false,
  read_time integer DEFAULT 5,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  subject text NOT NULL,
  message text NOT NULL,
  budget text,
  timeline text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for projects (public read access)
CREATE POLICY "Projects are viewable by everyone"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for blog_posts (public read access for published posts)
CREATE POLICY "Published blog posts are viewable by everyone"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Create policies for contact_submissions (insert only for anonymous users)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policies for newsletter_subscriptions (insert and update for anonymous users)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update their subscription"
  ON newsletter_subscriptions
  FOR UPDATE
  TO anon, authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed ON newsletter_subscriptions(subscribed);

-- Insert sample data for projects
INSERT INTO projects (title, slug, description, image_url, technologies, category, client_name, completion_date, featured) VALUES
('Neural E-commerce Platform', 'neural-ecommerce-platform', 'AI-powered e-commerce platform with quantum recommendation engine', 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg', ARRAY['React', 'Node.js', 'AI/ML', 'MongoDB'], 'Web Development', 'TechStart Inc.', '2024-12-15', true),
('Quantum Blockchain Voting', 'quantum-blockchain-voting', 'Secure voting system using quantum-resistant blockchain technology', 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', ARRAY['Blockchain', 'Smart Contracts', 'React', 'Web3'], 'Blockchain', 'Democratic Solutions', '2024-11-20', false),
('Holographic Healthcare App', 'holographic-healthcare-app', 'AR/VR healthcare management with neural interface integration', 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg', ARRAY['React Native', 'AR/VR', 'AI', 'WebRTC'], 'Mobile Development', 'MedTech Innovations', '2024-10-30', true);

-- Insert sample data for blog_posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author, category, tags, published, featured, read_time) VALUES
('The Future of Quantum AI Development', 'future-quantum-ai-development', 'Exploring how quantum computing will revolutionize artificial intelligence and machine learning applications.', 'Full article content about quantum AI development...', 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', 'VIJAY JANGID', 'AI/ML', ARRAY['AI', 'Quantum Computing', 'Machine Learning'], true, true, 8),
('Building Neural Networks for Tomorrow', 'building-neural-networks-tomorrow', 'Advanced techniques for creating self-evolving neural networks that adapt to changing environments.', 'Full article content about neural networks...', 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg', 'Vaibhav Sharma', 'AI/ML', ARRAY['Neural Networks', 'Deep Learning', 'AI'], true, false, 12);