import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ContentUpdated from './Pages/Page3Updated/ContentUpdated/ContentUpdated';
import ThirdNavigation from './Pages/ThirdNavigation/ThirdNavigation/ThirdNavigation';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("NAVIGATION ONE");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="content">
      <Header />
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Conditional rendering based on active tab */}
      {activeTab === "NAVIGATION ONE" && (
        <Dashboard />
      )}

      {/* Content for NAVIGATION TWO */}
      {activeTab === "NAVIGATION TWO" && (
        <ContentUpdated />
      )}

      {/* Content for NAVIGATION THREE */}
      {activeTab === "NAVIGATION THREE" && (
        <ThirdNavigation />
      )}

      <Footer />
    </div>
  );
}

export default App;
