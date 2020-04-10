import React, { useState } from 'react';
import '../Players/PlayerData/ToggleDM.css';
import { useDarkMode } from '../hooks/useDarkMode';
export default function ToggleDM(props) {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <nav className='nav'>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
}
