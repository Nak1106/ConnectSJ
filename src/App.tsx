import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import Incentives from './pages/Incentives';
import Rewards from './pages/Rewards';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  // Check if user is authenticated
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  // Determine if we should show language selector (not on login/signup)
  const showLanguageSelector = !location.pathname.includes('/login') && 
    !location.pathname.includes('/signup');

  return (
    <div className="min-h-screen bg-neutral-50">
      {showLanguageSelector && (
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>
      )}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <Login onLogin={handleLogin} />
            } 
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Resources />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/incentives" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Incentives />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/rewards" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Rewards />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/jobs" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Jobs />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;