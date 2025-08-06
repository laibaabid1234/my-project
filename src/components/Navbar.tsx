import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser as faUserRegular,
} from '@fortawesome/free-regular-svg-icons';

import {
  faCartShopping,
  faEllipsisVertical,
  faMapMarkerAlt,
  faTruck,
  faTags,
} from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>  
      <div className={styles.topBar}>
        <span>Welcome to Almirco.</span>
        <div className={styles.topBarRight}>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Deliver to <strong>423651</strong></span>
          <span><FontAwesomeIcon icon={faTruck} /> Track your order</span>
          <span><FontAwesomeIcon icon={faTags} /> All Offers</span>
        </div>
      </div>

      <div className={styles.mainNavbar}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.searchSection}>
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Search for phone mobile laptop..." className={styles.searchInput} />
            </div>
          </div>

          <div className={styles.iconSection}>
            <span className={styles.iconText}></span>
            <FontAwesomeIcon icon={faUserRegular} />Sign Up/Sign In
            <span className={styles.iconText}>
              <FontAwesomeIcon icon={faCartShopping} className={styles.iconFakeOutline} />Cart
            </span>
          </div>
        </div>
      </div>
      <div className={styles.categoryMenu}>
        <span className={styles.activeLink}>Home</span>
        <span>Smart Phones</span>
        <span>Laptops</span>
        <span>Tablets</span>
        <span>Accessories</span>
        <span>Bill Pay</span>
        <span>Repair</span>
      </div>
    </div>

  );
};

export default Navbar;
