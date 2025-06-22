import { Router, Route, Navigate } from '@solidjs/router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
//import Login from './pages/Login';
//import Dashboard from './pages/Dashboard';

export default function App() {
  // Exemplo simples de autenticação fake
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  return (
    <Router>
      <Route path="/" component={Home} />

      {/* Protected route */}
      <Route
        path="/dashboard"
        component={() =>
          isAuthenticated() ? <Dashboard /> : <Navigate href="/login" />
        }
      />

      {/* Catch-all route for 404 */}
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Router>
  );
}
