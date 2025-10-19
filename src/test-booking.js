// Quick test script to debug booking issue
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Environment check:');
console.log('URL:', supabaseUrl ? 'Set' : 'Missing');
console.log('Key:', supabaseAnonKey ? 'Set' : 'Missing');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Environment variables not set!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testBooking() {
  console.log('\nTesting booking creation...');

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '123-456-7890',
    location: 'atlanta',
    accommodation: 'Test Room',
    check_in: '2024-01-15',
    check_out: '2024-01-16',
    guests: 2,
    special_requests: 'Test booking from debug script',
    status: 'pending',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  console.log('Data to send:', testData);

  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert([testData])
      .select();

    if (error) {
      console.error('Error:', error);
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
    } else {
      console.log('Success! Created booking:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

testBooking();
