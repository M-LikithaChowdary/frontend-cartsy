// src/components/WFootwearPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './WFootwearPage.css';

const products = [
  { id: 1, name: 'Comfy Sandals', price: 779, image: '/images/wf1.jpeg', description: 'Stylish footwear for daily use', material: 'Leather', design: 'Sporty', styleTip: 'Pair with casuals' },
  { id: 2, name: 'High Heels', price: 999, image: '/images/wf2.jpeg', description: 'Premium Quality for parties', material: 'Suede', design: 'Formal', styleTip: 'Perfect with dresses' },
  { id: 3, name: 'Vibrant Flats', price: 500, image: '/images/wf3.jpeg', description: 'Perfect for long walks', material: 'Mesh', design: 'Athletic', styleTip: 'Wear with gym clothes' },
  { id: 4, name: 'Ethnic', price: 1199, image: '/images/wf4.jpeg', description: 'Elegant for traditional look', material: 'Patent Leather', design: 'High Heels', styleTip: 'Wear with formal dresses' },
  { id: 5, name: 'Sandals', price: 699, image: '/images/wf5.jpeg', description: 'Casual yet trendy', material: 'Canvas', design: 'Slip-ons', styleTip: 'Great for casual outings' },
  { id: 6, name: 'Shoes', price: 1499, image: '/images/wf6.jpeg', description: 'Luxury shoes for events', material: 'Genuine Leather', design: 'Boots', styleTip: 'Pair with coats and jackets' },
  { id: 7, name: 'Chunky Sneakers', price: 1299, image: '/images/wf7.jpeg', description: 'Trendy and comfortable for everyday wear', material: 'Synthetic with cushioned sole', design: 'Chunky sole with colorblock style', styleTip: 'Rock with mom jeans and a cropped hoodie for a street-style look.' },
{ id: 8, name: 'Ballet Flats', price: 849, image: '/images/wf8.jpeg', description: 'Classic and comfortable for work or casual wear', material: 'Soft faux leather', design: 'Closed-toe, low heel, rounded front', styleTip: 'Perfect with skirts, trousers, or kurta sets.' },
{ id: 9, name: 'Kolhapuri Chappals', price: 699, image: '/images/wf9.jpeg', description: 'Ethnic touch for festive or casual traditional outfits', material: 'Genuine leather with handcrafted stitching', design: 'Open toe, flat sole, traditional strap style', styleTip: 'Style with kurtis, sarees, or indo-western outfits.' },
{ id: 10, name: 'Ankle Strap Heels', price: 1399, image: '/images/wf10.jpeg', description: 'Elegant heels for parties and weddings', material: 'Velvet', design: 'Open-toe with ankle strap and block heels', styleTip: 'Match with gowns or lehengas for a glamorous finish.' }
];

function WFootwearPage() {
  return (
    <div className="footwear-page">
      <h2 className="footwear-title">Explore Footwear</h2>
      <div className="footwear-grid">
        {products.map((item) => (
          <div className="footwear-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <div className="price">₹{item.price}</div>
            <Link
              to="/product"
              state={{ product: item }}
              className="btn-view-details"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WFootwearPage;
