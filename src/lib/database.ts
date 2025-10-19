import { getSupabaseClient } from './supabaseClient';

export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  location: 'atlanta' | 'stlucia';
  accommodation: string;
  check_in: string;
  check_out: string;
  guests: number;
  special_requests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
  updated_at?: string;
}

export interface AdminUser {
  id?: string;
  email: string;
  role: 'admin' | 'manager';
  created_at?: string;
}

class DatabaseService {
  private supabase = getSupabaseClient();

  // Bookings
  async createBooking(booking: Omit<Booking, 'id' | 'status' | 'created_at' | 'updated_at'>): Promise<Booking | null> {
    if (!this.supabase) return null;

    const { data, error } = await this.supabase
      .from('bookings')
      .insert([{
        ...booking,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating booking:', error);
      return null;
    }

    return data;
  }

  async getBookings(): Promise<Booking[]> {
    if (!this.supabase) return [];

    const { data, error } = await this.supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }

    return data || [];
  }

  async updateBookingStatus(id: string, status: Booking['status']): Promise<boolean> {
    if (!this.supabase) return false;

    const { error } = await this.supabase
      .from('bookings')
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating booking status:', error);
      return false;
    }

    return true;
  }

  // Authentication
  async signInAdmin(email: string, password: string) {
    if (!this.supabase) return null;

    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('Error signing in:', error);
      return null;
    }

    return data;
  }

  async signOutAdmin() {
    if (!this.supabase) return;

    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    }
  }

  async getCurrentAdmin() {
    if (!this.supabase) return null;

    const { data: { user } } = await this.supabase.auth.getUser();
    return user;
  }

  // Check if database is configured
  isConfigured(): boolean {
    return this.supabase !== null;
  }
}

export const databaseService = new DatabaseService();
