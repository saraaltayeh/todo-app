import React from 'react';

const Header = () => {
return (
    <nav className="bp4-navbar .modifier">
    <div className="bp4-navbar-group bp4-align-left">
      <div className="bp4-navbar-heading">TO DO</div>
      <input className="bp4-input" placeholder="Search files..." type="text" />
    </div>
    <div className="bp4-navbar-group bp4-align-right">
      <button className="bp4-button bp4-minimal bp4-icon-home">Home</button>
      <button className="bp4-button bp4-minimal bp4-icon-document">Files</button>
    </div>
  </nav>
)
}

export default Header;