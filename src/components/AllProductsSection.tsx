import React from 'react';
import styles from './AllProducts.module.css';
import { FaArrowRight } from 'react-icons/fa'; // outlined right arrow
import image1 from '../assets/images/S24 Ultra.png'; 
import image2 from '../assets/images/Galaxy M13.png';
import image3 from '../assets/images/Galaxy M33.png';
import image4 from '../assets/images/Galaxy M53.png';
import image5 from '../assets/images/Galaxy S22 Ultra.png';

const products = [
  {
    id: 1,
    title: 'Galaxy S22 Ultra',
    currentPrice: '$1200.00',
    originalPrice: '$1300.00',
    discount: '56%',
    image: image1,
  },
  {
    id: 2,
    title: 'Samsung Galaxy S22',
     currentPrice: '$1200.00',
    originalPrice: '$1300.00',
    discount: '11%',
    image: image2,
  },{
    id: 3,
    title: 'Samsung Galaxy S22',
    currentPrice: '$1200.00',
    originalPrice: '$1300.00',
    discount: '11%',
    image: image3,
  },{
    id: 4,
    title: 'Samsung Galaxy S22',
    currentPrice: '$1200.00',
    originalPrice: '$1300.00',
    discount: '11%',
    image: image4,
  },{
    id: 5,
    title: 'Samsung Galaxy S22',
     currentPrice: '$1200.00',
    originalPrice: '$1300.00',
    discount: '11%',
    image: image5,
  },
 
];

const AllProducts: React.FC = () => {
  return (
    <div className={styles.allProductsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>All Products</h2>
        <div className={styles.viewAll}>
          <span>View All</span>
          <FaArrowRight className={styles.icon} />
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.title} />
              <div className={styles.discountBadge}>{product.discount} OFF</div>
            </div>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <div className={styles.price}>
              <span className={styles.currentPrice}>{product.currentPrice}</span>
              <span className={styles.originalPrice}>{product.originalPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
