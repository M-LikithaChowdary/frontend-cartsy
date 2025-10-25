// src/components/KidsBooksPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './KidsBooksPage.css';

const kidsBooks = [
  {
    id: 1,
    name: 'Allah made me different',
    price: 199,
    description: 'A thrilling animal adventure for young readers.',
    image: '/images/kb1.jpg',
    material: 'Paperback',
    design: 'Illustrated',
    styleTip: 'Perfect bedtime story',
  },
  {
    id: 2,
    name: 'May God Bless You and Keep You',
    price: 249,
    description: 'Enter a world of sparkly unicorns and dreams.',
    image: '/images/kb2.jpg',
    material: 'Glossy Cover',
    design: 'Full Color',
    styleTip: 'Great for fantasy lovers',
  },
  {
    id: 3,
    name: 'New Cutie in Town',
    price: 149,
    description: 'Learn letters and numbers with fun illustrations.',
    image: '/images/kb3.jpg',
    material: 'Board Book',
    design: 'Chunky Pages',
    styleTip: 'For preschool learning',
  },
  {
    id: 4,
    name: 'Animal Rescue Friends',
    price: 299,
    description: 'A collection of short fairy tales.',
    image: '/images/kb4.jpg',
    material: 'Paperback',
    design: 'Glossy Finish',
    styleTip: 'Enjoy with dress-up time',
  },
  {
    id: 5,
    name: 'Love you Always',
    price: 199,
    description: 'Gentle stories with friendly dinosaurs.',
    image: '/images/kb5.jpg',
    material: 'Hardcover',
    design: 'Illustrated',
    styleTip: 'Great nighttime read',
  },
  {
    id: 6,
    name: 'The Secret Ingredient',
    price: 179,
    description: 'Stories that teach kindness and courage.',
    image: '/images/kb6.jpg',
    material: 'Paperback',
    design: 'Text + Illustrations',
    styleTip: 'Ideal for early readers',
  },
  { id: 7, name: 'The Magical Kingdom', price: 349, description: 'A captivating story of adventure and magic in a faraway kingdom.', image: '/images/kb7.jpeg', material: 'Hardcover', design: 'Full Color', styleTip: 'Perfect for young adventurers' },
{ id: 8, name: 'The Little Explorer', price: 259, description: 'An exploration book that takes children on a journey around the world.', image: '/images/kb8.jpeg', material: 'Paperback', design: 'Illustrated', styleTip: 'Ideal for curious minds' },
{ id: 9, name: 'The Brave Little Lion', price: 199, description: 'A heartwarming story of courage and friendship in the animal kingdom.', image: '/images/kb9.jpeg', material: 'Board Book', design: 'Chunky Pages', styleTip: 'Great for bedtime reading' },
{ id: 10, name: 'Dream Big, Little One', price: 249, description: 'A motivational story for young readers, inspiring them to dream big.', image: '/images/kb10.jpeg', material: 'Hardcover', design: 'Illustrated', styleTip: 'Perfect for young dreamers' }

];

function KidsBooksPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Kids' Story Books</h2>
      <div className="row">
        {kidsBooks.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100">
              <img src={book.image} alt={book.name} className="card-img-top" style={{ height: '400px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">{book.description}</p>
                <p className="text-success fw-bold">₹{book.price}</p>
                <Link
                  to="/product"
                  state={{ product: book }}
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

export default KidsBooksPage;
