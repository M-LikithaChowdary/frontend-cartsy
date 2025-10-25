// src/components/KidsToysPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './KidsToysPage.css';

const kidsToys = [
  {
    id: 1,
    name: 'Remote Control Car',
    price: 1199,
    description: 'Fast and fun remote-controlled car for kids.',
    image: '/images/kt1.jpeg',
    material: 'Plastic',
    design: 'Racer Style',
    styleTip: 'Best for outdoor play',
  },
  {
    id: 2,
    name: 'Stuffed Teddy Bear',
    price: 699,
    description: 'Soft and cuddly teddy bear for toddlers.',
    image: '/images/kt2.jpg',
    material: 'Soft Plush',
    design: 'Huggable',
    styleTip: 'Perfect gift for birthdays',
  },
  {
    id: 3,
    name: 'Lego Building Blocks Set',
    price: 1499,
    description: 'Creative Lego set to build imagination.',
    image: '/images/kt3.jpg',
    material: 'ABS Plastic',
    design: 'Colorful Bricks',
    styleTip: 'Great for cognitive development',
  },
  {
    id: 4,
    name: 'Musical Learning Laptop',
    price: 899,
    description: 'Educational laptop toy with lights and sound.',
    image: '/images/kt4.jpeg',
    material: 'Plastic & Electronics',
    design: 'Kid-Friendly UI',
    styleTip: 'Fun learning for toddlers',
  },
  {
    id: 5,
    name: 'Mini Kitchen Set',
    price: 1099,
    description: 'Colorful pretend kitchen playset.',
    image: '/images/kt5.jpg',
    material: 'Plastic',
    design: 'Role Play Set',
    styleTip: 'Engages in imaginative play',
  },
  {
    id: 6,
    name: 'Toy Drum Set',
    price: 1299,
    description: 'Musical toy drum kit for kids.',
    image: '/images/kt6.jpeg',
    material: 'Plastic',
    design: 'Mini Drum Kit',
    styleTip: 'Ideal for early music interest',
  },
  { id: 7, name: 'Play-Doh Fun Set', price: 499, description: 'Creative Play-Doh set for imaginative kids.', image: '/images/kt7.jpeg', material: 'Non-Toxic Dough', design: 'Moldable', styleTip: 'Great for sensory play' },
{ id: 8, name: 'Animal Figurine Set', price: 799, description: 'Realistic animal figurines for imaginative play.', image: '/images/kt8.jpeg', material: 'Plastic', design: 'Detailed Models', styleTip: 'Perfect for storytelling play' },
{ id: 9, name: 'Puzzle Board Set', price: 599, description: 'Engaging wooden puzzles for kids to develop problem-solving skills.', image: '/images/kt9.jpeg', material: 'Wood', design: 'Colorful Shapes', styleTip: 'Perfect for mental stimulation' },
{ id: 10, name: 'Interactive Robot Toy', price: 1499, description: 'Educational robot toy that talks and moves.', image: '/images/kt10.jpeg', material: 'Plastic & Electronics', design: 'Robot Figure', styleTip: 'Ideal for tech-savvy kids' }

];

function KidsToysPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Kids' Toys</h2>
      <div className="row">
        {kidsToys.map((toy) => (
          <div className="col-md-4 mb-4" key={toy.id}>
            <div className="card h-100">
              <img src={toy.image} alt={toy.name} className="card-img-top" style={{ height: '600px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{toy.name}</h5>
                <p className="card-text">{toy.description}</p>
                <p className="text-success fw-bold">₹{toy.price}</p>
                <Link
                  to="/product"
                  state={{ product: toy }}
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

export default KidsToysPage;
