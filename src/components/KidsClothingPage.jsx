// src/components/KidsClothingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './KidsClothingPage.css';

const kidsClothing = [
  {
    id: 1,
    name: 'Rosy Ruffle Dress',
    price: 599,
    description: 'Elegant baby dress with floral patterns and frilled details, perfect for special occasions.',
    image: '/images/kc1.jpg',
    material: 'Cotton',
    design: 'Round Neck',
    styleTip: 'Pair with shorts or jeans',
  },
  {
    id: 2,
    name: ' Cool Breeze Pullover',
    price: 1199,
    description: 'Minimal and classy zip-up pullover with a modern, sleek look.',
    image: '/images/kc2.jpg',
    material: 'Denim',
    design: 'Button Down',
    styleTip: 'Perfect for winter outings',
  },
  {
    id: 3,
    name: 'Lavender Twirl Gown',
    price: 1499,
    description: 'Flowy, tiered dress in soft mauve ideal for parties or twirling around.',
    image: '/images/kc3.jpg',
    material: 'Cotton Blend',
    design: 'Sleeveless Dress',
    styleTip: 'Best for birthday parties',
  },
  {
    id: 4,
    name: 'Minty Mood Set',
    price: 1299,
    description: 'Comfy cotton co-ord with relaxed tee and shorts — playful yet simple.',
    image: '/images/kc4.jpg',
    material: 'Fleece',
    design: 'Pullover Hoodie',
    styleTip: 'Pair with joggers or leggings',
  },
  {
    id: 5,
    name: 'Explorer Cargo Set',
    price: 799,
    description: 'Adventurous summer outfit with multi-pocket cargo shorts and matching shirt.',
    image: '/images/kc5.jpg',
    material: 'Cotton',
    design: 'Elastic Waistband',
    styleTip: 'Great for summer playtime',
  },
  {
    id: 6,
    name: 'Blossom Kurta Set',
    price: 1999,
    description: 'Charming ethnic floral kurta with soft pastel tones for a festive flair.',
    image: '/images/kc6.jpg',
    material: 'Silk Blend',
    design: 'Mandarin Collar',
    styleTip: 'Best for festive occasions',
  },
  { id: 7, name: 'Sunny Stripes Dress', price: 899, description: 'Bright and cheerful striped dress, perfect for sunny days.', image: '/images/kc7.jpeg', material: 'Cotton', design: 'A-Line Dress', styleTip: 'Ideal for playdates or outings.' },
{ id: 8, name: 'Safari Adventure Set', price: 1099, description: 'Fun safari-themed set with a t-shirt and cargo shorts for a bold look.', image: '/images/kc8.jpeg', material: 'Cotton Blend', design: 'Short Sleeve T-shirt', styleTip: 'Perfect for exploring the outdoors.' },
{ id: 9, name: 'Cosmic Hoodie', price: 1499, description: 'Cosmic printed hoodie with soft fabric, ideal for cooler evenings.', image: '/images/kc9.jpeg', material: 'Polyester', design: 'Pullover Hoodie', styleTip: 'Great for casual days or evening walks.' },
{ id: 10, name: 'Butterfly Tulle Dress', price: 1799, description: 'Magical butterfly print on a layered tulle dress, perfect for birthdays or events.', image: '/images/kc10.jpeg', material: 'Tulle', design: 'Flared Dress', styleTip: 'Perfect for special celebrations.' }

];

function KidsClothingPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Kids' Clothing</h2>
      <div className="row">
        {kidsClothing.map((clothing) => (
          <div className="col-md-4 mb-4" key={clothing.id}>
            <div className="card h-100">
              <img src={clothing.image} alt={clothing.name} className="card-img-top" style={{ height: '600px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{clothing.name}</h5>
                <p className="card-text">{clothing.description}</p>
                <p className="text-success fw-bold">₹{clothing.price}</p>
                <Link
                  to="/product"
                  state={{ product: clothing }}
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

export default KidsClothingPage;
