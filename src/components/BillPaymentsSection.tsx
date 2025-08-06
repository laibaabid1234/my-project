import React from 'react';
import styles from './BillPaymentsSection.module.css';
import { FaChevronRight } from 'react-icons/fa';
import logo1 from '../assets/images/logo-1.png';
import logo2 from '../assets/images/logo-2.png';

const billCards = [
  {
    id: 1,
    logo: logo1,
    originalPrice: '$60',
    currentPrice: '$45',
    title: 'Truly Unlimited',
    features: ['Unlimited talk', 'Unlimited Text', '+5G hotspot'],
  },
  {
    id: 2,
    logo: logo2,
    originalPrice: '$25.00',
    currentPrice: '$30.00',
    title: '2GB Data 5G',
    features: ['Unlimited talk', 'Unlimited Text', '$5 Intl Calling Credit'],
  },
  {
    id: 3,
    logo: logo1,
    originalPrice: '$80.00',
    currentPrice: '$60.00',
    title: 'Truly Unlimited',
    features: ['Unlimited talk', 'Unlimited Text', '5GB hotspot'],
  },
  {
    id: 4,
    logo: logo2,
    originalPrice: '$90.00',
    currentPrice: '$50.00',
    title: '2GB Data 5G',
    features: ['Unlimited talk', 'Unlimited Text', '$5 Intl Calling Credit'],
  },
  {
    id: 5,
    logo: logo1,
    originalPrice: '$99.00',
    currentPrice: '$56.00',
    title: 'Truly Unlimited',
    features: ['Unlimited talk', 'Unlimited Text', '5GB hotspot'],
  },
];

const BillPaymentsSection: React.FC = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Bill Payments</h2>
        <div className={styles.viewAll}>
          <span>View All</span>
          <FaChevronRight className={styles.icon} />
        </div>
      </div>
      <hr className={styles.divider} />

      <div className={styles.billSection}>
        {billCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.topRow}>
              <div className={styles.logoContainer}>
                <img src={card.logo} alt="Logo" className={styles.logo} />
              </div>
              <div className={styles.priceInfo}>
                <span className={styles.currentPrice}>{card.currentPrice}</span>
                <span className={styles.originalPrice}>{card.originalPrice}</span>
              </div>
            </div>
            <h3 className={styles.planTitle}>{card.title}</h3>
            <ul className={styles.features}>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillPaymentsSection;
