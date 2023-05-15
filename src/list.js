import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Lista = ({ users, delete: handleDelete }) => {

  const handleClickDelete = (userId) => {
    handleDelete(userId);
  };

  return (   
   <div>
      <Table variant="dark">
        <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>COMMAND</th>
              </tr>
        </thead>
        <tbody>
          {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><Button variant="outline-danger" onClick={() => handleClickDelete(user.id)}> Elimina </Button></td>
              </tr>
          ))}    
        </tbody>
      </Table>
    </div>
  ); 
};

export default Lista;