import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SupportBanner from './components/SupportBanner';
import './styles/global.css';
import AllProducts from './components/AllProductsSection';
import BillPayments from './components/BillPaymentsSection';
import TopCategoriesSection from './components/CategoriesSection';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{ paddingBottom: '10px', paddingTop: '150px' }}>
        <Navbar />
      </div>
      <HeroSection />
      <SupportBanner />
      <AllProducts />
      <BillPayments />
      <TopCategoriesSection />
      <BrandsSection />
      <Footer />
    </>
  );
}

export default App;
