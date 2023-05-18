import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Menu from './Menu';
import Footer from './Footer';
import Lista from './list';
import List from './products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 
const Home = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6466255a9c09d77a62fe6448.mockapi.io/products')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (userId) => {
    fetch(`https://645e112a12e0a87ac0e6b4cf.mockapi.io/users/id=${userId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Rimuovi l'utente dall'array degli utenti nello stato
          setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));


          fetch('https://645e112a12e0a87ac0e6b4cf.mockapi.io/users')
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.log(error));

        } else {
           setError('Errore durante l\'eliminazione del record');
        }
      })
      .catch(error => console.log(error));
  };

  return (
  <Lista users={users} delete={handleDelete} />
  );
};

const Mainpage = () => {

  const [users, setUsers] = useState([]);


  const handleDelete = (userId) => {
    fetch(`https://645e112a12e0a87ac0e6b4cf.mockapi.io/users/id=${userId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Rimuovi l'utente dall'array degli utenti nello stato
          setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));


          fetch('https://645e112a12e0a87ac0e6b4cf.mockapi.io/users')
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.log(error));

        } else {
           setError('Errore durante l\'eliminazione del record');
        }
      })
      .catch(error => console.log(error));
  };

  const [error, setError] = useState(null);
  
  const handleCloseError = () => {
    setError(null);
  };

  return (
    <Router>
      <div class="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-products" element={<List users={users} delete={handleDelete} />} />
        </Routes>
        {error && (
          <Alert variant="danger">
            <p>{error}</p>
            <button className="btn btn-danger" onClick={handleCloseError}>
              Chiudi
            </button>
          </Alert>
        )}
        <Footer />
      </div>
    </Router>
  );
};


export default Mainpage;