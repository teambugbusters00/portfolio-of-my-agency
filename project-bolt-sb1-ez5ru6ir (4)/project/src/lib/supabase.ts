import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  technologies: string[];
  category: string;
  client_name: string;
  completion_date: string;
  project_url?: string;
  github_url?: string;
  featured: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  category: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  read_time: number;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
  status: 'new' | 'in_progress' | 'completed';
  created_at: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: string;
}

// Database functions
export const dbFunctions = {
  // Projects
  async getProjects(featured?: boolean) {
    let query = supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (featured !== undefined) {
      query = query.eq('featured', featured);
    }
    return query;
  },

  async getProjectBySlug(slug: string) {
    return supabase.from('projects').select('*').eq('slug', slug).single();
  },

  // Blog posts
  async getBlogPosts(featured?: boolean, published = true) {
    let query = supabase.from('blog_posts').select('*').eq('published', published).order('created_at', { ascending: false });
    if (featured !== undefined) {
      query = query.eq('featured', featured);
    }
    return query;
  },

  async getBlogPostBySlug(slug: string) {
    return supabase.from('blog_posts').select('*').eq('slug', slug).eq('published', true).single();
  },

  // Contact submissions
  async submitContact(data: Omit<ContactSubmission, 'id' | 'status' | 'created_at'>) {
    return supabase.from('contact_submissions').insert([{ ...data, status: 'new' }]);
  },

  // Newsletter subscriptions
  async subscribeNewsletter(email: string) {
    return supabase.from('newsletter_subscriptions').upsert([{ email, subscribed: true }]);
  },

  async unsubscribeNewsletter(email: string) {
    return supabase.from('newsletter_subscriptions').update({ subscribed: false }).eq('email', email);
  }
};