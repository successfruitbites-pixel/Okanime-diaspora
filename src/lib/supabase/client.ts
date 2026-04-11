import { createBrowserClient } from '@supabase/ssr';

export const createClient = () =>
  createBrowserClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  );
