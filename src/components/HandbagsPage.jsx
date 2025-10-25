// src/components/HandbagsPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HandbagsPage.css';

const handbags = [
  {
    id: 1,
    name: 'Classic Leather Tote',
    price: 2499,
    description: 'Elegant and spacious tote bag.',
    image: '/images/wh1.jpeg',
    material: 'Genuine leather',
    design: 'Minimalist',
    styleTip: 'Pairs well with formal wear.',
  },
  {
    id: 2,
    name: 'Minimalist Handbag',
    price: 1999,
    description: 'Chic and stylish everyday bag.',
    image: '/images/wh2.jpeg',
    material: 'PU leather',
    design: 'Clean lines',
    styleTip: 'Wear it with monochrome outfits.',
  },
  {
    id: 3,
    name: 'Premium Shoulder Bag',
    price: 3299,
    description: 'High-quality leather shoulder bag.',
    image: '/images/wh3.jpeg',
    material: 'Italian leather',
    design: 'Elegant straps',
    styleTip: 'Perfect with heels and formals.',
  },
  {
    id: 4,
    name: 'Floral Printed Bag',
    price: 1499,
    description: 'Trendy and colorful handbag.',
    image: '/images/wh4.jpeg',
    material: 'Canvas',
    design: 'Floral patterns',
    styleTip: 'Matches floral dresses.',
  },
  {
    id: 5,
    name: 'Vintage Clutch',
    price: 899,
    description: 'Perfect for parties and evenings.',
    image: '/images/wh5.jpeg',
    material: 'Velvet',
    design: 'Retro embroidery',
    styleTip: 'Pair with ethnic wear.',
  },
  {
    id: 6,
    name: 'Convertible Backpack',
    price: 2799,
    description: 'Stylish and practical design.',
    image: '/images/wh6.jpeg',
    material: 'Synthetic',
    design: 'Convertible straps',
    styleTip: 'Looks great with casuals.',
  },
  { id: 7, name: 'Textured Sling Bag', price: 1599, description: 'Compact yet spacious crossbody bag.', image: '/images/wh7.jpeg', material: 'Faux leather', design: 'Textured finish with gold chain strap', styleTip: 'Ideal for casual outings or coffee dates.' },
{ id: 8, name: 'Boho Fringe Bag', price: 1399, description: 'Trendy bohemian-style handbag.', image: '/images/wh8.jpeg', material: 'Suede', design: 'Fringe accents with zipper closure', styleTip: 'Pair with maxi dresses or denim jackets.' },
{ id: 9, name: 'Metallic Party Clutch', price: 1099, description: 'Shiny clutch for evening parties.', image: '/images/wh9.jpeg', material: 'Metallic PU', design: 'Envelope flap with snap button', styleTip: 'Carry with party gowns or sarees.' },
{ id: 10, name: 'Transparent Tote Bag', price: 899, description: 'Modern see-through tote for a bold look.', image: '/images/wh10.jpeg', material: 'PVC', design: 'Clear body with colored inner pouch', styleTip: 'Perfect for concerts and fashion-forward events.' }

];

function HandbagsPage() {
  return (
    <div className="handbags-page">
      <h2 className="handbags-title">Explore Handbags</h2>
      <div className="handbag-grid">
        {handbags.map((item) => (
          <div className="handbag-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <div className="price">₹{item.price}</div>
            <Link
              to="/product"
              state={{ product: item }}
              className="btn btn-primary"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HandbagsPage;
