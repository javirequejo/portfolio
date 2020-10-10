import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../../styles/index.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
