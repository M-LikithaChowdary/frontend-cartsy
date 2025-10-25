import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WClothingPage.css'; // Make sure to add styles if needed

function WClothingPage() {
  const navigate = useNavigate();

  // Sample product data
  const products = [
    { 
      id: 1, 
      name: 'Pretty Summer Top', 
      image: '/images/wc1.jpeg', 
      description: 'A stylish top perfect for summer.',
      price: 779, 
      material: 'Lightweight, breathable fabric', 
      design: 'Puff sleeves, floral embroidery, midi length', 
      styleTip: 'Pair with jeans for a casual look.',
 },
    { 
      id: 2, 
      name: 'Embroidered Lehenga Set', 
      image: '/images/wc2.jpeg', 
      description: 'Perfect for weddings, festive celebrations, and grand occasions',
      price: 2599, 
      material: 'Lightweight net fabric with detailed embroidery', 
      design: 'Embroidered lehenga with gold border, maroon embroidered blouse, matching potli', 
      styleTip: 'Pair with chunky silver jewelry and loose curls for a breathtaking, timeless appeal.'
    },
    { 
      id: 3, 
      name: 'Anarkali Set', 
      image: '/images/wc3.jpeg', 
      description: 'Perfect for festive occasions, pre-wedding celebrations, or intimate gatherings.',
      price: 1679, 
      material: 'Lightweight, breathable fabric with intricate embroidery', 
      design: 'Pastel blue Anarkali with silver detailing, mustard dupatta with mirror work', 
      styleTip: ' Pair with statement earrings, soft curls, and a dewy makeup look for a radiant, festive vibe.'
    },
    { 
      id: 4, 
      name: 'High waist Jeans', 
      image: '/images/wc4.jpeg', 
      description: 'Perfect for festive gatherings, family celebrations, or daytime events.',
      price: 999, 
      material: ' Lightweight, breathable fabric', 
      design: 'Full-length Anarkali, floral embroidery, matching dupatta', 
      styleTip: 'Complete the look with bold earrings and soft curls for an effortlessly elegant vibe.'
    },
    { 
      id: 5, 
      name: 'Roundneck T-shirt', 
      image: '/images/wc5.jpeg', 
      description: 'Ideal for casual gatherings, day functions, and festive brunches.',
      price: 499, 
      material: '100% breathable cotton with printed detailing', 
      design: 'Blue and green floral print, keyhole neckline, elbow-length sleeves, tasseled dupatta', 
      styleTip: 'Complement the look with oxidized silver jewelry and minimalistic sandals for a fresh, daytime appeal.'
    },
    { 
      id: 6, 
      name: 'Peach and Pink Floral Cotton Midi Dress', 
      image: '/images/wc6.jpg', 
      description: 'Perfect for brunch dates, garden parties, or casual strolls.',
      price: 1199, 
      material: '100% breathable cotton with floral print', 
      design: 'V-neckline, puff sleeves, fit-and-flare silhouette, midi length', 
      styleTip: ' Pair it with minimal jewelry and tan sandals for a chic daytime look.'
    },
    { 
  id: 7, 
  name: 'Boho Maxi Skirt', 
  image: '/images/wc7.jpeg', 
  description: 'Ideal for casual outings, beach walks, or music festivals.',
  price: 899, 
  material: 'Soft rayon blend with ethnic block prints', 
  design: 'Tiered silhouette, elastic waist, bohemian patterns', 
  styleTip: 'Style it with a crop top and jhumkas for an Indo-western vibe.'
},
{ 
  id: 8, 
  name: 'Chikankari Kurti', 
  image: '/images/wc8.jpeg', 
  description: 'Perfect for office wear, casual meetups, or semi-formal events.',
  price: 1049, 
  material: 'Pure cotton with Chikankari embroidery', 
  design: 'Straight fit, 3/4 sleeves, pastel hue, side slits', 
  styleTip: 'Pair with leggings and juttis for a traditional yet modern look.'
},
{ 
  id: 9, 
  name: 'Denim Dungaree Dress', 
  image: '/images/wc9.jpeg', 
  description: 'Great for casual days out, shopping trips, or movie dates.',
  price: 1349, 
  material: 'Stretchable denim fabric', 
  design: 'Sleeveless, button-down front, mid-thigh length', 
  styleTip: 'Layer it over a plain tee with white sneakers for a trendy street style.'
},
{ 
  id: 10, 
  name: 'Pastel Co-ord Set', 
  image: '/images/wc10.jpeg', 
  description: 'Effortless style for travel, brunches, or chilled evenings.',
  price: 1599, 
  material: 'Soft, flowy crepe with subtle sheen', 
  design: 'Boxy top with wide-leg pants, elastic waist, coordinated color palette', 
  styleTip: 'Add a pair of hoops and strappy sandals for a sleek, Instagram-worthy look.'
}

  ];

  // Handle click to navigate to product details page
  const handleProductClick = (product) => {
    // Navigate to ProductDetailPage and pass product data as state
    navigate('/ProductDetailPage', { state: { product } });
  };

  return (
    <div>
      <h1>Women's Clothing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            onClick={() => handleProductClick(product)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image" 
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price: </strong>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WClothingPage;
