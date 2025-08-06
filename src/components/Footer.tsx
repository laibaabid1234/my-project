import React from "react";
import styles from "./Footer.module.css";
import { FaWhatsapp, FaPhoneAlt, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.column}>
          <h2 className={styles.logo}>ALMIR CO.</h2>
          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <FaWhatsapp className={styles.icon} />
              <div>
                <p className={styles.contactLabel}>WhatsApp</p>
                <a className={styles.contactLink} href="tel:1-844-370-1777">1-844-370-1777</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.icon} />
              <div>
                <p className={styles.contactLabel}>Call Us</p>
                <a className={styles.contactLink} href="tel:1-844-370-1777">1-844-370-1777</a>
              </div>
            </div>
          </div>

          <div className={styles.download}>
            <a href="#" className={styles.storeBtn}>
              <FaApple className={styles.storeIcon} />
              <div className={styles.btnText}>
                <span className={styles.smallText}>Download on the</span>
                <span className={styles.bigText}>App Store</span>
              </div>
            </a>

            <a href="#" className={styles.storeBtn}>
              <FaGooglePlay className={styles.storeIconPlay} />
              <div className={styles.btnText}>
                <span className={styles.smallText}>Get it on</span>
                <span className={styles.bigText}>Google Play</span>
              </div>
            </a>
          </div>

        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Most Popular Categories</h4>
          <ul className={styles.list}>
            <li>Phone</li>
            <li>Laptop</li>
            <li>Playstation</li>
            <li>Accessories</li>
            <li>Earbuds</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Customer Services</h4>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2023 All rights reserved. Almir Co.</p>
      </div>
    </footer>
  );
};

export default Footer;
