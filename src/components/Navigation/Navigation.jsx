import React from 'react';
import './Navigation.css';

const Navigation = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className="navigation">
      <div className="component">
        <button
          className={`tab-item ${activeTab === "NAVIGATION ONE" ? "active" : ""}`}
          onClick={() => setActiveTab("NAVIGATION ONE")}
        >
          <div className="text-wrapper-3">NAVIGATION ONE</div>
        </button>

        <button
          className={`tab-item-2 ${activeTab === "NAVIGATION TWO" ? "active" : ""}`}
          onClick={() => setActiveTab("NAVIGATION TWO")}
        >
          <div className="NAVIGATION-ONE">NAVIGATION TWO</div>
        </button>

        <button
          className={`tab-item-2 ${activeTab === "NAVIGATION THREE" ? "active" : ""}`}
          onClick={() => setActiveTab("NAVIGATION THREE")}
        >
          <div className="NAVIGATION-ONE">NAVIGATION THREE</div>
        </button>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <button onClick={() => { setActiveTab("NAVIGATION ONE"); setIsMobileMenuOpen(false); }}>
                NAVIGATION ONE
              </button>
              <button onClick={() => { setActiveTab("NAVIGATION TWO"); setIsMobileMenuOpen(false); }}>
                NAVIGATION TWO
              </button>
              <button onClick={() => { setActiveTab("NAVIGATION THREE"); setIsMobileMenuOpen(false); }}>
                NAVIGATION THREE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
