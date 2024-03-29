
import React, {useState} from 'react';
import HomeStyles from './homeStyles';
import NavBar from '../../components/Navbar/navbar';
import LandingScreen from '../LandingScreen/LandingScreen';
import Footer from '../../components/Footer/Footer';
import LoginModal from '../LoginModal/LoginModal';


const HomePage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <HomeStyles>
      <NavBar openLoginModal={openLoginModal} />
      <LandingScreen />
      <Footer />

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />} {/* Render the LoginModal conditionally */}

    </HomeStyles>
  );
};

export default HomePage;
