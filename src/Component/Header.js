import React from 'react'
import profile from '../assets/profile.png'
const Header = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
    <div className="container-fluid">
      <img className="navbar-brand" src={profile} alt=""/>
    </div>
  </nav>
  );
}

export default Header;