import React, {useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import { Outlet } from "react-router-dom";




const MainLayout = () => {
  // State to track the current icon
const [icon, setIcon] = useState('sun');

// Function to toggle the icon
const toggleIcon = () => {
  setIcon(prevIcon => (prevIcon === 'sun' ? 'moon' : 'sun'));
};
  return (
    <div className={`wrapper ${icon === 'sun' ? "" :"dark-theme" }`}>
        <div className='layout container'>
            <Header icon={icon} toggleIcon={toggleIcon}/>
          <div className='outlet'><Outlet /></div>
            <Footer />
        </div>
    </div>
  )
}

export default MainLayout;