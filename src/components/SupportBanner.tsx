import React from 'react';
import styles from './SupportBanner.module.css';
import repairImage from '../assets/images/technician.png'; 
import supportImage from '../assets/images/supportAgent.png'; 

const SupportBanner: React.FC = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.leftPanel}>
        <div className={styles.content}>
          <h2>All Devices <br />Repair</h2>
          <img src={repairImage} alt="Repair" />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.rightPanel}>
        <div className={styles.content}>
          <h2>Live Chat <br />Support</h2>
          <img src={supportImage} alt="Support" />
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
