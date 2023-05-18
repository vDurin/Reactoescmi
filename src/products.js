import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Menu from './Menu';
import Footer from './Footer';
import ProductsList from './productslist';
 

const List = () => {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://6466255a9c09d77a62fe6448.mockapi.io/products')
      .then(response => response.json())
      .then(data => setproducts(data))
      .catch(error => console.log(error));
  }, []);

  
  const handleCloseError = () => {
    setError(null);
  };
  return (
    <div>
 
    <ProductsList products={products} />
 
    </div>
  );
};

export default List;