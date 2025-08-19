import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test function to verify Supabase connection
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('early_access_signups')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      return false;
    }
    
    console.log('Supabase connection test successful');
    return true;
  } catch (err) {
    console.error('Supabase connection test error:', err);
    return false;
  }
};

// Types for our database
export interface EarlyAccessSignup {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  current_location: string;
  user_type: string;
  interest: string;
  notes?: string;
  created_at?: string;
}

// Function to insert a new signup
export const insertSignup = async (signupData: Omit<EarlyAccessSignup, 'id' | 'created_at'>) => {
  // Check if Supabase is properly configured
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase configuration is missing. Please check your environment variables.');
  }

  console.log('Attempting to insert signup data:', signupData);
  console.log('Supabase URL configured:', !!supabaseUrl);
  console.log('Supabase Key configured:', !!supabaseAnonKey);
  console.log('Supabase URL (first 20 chars):', supabaseUrl.substring(0, 20) + '...');
  console.log('Supabase Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('Phone type:', typeof signupData.phone, 'Value:', signupData.phone);

  try {
    const { data, error } = await supabase
      .from('early_access_signups')
      .insert([signupData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log('Signup successful:', data);
    return data;
  } catch (err) {
    console.error('Insert signup error:', err);
    throw err;
  }
};
