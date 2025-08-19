# Supabase Backend Setup for Mukamba Gateway

## 🚀 Quick Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login and create a new project
3. Note down your project URL and anon key

### 2. Create Database Table

Run this SQL in your Supabase SQL editor:

```sql
-- Create the early access signups table
CREATE TABLE early_access_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_location TEXT NOT NULL,
  user_type TEXT NOT NULL,
  interest TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE early_access_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (public signups)
CREATE POLICY "Allow public inserts" ON early_access_signups
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads (you can modify this based on your needs)
CREATE POLICY "Allow authenticated reads" ON early_access_signups
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 3. Environment Variables

Create a `.env` file in your project root:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url_here
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Get Your Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the "Project URL" and "anon public" key
3. Paste them in your `.env` file

### 5. Test the Integration

1. Start your development server: `npm start`
2. Open the signup modal and submit a test form
3. Check your Supabase dashboard > Table Editor > early_access_signups

## 📊 Database Schema

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| first_name | TEXT | User's first name |
| last_name | TEXT | User's last name |
| email | TEXT | User's email address |
| phone | TEXT | User's phone number |
| current_location | TEXT | User's current location |
| user_type | TEXT | Type of user (buyer/seller/investor/exploring) |
| interest | TEXT | User's main interest |
| notes | TEXT | Optional notes/questions |
| created_at | TIMESTAMP | When the signup was created |

## 🔒 Security Features

- **Row Level Security (RLS)** enabled
- **Public inserts** allowed for signups
- **Authenticated reads** only (you can modify this)
- **Input validation** on both frontend and backend

## 📱 Mobile Responsiveness

The signup modal is fully mobile responsive with:
- Touch-friendly input sizes (min 44px height)
- Responsive typography and spacing
- Scrollable content for smaller screens
- Mobile-first design approach

## 🚀 Deployment

1. Add your production Supabase credentials to your hosting platform's environment variables
2. Ensure your Supabase project is in the correct region for your users
3. Test the form submission in production

## 🔧 Customization

You can modify the `src/lib/supabase.ts` file to:
- Add more database operations
- Implement email notifications
- Add data validation rules
- Create additional tables for other features

## 📈 Analytics (Optional)

To track form submissions, you can add analytics:

```typescript
// In handleSubmit function
import { supabase } from '../lib/supabase';

// After successful submission
await supabase
  .from('analytics')
  .insert([{ event: 'signup_completed', user_email: formData.email }]);
```
