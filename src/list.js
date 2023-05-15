import React from 'react';
import Table from 'react-bootstrap/Table';


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
                <td><button onClick={() => handleClickDelete(user.id)}>Elimina</button></td>
              </tr>
          ))}    
        </tbody>
      </Table>
    </div>
  ); 
};

export default Lista;