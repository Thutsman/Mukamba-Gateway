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
  const { data, error } = await supabase
    .from('early_access_signups')
    .insert([signupData])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
