import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { About, Activities, Leadership, Achievements, Gallery } from './pages/PublicPages';
import Auth from './pages/Auth';
import TestSupabase from './pages/TestSupabase';  // ✅ ADDED THIS LINE

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="activities" element={<Activities />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="auth" element={<Auth />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="test-supabase" element={<TestSupabase />} />  {/* ✅ ADDED THIS LINE */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
