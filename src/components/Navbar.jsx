import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slant as Hamburger } from 'hamburger-react';
 // Ensure Shery is properly imported

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleMenuBar = () => {
    setNav(prevNav => !prevNav);
  };

  // Initialize Shery for magnet effect
  React.useEffect(() => {
    Shery.makeMagnet(".magnet-target", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
      debug: true
    });
    Shery.makeMagnet(".magnet-target2", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
      debug: true
    });
  }, []);

  return (
    <div id="nav" className="w-full relative pointer-events-auto py-5 flex items-center justify-between">
      <div
        id="menuBar"
        className={`sm:hidden w-full text-3xl font-bold flex flex-col p-20 gap-10 font-[Whyte] h-screen text-black bg-white fixed z-[99999] top-24 left-0 transition-transform duration-500 ${
          nav ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <Link className='magnet-target2' to="/">HOME</Link>
        <Link className='magnet-target2' to="/about">ABOUT</Link>
        <Link className='magnet-target2' to="/services">SERVICES</Link>
        <Link className='magnet-target2' to="/contact">CONTACT</Link>
        <Link className='magnet-target2' to="/signup">SIGN UP</Link>
      </div>
      <div id="nleft" className='flex items-center justify-between gap-4 font-[gilroy]'>
        <h3>HealthCare</h3>
      </div>
      <div className='sm:hidden magnet-target'>
        <button onClick={toggleMenuBar}><Hamburger /></button>
      </div>
      <div id="nright" className='sm:flex sm:items-center sm:gap-4 hidden'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/signup">SIGN UP</Link>
        <Link to="/doctor">DOCTOR</Link>
        <Link to="/admin">ADMIN</Link>
      </div>
    </div>
  );
}

export default Navbar;
