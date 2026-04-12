import { createClient } from '../lib/supabase/client';
import { useEffect, useState } from 'react';

export default function TestSupabase() {
  const [status, setStatus] = useState('Testing connection...');
  const [user, setUser] = useState<any>(null);
  const [cycles, setCycles] = useState<any[]>([]);
  const supabase = createClient();

  // Debug: Check if environment variables are loaded
  console.log('ENV Check - URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('ENV Check - Key exists:', !!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

  useEffect(() => {
    async function testConnection() {
      try {
        // Check auth session
        const { data: sessionData } = await supabase.auth.getSession();
        setUser(sessionData.session?.user || null);

        // Try to fetch cycles table
        const { data: cyclesData, error } = await supabase
          .from('cycles')
          .select('*');

        if (error) {
          setStatus(`❌ Database error: ${error.message}`);
        } else {
          setCycles(cyclesData || []);
          setStatus(`✅ Connected successfully! Found ${cyclesData?.length || 0} cycle(s).`);
        }
      } catch (err: any) {
        setStatus(`❌ Connection failed: ${err.message}`);
      }
    }

    testConnection();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Supabase Connection Test</h1>
      <div style={{
        padding: '1rem',
        background: status.includes('✅') ? '#d4edda' : '#f8d7da',
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '1px solid ' + (status.includes('✅') ? '#c3e6cb' : '#f5c6cb')
      }}>
        <strong>{status}</strong>
      </div>

      <h2>Auth Status</h2>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
        {user ? `✅ Logged in as: ${user.email}` : '⚠️ Not logged in (this is expected if you haven\'t set up login yet)'}
      </pre>

      <h2>Cycles Table Data</h2>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
        {JSON.stringify(cycles, null, 2) || 'No data yet'}
      </pre>

      <p style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: '#0070f3' }}>← Back to Home</a>
      </p>
    </div>
  );
}
