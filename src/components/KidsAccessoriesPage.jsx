// src/components/KidsAccessoriesPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './KidsAccessoriesPage.css';

const kidsAccessories = [
  {
    id: 1,
    name: 'Playful Patch Caps',
    price: 699,
    description: 'Trendy caps with fun cartoon-style embroidery — a cool pick for sunny adventures.',
    image: '/images/ka1.jpg',
    material: 'Polyester',
    design: 'Zipper Closure',
    styleTip: 'Perfect for school or travel',
  },
  {
    id: 2,
    name: 'Fairy Bloom Hair Set',
    price: 199,
    description: 'Elegant bow, floral, and crown-inspired clips in soft pink hues — perfect for dress-up days.',
    image: '/images/ka2.jpg',
    material: 'Felt & Plastic',
    design: 'Soft Grip',
    styleTip: 'Great for themed parties',
  },
  {
    id: 3,
    name: 'Candy Pop Shades',
    price: 299,
    description: 'Bright, beaded sunglasses with a playful summer vibe for kids.',
    image: '/images/ka3.jpg',
    material: 'Plastic',
    design: 'Round Frame',
    styleTip: 'Stylish and safe outdoors',
  },
  {
    id: 4,
    name: 'Hero Sip Bottle',
    price: 349,
    description: 'Cool character bottle with a superhero design, perfect for school or playtime.',
    image: '/images/ka4.jpg',
    material: 'Plastic',
    design: 'Flip Lid',
    styleTip: 'Easy to carry to school',
  },
  {
    id: 5,
    name: 'Princess TiarWhimsy Bow Clips',
    price: 249,
    description: 'Charming polka-dot and textured bows for everyday cuteness and special looks.',
    image: '/images/ka5.jpg',
    material: 'Plastic & Rhinestones',
    design: 'Adjustable Fit',
    styleTip: 'Complete the princess look',
  },
  {
    id: 6,
    name: 'Knot & Bloom Bands',
    price: 179,
    description: 'Soft, knotted headbands in earthy tones and prints — comfy and stylish for all-day wear.',
    image: '/images/ka6.jpg',
    material: 'Silicone',
    design: 'Stretchable',
    styleTip: 'Awesome party favors',
  },
  { id: 7, name: 'Magic Star Headband', price: 299, description: 'A sparkling starry headband that adds a touch of magic to any look.', image: '/images/ka10.jpeg', material: 'Metal & Rhinestone', design: 'Elastic Band', styleTip: 'Perfect for dress-up or parties.' },
{ id: 8, name: 'Animal Friends Socks', price: 199, description: 'Colorful socks featuring cute animal designs — fun and cozy for kids.', image: '/images/ka9.jpeg', material: 'Cotton Blend', design: 'Ankle Length', styleTip: 'Great with casual outfits.' },
{ id: 9, name: 'Superhero Backpack', price: 599, description: 'Fun and durable backpack featuring popular superhero designs for school or adventures.', image: '/images/ka8.jpeg', material: 'Nylon', design: 'Zipper Closure', styleTip: 'Perfect for school or outings.' },
{ id: 10, name: 'Bubblegum Wristband', price: 149, description: 'Colorful silicone wristband with a playful bubblegum design — a perfect accessory for active kids.', image: '/images/ka7.jpeg', material: 'Silicone', design: 'Stretchable', styleTip: 'Great for casual and sporty outfits.' }

];

function KidsAccessoriesPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Kids' Accessories</h2>
      <div className="row">
        {kidsAccessories.map((item) => (
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

export default KidsAccessoriesPage;
