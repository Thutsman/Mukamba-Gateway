import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
