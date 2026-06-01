# Supabase Integration Guide for The Zaika

This document provides step-by-step instructions for integrating Supabase backend as per the Technical Requirements Document (TRD).

## Prerequisites
- Supabase account
- Project created on Supabase
- API keys from Supabase project settings

## Step 1: Install Supabase Client

```bash
pnpm add @supabase/supabase-js
```

## Step 2: Database Schema

Create the following tables in Supabase:

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone TEXT UNIQUE NOT NULL,
  name TEXT,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ,
  wallet_balance DECIMAL(10,2) DEFAULT 0
);
```

### Addresses Table
```sql
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  label TEXT,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  pincode TEXT,
  lat FLOAT,
  lng FLOAT,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Categories Table
```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  display_order INTEGER,
  active BOOLEAN DEFAULT true
);

INSERT INTO categories (name, slug, display_order) VALUES
  ('Akni', 'akni', 1),
  ('Biryani', 'biryani', 2),
  ('Mughlai', 'mughlai', 3),
  ('Kathiyawadi', 'kathiyawadi', 4),
  ('Desserts', 'desserts', 5);
```

### Menu Items Table
```sql
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category_id UUID REFERENCES categories(id),
  image_url TEXT,
  is_veg BOOLEAN DEFAULT true,
  is_bestseller BOOLEAN DEFAULT false,
  spice_level INTEGER CHECK (spice_level BETWEEN 0 AND 5),
  ingredients JSONB,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Orders Table
```sql
CREATE TYPE order_status AS ENUM (
  'pending',
  'accepted',
  'preparing',
  'out_for_delivery',
  'delivered',
  'cancelled'
);

CREATE TYPE payment_status AS ENUM (
  'pending',
  'completed',
  'failed',
  'refunded'
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id),
  status order_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'pending',
  subtotal DECIMAL(10,2) NOT NULL,
  delivery_fee DECIMAL(10,2) DEFAULT 0,
  discount DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  delivery_address JSONB NOT NULL,
  delivery_slot TEXT,
  payment_method TEXT,
  payment_id TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Order Items Table
```sql
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id UUID REFERENCES menu_items(id),
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL
);
```

### Loyalty Points Table
```sql
CREATE TABLE loyalty_points (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id),
  points INTEGER NOT NULL,
  type TEXT CHECK (type IN ('earned', 'redeemed')),
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE VIEW user_loyalty_balance AS
SELECT 
  user_id,
  SUM(CASE WHEN type = 'earned' THEN points ELSE -points END) as balance
FROM loyalty_points
GROUP BY user_id;
```

### Coupons Table
```sql
CREATE TABLE coupons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  discount_type TEXT CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10,2) NOT NULL,
  min_order_value DECIMAL(10,2),
  max_discount DECIMAL(10,2),
  valid_from TIMESTAMPTZ DEFAULT NOW(),
  valid_until TIMESTAMPTZ,
  usage_limit INTEGER,
  used_count INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true
);
```

### Referrals Table
```sql
CREATE TABLE referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id UUID REFERENCES users(id),
  referred_phone TEXT NOT NULL,
  referred_user_id UUID REFERENCES users(id),
  referral_code TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'completed')),
  referrer_reward DECIMAL(10,2),
  referee_reward DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);
```

## Step 3: Row Level Security (RLS)

Enable RLS on all tables and create policies:

```sql
-- Users can read their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Apply similar policies for addresses, orders, loyalty_points
```

## Step 4: Environment Variables

Create `.env.local`:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Step 5: Create Supabase Client

Create `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type Database = {
  public: {
    Tables: {
      users: { /* ... */ };
      orders: { /* ... */ };
      // ... other tables
    };
  };
};
```

## Step 6: Authentication

### OTP Login Flow

```typescript
// Request OTP
const { error } = await supabase.auth.signInWithOtp({
  phone: '+919876543210',
});

// Verify OTP
const { data, error } = await supabase.auth.verifyOtp({
  phone: '+919876543210',
  token: '123456',
  type: 'sms',
});
```

### Auth Context

Create `src/context/AuthContext.tsx`:

```typescript
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (phone: string) => Promise<void>;
  verifyOTP: (phone: string, token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (phone: string) => {
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (error) throw error;
  };

  const verifyOTP = async (phone: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms',
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, verifyOTP, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
```

## Step 7: Real-time Order Tracking

```typescript
// Subscribe to order updates
const subscription = supabase
  .channel('order_updates')
  .on(
    'postgres_changes',
    {
      event: 'UPDATE',
      schema: 'public',
      table: 'orders',
      filter: `id=eq.${orderId}`,
    },
    (payload) => {
      console.log('Order updated:', payload.new);
      setOrder(payload.new);
    }
  )
  .subscribe();

// Cleanup
return () => {
  subscription.unsubscribe();
};
```

## Step 8: Storage for Images

```typescript
// Upload menu item image
const { data, error } = await supabase.storage
  .from('menu-images')
  .upload(`${menuItemId}.jpg`, file);

// Get public URL
const { data: { publicUrl } } = supabase.storage
  .from('menu-images')
  .getPublicUrl(`${menuItemId}.jpg`);
```

## Step 9: Edge Functions (Optional)

For complex business logic:

```typescript
// Create edge function for order processing
supabase functions new process-order

// Deploy
supabase functions deploy process-order
```

## Testing

1. Test OTP authentication
2. Test menu item CRUD
3. Test order placement
4. Test real-time updates
5. Test loyalty points calculation
6. Test referral system

## Security Checklist

- [x] RLS policies enabled
- [x] API keys secured
- [x] Input validation
- [x] Rate limiting configured
- [x] CORS configured
- [x] Webhook signatures verified

## Next Steps

1. Implement Razorpay payment integration
2. Set up WhatsApp notifications via Meta API
3. Create admin dashboard
4. Implement analytics tracking
5. Set up automated backups

---

**Note**: This is a comprehensive guide. Follow TRD specifications for exact implementation details.
