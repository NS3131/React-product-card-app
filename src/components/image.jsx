import React from 'react';
import product from '../data/product';


const Image = () => (
  <img
    src={product.image}
    alt={product.name}
    className="card-img-top"
    style={{ height: '200px', objectFit: 'cover' }}
  />
);

export default Image;
