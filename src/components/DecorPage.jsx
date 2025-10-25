// src/components/DecorPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './DecorPage.css';

const decorItems = [
  {
    id: 1,
    name: 'Abstract Wall Art',
    price: 1499,
    description: 'Modern abstract painting to add elegance.',
    image: '/images/d1.jpeg',
    material: 'Canvas',
    design: 'Abstract Modern',
    styleTip: 'Perfect for living rooms',
  },
  {
    id: 2,
    name: 'Decorative Wall Mirror',
    price: 2099,
    description: 'Stylish mirror with vintage frame.',
    image: '/images/d2.jpeg',
    material: 'Wood & Glass',
    design: 'Vintage Style',
    styleTip: 'Great for entryways',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 999,
    description: 'Elegant vases for flowers and decor.',
    image: '/images/d3.jpeg',
    material: 'Ceramic',
    design: 'Minimalist',
    styleTip: 'Use for coffee tables',
  },
  {
    id: 4,
    name: 'String Lights (Fairy Lights)',
    price: 499,
    description: 'Warm lights for cozy ambiance.',
    image: '/images/d4.jpeg',
    material: 'Copper Wire',
    design: 'Twinkling Lights',
    styleTip: 'Decorate bedrooms or balconies',
  },
  {
    id: 5,
    name: 'Handmade Dreamcatcher',
    price: 799,
    description: 'Traditional dreamcatcher with feathers.',
    image: '/images/d5.jpeg',
    material: 'Thread & Beads',
    design: 'Bohemian',
    styleTip: 'Hang near windows',
  },
  {
    id: 6,
    name: 'Scented Candles Set',
    price: 699,
    description: 'Aromatherapy candles for relaxation.',
    image: '/images/d6.jpeg',
    material: 'Soy Wax',
    design: 'Decorative Jars',
    styleTip: 'Use for a spa-like home feel',
  },
  {
  id: 7,
  name: 'Macrame Wall Hanging',
  price: 1299,
  description: 'Boho-style handmade macrame for artistic interiors.',
  image: '/images/d7.jpeg',
  material: 'Cotton Rope',
  design: 'Bohemian',
  styleTip: 'Ideal for bedrooms or reading corners',
},
{
  id: 8,
  name: 'Tabletop Water Fountain',
  price: 1899,
  description: 'Mini indoor fountain for peaceful vibes and aesthetics.',
  image: '/images/d8.jpeg',
  material: 'Resin',
  design: 'Zen-Inspired',
  styleTip: 'Place on side tables or desks',
},
{
  id: 9,
  name: 'Artificial Plant in Pot',
  price: 599,
  description: 'Low-maintenance greenery to freshen up your space.',
  image: '/images/d9.jpeg',
  material: 'Plastic & Ceramic',
  design: 'Realistic Look',
  styleTip: 'Great for office desks or shelves',
},
{
  id: 10,
  name: 'Decorative Photo Frame Set',
  price: 899,
  description: 'Assorted photo frames to personalize your wall.',
  image: '/images/d10.jpeg',
  material: 'MDF & Glass',
  design: 'Assorted Sizes',
  styleTip: 'Create a gallery wall of memories',
}

];

function DecorPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Home Decor</h2>
      <div className="row">
        {decorItems.map((item) => (
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

export default DecorPage;
