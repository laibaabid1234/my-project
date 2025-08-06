import React from 'react';
import styles from './BrandsSection.module.css';
import iphoneImg from '../assets/images/IPhone.png';
import realmeImg from '../assets/images/Realme.png';
import xiaomiImg from '../assets/images/XIAOMI.png';
import rectangleBg from '../assets/images/Bg.png';
import miLogo from '../assets/images/mi-logo.png';
import { FaArrowRight, FaApple } from 'react-icons/fa';

const BrandsSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h2>TOP Electronics Brands</h2>
        <span className={styles.viewAll}>
          View All <FaArrowRight />
        </span>
      </div>
      <hr className={styles.divider} />

      <div className={styles.brandCards}>
        
        {/* First Card - iPhone */}
        <div className={styles.card} style={{ backgroundColor: '#1b1b1bff' }}>
          <img src={rectangleBg} alt="bg" className={styles.bgCircle} />
          <span className={styles.iPhonebrandName}>IPHONE</span>
          <span className={styles.appleLogo}><FaApple /></span>
          <p className={styles.discount}>UP TO 80% OFF</p>
          <img src={iphoneImg} alt="iPhone" className={styles.phoneImg} />
        </div>

        {/* Second Card - Realme */}
        <div className={styles.card} style={{ backgroundColor: '#fbeec1' }}>
          <img src={rectangleBg} alt="bg" className={styles.bgCircle} />
          <span className={styles.realmebrandName}>REALME</span>
          <span className={styles.realmeBox}>realme</span>
          <p className={styles.discount} style={{ color: '#000' }}>UP TO 80% OFF</p>
          <img src={realmeImg} alt="Realme" className={styles.realmephoneImg} />
        </div>

        {/* Third Card - Xiaomi */}
        <div className={styles.card} style={{ backgroundColor: '#FFECDF' }}>
          <img src={rectangleBg} alt="bg" className={styles.bgCircle} />
          <span className={styles.XIAOMIbrandName}>XIAOMI</span>
          <span className={styles.miBox}><img src={miLogo} alt="mi logo" /></span>
          <p className={styles.discount} style={{ color: '#000' }}>UP TO 80% OFF</p>
          <img src={xiaomiImg} alt="Xiaomi" className={styles.realmephoneImg} />
        </div>

      </div>
    </div>
  );
};

export default BrandsSection;
