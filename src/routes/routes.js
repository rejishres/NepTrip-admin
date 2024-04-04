import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup/signup';
import HomePage from '../pages/Home/home';
import LoginModal from '../pages/LoginModal/LoginModal';
import Destinations from '../components/Destinations/Destinations';
import AboutScreen from '../pages/AboutUs/AboutUs';
import AdminDashboard from '../pages/Admin/Dashboard/adminDashboard';
import DestinationPage from '../pages/Admin/DestinationPage/destinationPage';
import CategoryPage from '../pages/Admin/CategoryPage/categoryPage';
import SearchResults from '../pages/SearchResults/searchResults';

const RoutesComponent = () => {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LoginModal />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/searchResults" element={<SearchResults />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/destination" element={<DestinationPage />} />
      <Route path="/admin/category" element={<CategoryPage />} />

    </Routes>
  );
};

export default RoutesComponent;
