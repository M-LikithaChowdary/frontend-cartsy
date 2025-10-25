// src/components/FurniturePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './FurniturePage.css';

const furnitureItems = [
  {
    id: 1,
    name: 'Wooden King Size Bed',
    price: 29999,
    description: 'Solid wood frame with storage drawers.',
    image: '/images/fu1.jpeg',
    material: 'Sheesham Wood',
    design: 'Modern Design',
    styleTip: 'Ideal for master bedrooms',
  },
  {
    id: 2,
    name: 'Leather Recliner Sofa',
    price: 19499,
    description: 'Luxury 1-seater recliner for living rooms.',
    image: '/images/fu2.jpeg',
    material: 'Leatherette',
    design: 'Ergonomic Recliner',
    styleTip: 'Perfect for movie marathons',
  },
  {
    id: 3,
    name: 'Dining Table Set (6 Seater)',
    price: 21999,
    description: 'Compact, stylish dining with cushioned chairs.',
    image: '/images/fu3.jpeg',
    material: 'MDF & Fabric',
    design: 'Contemporary Dining',
    styleTip: 'Enhances your dining experience',
  },
  {
    id: 4,
    name: 'Modular Wardrobe',
    price: 17499,
    description: 'Spacious wardrobe with mirror panel.',
    image: '/images/fu4.jpeg',
    material: 'Engineered Wood',
    design: 'Minimalist',
    styleTip: 'Maximize storage in bedrooms',
  },
  {
    id: 5,
    name: 'Study Table with Bookshelf',
    price: 8999,
    description: 'Compact study desk with integrated bookshelf.',
    image: '/images/fu5.jpeg',
    material: 'Particle Board',
    design: 'Space-saving',
    styleTip: 'Perfect for home offices',
  },
  {
    id: 6,
    name: 'Accent Chair',
    price: 5499,
    description: 'Stylish chair for living rooms or reading corners.',
    image: '/images/fu6.jpeg',
    material: 'Fabric Upholstery',
    design: 'Modern Classic',
    styleTip: 'Adds color to any room',
  },
  { id: 7, name: 'Glass Top Coffee Table', price: 7999, description: 'Sleek coffee table with a tempered glass top and metal frame.', image: '/images/fu7.jpeg', material: 'Glass & Metal', design: 'Contemporary', styleTip: 'Perfect for modern living rooms' },
{ id: 8, name: 'Storage Ottoman', price: 4499, description: 'Versatile ottoman with hidden storage for living rooms or bedrooms.', image: '/images/fu8.jpeg', material: 'Fabric & Wood', design: 'Stylish & Functional', styleTip: 'Use as a footrest or extra storage' },
{ id: 9, name: 'Bookcase Shelf', price: 6499, description: 'Tall bookcase with multiple shelves for books and decor.', image: '/images/fu9.jpeg', material: 'Wood', design: 'Vertical Design', styleTip: 'Great for home libraries' },
{ id: 10, name: 'Queen Size Bed with Storage', price: 25999, description: 'Space-saving queen-size bed with under-bed storage.', image: '/images/fu10.jpeg', material: 'Pinewood', design: 'Sleek & Modern', styleTip: 'Perfect for guest bedrooms' }

];

function FurniturePage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Furniture</h2>
      <div className="row">
        {furnitureItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '600px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="text-success fw-bold">₹{item.price}</p>
                <Link
                  to="/product"
                  state={{ product: item }}
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

export default FurniturePage;
