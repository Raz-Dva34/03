import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState('../../../public/traffic.png');

  const handleButtonClick = (color: string) => {
    switch (color) {
      case 'red':
        setCurrentImage('../../../public/traffic_red.png');
        break;
      case 'yellow':
        setCurrentImage('../../../public/traffic_yellow.png');
        break;
      case 'green':
        setCurrentImage('../../../public/traffic_green.png');
        break;
      default:
        setCurrentImage('../../../public/traffic.png');
    }
    navigate(`/${color}`);
  };

  const handleLogoClick = () => {
    setCurrentImage('../../../public/traffic.png');
    navigate('/home');
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerRow}>
        <img
          src={currentImage}
          alt="Светофор"
          className={styles.headerLogo}
          onClick={handleLogoClick}
        />
        <div className={styles.headerTitle}>
          <h1>Основы ПДД для Азата</h1>
        </div>
      </div>
      <div className={styles.buttonsRow}>
        <button
          className={styles.Red_button}
          onClick={() => handleButtonClick('red')}
        >
          Red
        </button>
        <button
          className={styles.Yellow_button}
          onClick={() => handleButtonClick('yellow')}
        >
          Yellow
        </button>
        <button
          className={styles.Green_button}
          onClick={() => handleButtonClick('green')}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default Header;
