import { Navigate } from 'react-router-dom';

const useAuth = () => {
  return { isAuthenticated: false };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
