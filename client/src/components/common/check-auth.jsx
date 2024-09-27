import { Navigate, useLocation } from 'react-router-dom';

export default function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  if (location.pathname === '/') {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === 'admin') {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  //If user is not authenticated and/or user tries to access routes other than /login or /register, the user will be redirected back to login page for authentication

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes('/login') ||
      location.pathname.includes('/register')
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // If user is authenticated which means logged in, and tries to access /login, they will redirected to shopping-page or admin-view
  if (
    isAuthenticated &&
    (location.pathname.includes('/login') ||
      location.pathname.includes('/register'))
  ) {
    // If user is super admin, execute first. if user is normal user, execute second
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }
  // If user is authenticated but user role is not admin or tried to access admin page
  if (
    isAuthenticated &&
    user?.role !== 'admin' &&
    location.pathname.includes('admin')
  ) {
    return <Navigate to="/unauth-page" />;
  }
  // If user is authenticated and user role is admin, but tried to access shopping page
  if (
    isAuthenticated &&
    user?.role === 'admin' &&
    location.pathname.includes('shop')
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}
