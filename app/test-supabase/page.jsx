'use client'

import { createClient } from '@/lib/supabase/client'
import { useState, useEffect } from 'react'

export default function TestSupabase() {
  const [status, setStatus] = useState('Connecting...')
  const [authStatus, setAuthStatus] = useState('Checking...')
  const [cycles, setCycles] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function testConnection() {
      try {
        const supabase = createClient()

        // 1. Check Auth Status
        const { data: { session }, error: authError } = await supabase.auth.getSession()
        if (authError) throw authError
        setAuthStatus(session?.user?.email || 'Not logged in')

        // 2. Check Database Connection (cycles table)
        const { data, error: dbError } = await supabase.from('cycles').select('*')
        if (dbError) throw dbError

        setCycles(data || [])
        setStatus('Connected successfully!')
      } catch (err) {
        console.error('Supabase connection error:', err)
        setStatus('Failed to connect')
        setError(err.message)
      }
    }

    testConnection()
  }, [])

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Supabase Connection Test</h1>

      {/* Connection Status Banner */}
      <div style={{
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '8px',
        backgroundColor: status === 'Connected successfully!' ? '#dcfce7' : (status === 'Failed to connect' ? '#fee2e2' : '#fef9c3'),
        color: status === 'Connected successfully!' ? '#166534' : (status === 'Failed to connect' ? '#991b1b' : '#854d0e'),
        border: '1px solid',
        borderColor: status === 'Connected successfully!' ? '#bbf7d0' : (status === 'Failed to connect' ? '#fecaca' : '#fef08a')
      }}>
        <strong>Status:</strong> {status}
        {error && <p style={{ marginTop: '10px', fontSize: '14px' }}>Error details: {error}</p>}
      </div>

      {/* Auth Status */}
      <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Auth Status</h2>
        <p>{authStatus}</p>
      </div>

      {/* Database Data */}
      <div style={{ padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Cycles Table Data</h2>
        {cycles.length === 0 ? (
          <p style={{ color: '#6b7280' }}>No cycles found or still loading.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {cycles.map((cycle, index) => (
              <li key={index} style={{ 
                padding: '10px', 
                backgroundColor: 'white', 
                marginBottom: '10px', 
                borderRadius: '4px',
                border: '1px solid #e5e7eb',
                overflowX: 'auto'
              }}>
                <pre style={{ margin: 0, fontSize: '14px' }}>{JSON.stringify(cycle, null, 2)}</pre>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
