import React from 'react';
import styles from './Footer.module.css';
import { FaApple, FaGooglePlay, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from '../assets/images/white-logo.png';
import bgCircle from '../assets/images/Bg.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={bgCircle} alt="Background" className={styles.bgCircle} />

      <div className={styles.footerContent}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logo} />

          <h3 className={styles.contactTitle}>Contact Us</h3>

          <div className={styles.contactItem}>
            <FaWhatsapp className={styles.icon} />
            <div>
              <p>WhatsApp</p>
              <strong>+1 234 567 890</strong>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <div>
              <p>Call Us</p>
              <strong>+1 987 654 321</strong>
            </div>
          </div>

          <div className={styles.appButtons}>
            <div className={styles.appStore}>
              <FaApple className={styles.icon} />
              <div>
                <span>Download on the</span><br />
                <strong>App Store</strong>
              </div>
            </div> <div className={styles.playStore}>
              <FaGooglePlay className={styles.icon} />
              <div>
                <span>Get it on</span><br />
                <strong>Google Play</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className={styles.centerSection}>
          <div>
            <h3 className={styles.sectionTitle}>Most Popular Categories</h3>
            <ul>
              <li>Mobile Phones</li>
              <li>Laptops</li>
              <li>Accessories</li>
              <li>Gaming Consoles</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.sectionTitle}>Customer Services</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Warranty Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>© 2025 YourCompany. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
