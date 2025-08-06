import React from 'react';
import styles from './CategoriesSection.module.css';
import { FaArrowRight, FaDesktop, FaEarlybirds, FaPlaystation } from 'react-icons/fa';
import phoneIcon from '../assets/images/Mobile.png';
import DesktopIcon from '../assets/images/Desktop.png';
import laptopIcon from '../assets/images/Laptops.png';
import PlayStationIcon from '../assets/images/PlayStation.png';
import Watches from '../assets/images/Watches.png';
import Accessories from '../assets/images/Accessories.png';
import Earbuds from '../assets/images/Earbuds.png';

const categories = [
  { id: 1, name: 'Mobile', icon: phoneIcon},
  { id: 2, name: 'Desktop', icon: DesktopIcon },
  { id: 3, name: 'Laptops', icon: laptopIcon },
  { id: 4, name: 'PlayStation', icon: PlayStationIcon},
  { id: 5, name: 'Watches', icon: Watches },
  { id: 6, name: 'Accessories', icon: Accessories},
  { id: 7, name: 'Earbuds', icon: Earbuds },
];

const TopCategoriesSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Top Categories</h2>
          <span className={styles.viewAll}>
            View All <FaArrowRight />
          </span>
        </div>
        <hr className={styles.divider} />

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
           <div key={category.id} className={styles.card}>
  <div className={styles.iconCircle}>
    <img src={category.icon} alt={category.name} style={{ width: '30px', height: '30px' }} />
  </div>
  <p>{category.name}</p>
</div>


          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesSection;
