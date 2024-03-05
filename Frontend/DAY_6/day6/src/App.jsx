import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Animation } from './components/ui/Animation';
import LazyLayout from './components/ui/LazyLayout';
import Sidebar from './pages/admin/Sidebar';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import About from './pages/user/About';
import Service from './pages/user/Service';
// import BookEvent from './pages/user/BookEvent';
// import Service from './pages/user/Service'; // Import the Service component


const LazyLanding = lazy(() => import('./components/ui/Landing'));
const LazyRegister = lazy(() => import('./pages/auth/Register'));
const LazyLogin = lazy(() => import('./pages/auth/Login'));
const LazyForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));

const LazyHome = lazy(() => import('./pages/user/Home'));
const LazyAbout = lazy(() => import('./pages/user/About'));
const LazyService = lazy(() => import('./pages/user/Service'));
const LazyAddEvent = lazy(() => import('./pages/admin/AddEvent'));
const LazyBooking = lazy(() => import('./pages/user/Booking'));
const LazyBook = lazy(() => import('./pages/user/BookEvent'));
const LazyProfile = lazy(() => import('./pages/user/Profile'));
const LazyAdminService = lazy(() => import('./pages/admin/Service'));
const LazyAdminHome = lazy(() => import('./pages/admin/Home'));
const LazyDashboard = lazy(() => import('./pages/admin/Dashboard'));


const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/services" element={<LazyLayout component={LazyService} />} />
        {/* Add the route for BookEvent component */}
        <Route path="/book" element={<LazyLayout component={LazyBook} />} />
        <Route path="/profile" element={<LazyLayout component={LazyProfile} />} />
        <Route path="/bookings" element={<LazyLayout component={LazyBooking} />} />
        </Routes>
        </UserLayout>
  );
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
    <Routes>
    <Route path="/add" element={<LazyLayout component={LazyAddEvent} />} />
        <Route path="/home" element={<LazyLayout component={LazyAdminHome} />} />
        <Route path="/dashboard" element={<LazyLayout component={LazyDashboard} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/services" element={<LazyLayout component={LazyAdminService} />} />
        </Routes>
        </AdminLayout>
        );
      };

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/register" element={<LazyLayout component={LazyRegister} />} />
      <Route path="/landing" element={<LazyLayout component={LazyLanding} />} />
      <Route path="/login" element={<LazyLayout component={LazyLogin} />} />
      <Route path="/forgotpassword" element={<LazyLayout component={LazyForgotPassword} />} />
      
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      
      <Route path="/services" element={<Service />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/about" element={<About />} />

      {/* Add additional routes if needed */}
    </Routes>
  );
}

export default App;
