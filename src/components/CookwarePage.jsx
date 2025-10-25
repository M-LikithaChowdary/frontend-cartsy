// src/components/CookwarePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CookwarePage.css';

const cookwareItems = [
  {
    id: 1,
    name: 'Non-Stick Frying Pan',
    price: 899,
    description: 'Durable non-stick coating for easy cooking.',
    image: '/images/cw1.jpeg',
    material: 'Aluminium',
    design: 'Ergonomic Handle',
    styleTip: 'Ideal for everyday cooking',
  },
  {
    id: 2,
    name: 'Stainless Steel Saucepan',
    price: 1299,
    description: 'Premium stainless steel with lid.',
    image: '/images/cw2.jpeg',
    material: 'Stainless Steel',
    design: 'Mirror Finish',
    styleTip: 'Perfect for soups and sauces',
  },
  {
    id: 3,
    name: 'Induction Cookware Set (4 pcs)',
    price: 2499,
    description: 'Compatible with induction cooktops.',
    image: '/images/cw3.jpeg',
    material: 'Hard Anodized',
    design: 'Flat Base',
    styleTip: 'Great for modern kitchens',
  },
  {
    id: 4,
    name: 'Cast Iron Skillet',
    price: 1799,
    description: 'Heavy-duty skillet for perfect searing.',
    image: '/images/cw4.jpeg',
    material: 'Cast Iron',
    design: 'Pre-Seasoned',
    styleTip: 'Best for rustic cooking',
  },
  {
    id: 5,
    name: 'Ceramic Casserole Dish',
    price: 1099,
    description: 'Stylish baking and serving dish.',
    image: '/images/cw5.jpeg',
    material: 'Ceramic',
    design: 'Colorful Exterior',
    styleTip: 'Serve directly to table',
  },
  {
    id: 6,
    name: 'Pressure Cooker (5L)',
    price: 2199,
    description: 'Fast and efficient pressure cooking.',
    image: '/images/cw6.jpeg',
    material: 'Aluminium',
    design: 'Safe Lock System',
    styleTip: 'Essential for Indian cooking',
  },
  {
  id: 7,
  name: 'Tadka Pan with Wooden Handle',
  price: 499,
  description: 'Perfect for seasoning dishes with Indian spices.',
  image: '/images/cw7.jpeg',
  material: 'Aluminium',
  design: 'Flat Bottom',
  styleTip: 'Great for quick tempering and flavoring',
},
{
  id: 8,
  name: 'Multi-Purpose Steamer Pot',
  price: 1899,
  description: 'Ideal for steaming vegetables, momos, and more.',
  image: '/images/cw8.jpeg',
  material: 'Stainless Steel',
  design: 'Double-Layer',
  styleTip: 'Healthy cooking without oil',
},
{
  id: 9,
  name: 'Grill Pan with Ridges',
  price: 999,
  description: 'Get perfect grill marks on your food indoors.',
  image: '/images/cw9.jpeg',
  material: 'Cast Aluminium',
  design: 'Ribbed Base',
  styleTip: 'Great for sandwiches and kebabs',
},
{
  id: 10,
  name: 'Milk Boiler with Whistle',
  price: 899,
  description: 'Boils milk safely without spilling over.',
  image: '/images/cw10.jpeg',
  material: 'Stainless Steel',
  design: 'Whistle Indicator',
  styleTip: 'No more messy stovetops',
}

];

function CookwarePage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Cookware</h2>
      <div className="row">
        {cookwareItems.map((item) => (
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

export default CookwarePage;
