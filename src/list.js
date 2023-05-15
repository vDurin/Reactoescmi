import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const Lista = ({ users, delete: handleDelete }) => {

  const handleClickDelete = (userId) => {
    handleDelete(userId);
  };

  return (   
      <ListGroup>
        <ListGroup.Item>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}> {user.id} - {user.email} - {user.name} 
            <button onClick={() => handleClickDelete(user.id)}>Elimina</button>
            </li>
          ))}    
        </ul>
        </ListGroup.Item>
      </ListGroup>
  ); 
};

export default Lista;