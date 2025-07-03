import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';

export const stripePromise = loadStripe(stripePublishableKey);

export interface PaymentPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  popular?: boolean;
  stripePriceId: string;
}

export const paymentPackages: PaymentPackage[] = [
  {
    id: 'neural-starter',
    name: 'Neural Starter',
    description: 'Perfect for startups entering the quantum realm',
    price: 2999,
    currency: 'USD',
    stripePriceId: 'price_neural_starter',
    features: [
      'AI-Powered Web Application',
      'Basic Machine Learning Integration',
      'Responsive Design',
      '3 Months Support',
      'Source Code Included'
    ]
  },
  {
    id: 'quantum-pro',
    name: 'Quantum Pro',
    description: 'Advanced solutions for growing enterprises',
    price: 7999,
    currency: 'USD',
    stripePriceId: 'price_quantum_pro',
    popular: true,
    features: [
      'Full-Stack AI Application',
      'Advanced ML Models',
      'Blockchain Integration',
      'Mobile App Included',
      '6 Months Support',
      'Custom AI Training',
      'Performance Optimization'
    ]
  },
  {
    id: 'reality-enterprise',
    name: 'Reality Enterprise',
    description: 'Complete digital transformation for large organizations',
    price: 19999,
    currency: 'USD',
    stripePriceId: 'price_reality_enterprise',
    features: [
      'Enterprise AI Ecosystem',
      'Custom Neural Networks',
      'Multi-Platform Development',
      'Blockchain & Web3 Integration',
      '12 Months Support',
      'Dedicated Team',
      'Quantum Security',
      'Scalable Architecture',
      'Real-time Analytics'
    ]
  }
];

export const createCheckoutSession = async (priceId: string, successUrl: string, cancelUrl: string) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        successUrl,
        cancelUrl,
      }),
    });

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};