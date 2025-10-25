// src/components/MenShoesPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MenShoesPage.css';

const menShoes = [
  {
    id: 1,
    name: 'Running Sneakers',
    price: 2499,
    description: 'Lightweight running shoes with cushioned soles.',
    image: '/images/ms1.jpeg',
    material: 'Mesh',
    design: 'Sporty',
    styleTip: 'Best for workouts and casual wear',
  },
  {
    id: 2,
    name: 'Leather Loafers',
    price: 3199,
    description: 'Formal leather loafers for office and meetings.',
    image: '/images/ms2.jpeg',
    material: 'Genuine Leather',
    design: 'Slip-on',
    styleTip: 'Pair with trousers or chinos',
  },
  {
    id: 3,
    name: 'High-Top Sneakers',
    price: 2999,
    description: 'Trendy high-top sneakers for a bold look.',
    image: '/images/ms3.jpeg',
    material: 'Synthetic Leather',
    design: 'Lace-up',
    styleTip: 'Great with jeans and hoodies',
  },
  {
    id: 4,
    name: 'Slip-On Sandals',
    price: 1499,
    description: 'Breathable canvas shoes for daily use.',
    image: '/images/ms4.jpeg',
    material: 'Canvas',
    design: 'Low-top',
    styleTip: 'Perfect for summer outfits',
  },
  {
    id: 5,
    name: 'Formal Derby Shoes',
    price: 3499,
    description: 'Elegant derby shoes for formal occasions.',
    image: '/images/ms5.jpeg',
    material: 'Leather',
    design: 'Lace-up Formal',
    styleTip: 'Wear with suits and formalwear',
  },
  {
    id: 6,
    name: 'Casual Canvas Shoes',
    price: 899,
    description: 'Comfortable sandals for everyday use.',
    image: '/images/ms6.jpeg',
    material: 'Rubber',
    design: 'Open-Toe',
    styleTip: 'Use at home or during travel',
  },
  { id: 7, name: 'Combat Boots', price: 3999, description: 'Rugged boots designed for outdoor adventures.', image: '/images/ms7.jpeg', material: 'Genuine Leather', design: 'Lace-up', styleTip: 'Perfect with cargo pants and jackets.' },
{ id: 8, name: 'Brogue Shoes', price: 4499, description: 'Classic brogue design, perfect for formal wear.', image: '/images/ms8.jpeg', material: 'Leather', design: 'Wingtip Brogue', styleTip: 'Pair with tailored suits for a polished look.' },
{ id: 9, name: 'Sporty Slip-Ons', price: 1799, description: 'Slip-on sneakers designed for maximum comfort.', image: '/images/ms9.jpeg', material: 'Mesh and Rubber', design: 'Slip-on Casual', styleTip: 'Ideal for relaxed outings or errands.' },
{ id: 10, name: 'Chukka Boots', price: 3999, description: 'Versatile boots that work with both casual and formal outfits.', image: '/images/ms10.jpeg', material: 'Suede', design: 'Chukka', styleTip: 'Wear with denim or chinos for a smart-casual look.' }

];

function MenShoesPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Men's Shoes</h2>
      <div className="row">
        {menShoes.map((shoe) => (
          <div className="col-md-4 mb-4" key={shoe.id}>
            <div className="card h-100">
              <img src={shoe.image} alt={shoe.name} className="card-img-top" style={{ height: '600px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{shoe.name}</h5>
                <p className="card-text">{shoe.description}</p>
                <p className="text-success fw-bold">₹{shoe.price}</p>
                <Link
                  to="/product"
                  state={{ product: shoe }}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenShoesPage;
