// src/components/GardenPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './GardenPage.css';

const gardenItems = [
  {
    id: 1,
    name: 'Indoor Plant Pot Set',
    price: 599,
    description: 'Elegant ceramic pots for indoor plants.',
    image: '/images/g1.jpeg',
    material: 'Ceramic',
    design: 'Modern Design',
    styleTip: 'Place near windows for a refreshing look',
  },
  {
    id: 2,
    name: 'Gardening Tool Kit',
    price: 899,
    description: 'Complete set for all gardening needs.',
    image: '/images/g2.jpeg',
    material: 'Steel and Plastic',
    design: 'Ergonomic Handles',
    styleTip: 'Great for balcony gardens',
  },
  {
    id: 3,
    name: 'Outdoor Hanging Planters',
    price: 499,
    description: 'Colorful hanging planters for patios.',
    image: '/images/g3.jpeg',
    material: 'Plastic',
    design: 'Weather Resistant',
    styleTip: 'Decorate balconies and porches',
  },
  {
    id: 4,
    name: 'Artificial Grass Carpet',
    price: 1199,
    description: 'Low maintenance, realistic grass look.',
    image: '/images/g4.jpeg',
    material: 'Synthetic',
    design: 'UV Resistant',
    styleTip: 'Perfect for terrace gardens',
  },
  {
    id: 5,
    name: 'Solar Garden Lights (Pack of 4)',
    price: 1499,
    description: 'Eco-friendly lights powered by sunlight.',
    image: '/images/g5.jpeg',
    material: 'Plastic and Solar Panel',
    design: 'Waterproof',
    styleTip: 'Enhance your garden ambience',
  },
  {
    id: 6,
    name: 'Self-Watering Planters',
    price: 699,
    description: 'Smart planters that water plants automatically.',
    image: '/images/g6.jpeg',
    material: 'Plastic',
    design: 'Modern & Sleek',
    styleTip: 'Ideal for busy plant lovers',
  },
  {
  id: 7,
  name: 'Wall Mounted Planter Rack',
  price: 1099,
  description: 'Stylish vertical planter rack for small spaces.',
  image: '/images/g7.jpeg',
  material: 'Metal',
  design: 'Space-Saving Grid',
  styleTip: 'Great for kitchen herbs or balcony decor',
},
{
  id: 8,
  name: 'Kneeling Pad for Gardening',
  price: 349,
  description: 'Comfortable foam pad to reduce knee strain while gardening.',
  image: '/images/g8.jpeg',
  material: 'High-Density Foam',
  design: 'Portable & Lightweight',
  styleTip: 'Must-have for prolonged planting sessions',
},
{
  id: 9,
  name: 'Garden Watering Can',
  price: 499,
  description: 'Classic watering can with a long spout for precision.',
  image: '/images/g9.jpeg',
  material: 'Plastic',
  design: 'Rust-Free Design',
  styleTip: 'Adds charm to your garden routine',
},
{
  id: 10,
  name: 'Plant Labels with Marker',
  price: 199,
  description: 'Reusable labels to keep track of your plants.',
  image: '/images/g10.jpeg',
  material: 'Plastic',
  design: 'Waterproof Tags',
  styleTip: 'Keep your garden organized and educational',
}
];

function GardenPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Garden Essentials</h2>
      <div className="row">
        {gardenItems.map((item) => (
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

export default GardenPage;
