import React from 'react';
import styles from './HeroSection.module.css';
import phonesImage from '../assets/images/phones.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.arrowCircleLeft}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowIcon} />
      </div>
      <div className={styles.arrowCircleRight}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
      </div>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.leftContent}>
            <h1 className={styles.mainHeading}>Apple Phones</h1>
            <h1 className={styles.subHeading}>Screen Repair</h1>
            <button className={styles.ctaButton}>Fix it Now!</button>
          </div>
          <div className={styles.rightContent}>
            <img src={phonesImage} alt="Phones" className={styles.phones} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
