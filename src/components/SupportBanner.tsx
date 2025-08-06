import React from 'react';
import styles from './SupportBanner.module.css';
import repairImage from '../assets/images/technician.png'; // tech working image
import supportImage from '../assets/images/supportAgent.png'; // customer support image
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SupportBanner: React.FC = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.carouselControls}>
        
      </div>

      <div className={styles.bluePanel}>
        <div className={styles.text}>
          <h1>All Devices Repair</h1>
        </div>
        <div className={styles.image}>
          <img src={repairImage} alt="Repair" />
        </div>
      </div>

      <div className={styles.redPanel}>
        <div className={styles.text}>
          <h1>Live Chat Support</h1>
        </div>
        <div className={styles.image}>
          <img src={supportImage} alt="Support" />
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
