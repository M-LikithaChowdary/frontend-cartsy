import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Layout from './components/Layout';
import CartPage from './components/CartPage';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import WClothingPage from './components/WClothingPage'; // List all women clothing
import ProductDetailPage from './components/ProductDetailPage'; // Show individual product details
import HandbagsPage from './components/HandbagsPage';
import WFootwearPage from './components/WFootwearPage';
import WJewelleryPage from './components/WJewelleryPage';
import WWatchesPage from './components/WWatchesPage';
import MWatchesPage from './components/MWatchesPage';
import MClothingPage from './components/MClothingPage';
import MenShoesPage from './components/MenShoesPage';
import MenWalletsPage from './components/MenWalletsPage';
import MenJewelleryPage from './components/MenJewelleryPage';
import KidsToysPage from './components/KidsToysPage';
import KidsClothingPage from './components/KidsClothingPage';
import KidsFootwearPage from './components/KidsFootwearPage';
import KidsAccessoriesPage from './components/KidsAccessoriesPage';
import KidsBooksPage from './components/KidsBooksPage';
import MobilesPage from './components/MobilesPage';
import LaptopsPage from './components/LaptopsPage';
import CamerasPage from './components/CamerasPage';
import TVsPage from './components/TVsPage';
import MusicalInstrumentsPage from './components/MusicalInstrumentsPage';
import FurniturePage from './components/FurniturePage';
import DecorPage from './components/DecorPage';
import CookwarePage from './components/CookwarePage';
import GardenPage from './components/GardenPage';
import Payment from './components/Payment';
import CheckoutForm from './components/CheckoutForm';
import FinalPayment from './components/FinalPayment';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/WClothingPage" element={<WClothingPage />} />
          <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
          <Route path="/handbags" element={<HandbagsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/WFootwearPage" element={<WFootwearPage />} />
          <Route path="/WJewelleryPage" element={<WJewelleryPage />} />
          <Route path="/WWatchesPage" element={<WWatchesPage />} />
          <Route path="/MWatchesPage" element={<MWatchesPage />} />
          <Route path="/MClothingPage" element={<MClothingPage />} />
          <Route path="/men/shoes" element={<MenShoesPage />} />
          <Route path="/men/wallets" element={<MenWalletsPage />} />
          <Route path="/men/jewellery" element={<MenJewelleryPage />} />
          <Route path="/kids/toys" element={<KidsToysPage />} />
          <Route path="/kids/clothing" element={<KidsClothingPage />} />
          <Route path="/kids/footwear" element={<KidsFootwearPage />} />
          <Route path="/kids/accessories" element={<KidsAccessoriesPage />} />
          <Route path="/kids/books" element={<KidsBooksPage />} />
          <Route path="/electronics/mobiles" element={<MobilesPage />} />
          <Route path="/electronics/laptops" element={<LaptopsPage />} />
          <Route path="/electronics/cameras" element={<CamerasPage />} />
          <Route path="/electronics/tvs" element={<TVsPage />} />
          <Route path="/electronics/instruments" element={<MusicalInstrumentsPage />} />
          <Route path="/home-kitchen/decor" element={<DecorPage />} />
          <Route path="/home-kitchen/furniture" element={<FurniturePage />} />
          <Route path="/home-kitchen/cookware" element={<CookwarePage />} />
          <Route path="/home-kitchen/garden" element={<GardenPage />} />
          <Route path="/checkout" element={<CheckoutForm />} />
           <Route path="/final-payment" element={<FinalPayment />} />
           <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
