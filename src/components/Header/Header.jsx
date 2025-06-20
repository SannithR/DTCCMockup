import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import AccountIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Line1 from '../Line1/Line1.jsx';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="div">
          <div className="depository-trust">
            <div className="text-wrapper">ABCD</div>
          </div>

          <Line1 className="line-header" />
          <div className="lorem-ipsum">LOREM IPSUM</div>

          <div className="tool-bar-icons">
            <div className="frame">
              <div className="tool-bar-icons-2">
                <button className="icon-button" title="Help">
                  <HelpIcon sx={{ color: '#ffffff', fontSize: 20 }} />
                </button>

                <div className="menu">
                  <div className="menu-2">
                    <MenuIcon sx={{ color: '#ffffff', fontSize: 20 }} />
                  </div>
                </div>

                <div className="div-wrapper">
                  <div className="text-wrapper-2">
                    <AccountIcon sx={{ color: '#ffffff', fontSize: 20 }} />
                  </div>
                </div>

                <div className="logout">
                  <div className="logout-2">
                    <div className="text-wrapper-2">
                      <LogoutIcon sx={{ color: '#ffffff', fontSize: 20 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
