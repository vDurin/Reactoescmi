import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Menu from './Menu';
import Footer from './Footer';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://645e112a12e0a87ac0e6b4cf.mockapi.io/users')
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
  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
    <Menu />
    <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}> {user.id} - {user.email} - {user.name} 
           <button onClick={() => handleDelete(user.id)}>Elimina</button>
          </li>
        ))}
      </ul>

      {error && (
        <div className="popup">
          <p>{error}</p>
          <button onClick={handleCloseError}>Chiudi</button>
        </div>
      )}

    <Footer />
    </div>
  );
};

export default UserList;