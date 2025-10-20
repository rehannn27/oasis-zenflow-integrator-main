import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with publishable key
const stripePromise = loadStripe('pk_test_51SKCdwRpgP3xpHsnjc3wuB0hu6OrvlbWgctQBoEaKrpofvuADosLMCx5xOHSWGziie9IPhlKlwFz8R7LeCxz8UMw00kO0tfd2C');

export default stripePromise;

// Helper function to create payment intent (client-side only for demo)
export const createPaymentIntent = async (amount: number, currency: string = 'usd', bookingData?: any) => {
  // For demo purposes, we'll simulate a payment intent creation
  // In production, this should be done server-side
  const mockClientSecret = `pi_mock_${Date.now()}_secret_${Math.random().toString(36).substring(2)}`;

  return {
    clientSecret: mockClientSecret,
    error: null
  };
};

// Helper function to format amount for display
export const formatAmount = (amount: number, currency: string = 'usd') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount);
};
