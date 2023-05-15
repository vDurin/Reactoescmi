import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Lista = ({ users, delete: handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const handleClickDelete = (userId) => {
    handleDelete(userId);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(users.length / recordsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
          {currentRecords.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><Button variant="outline-danger" onClick={() => handleClickDelete(user.id)}> Elimina </Button></td>
              </tr>
          ))}    
        </tbody>
      </Table>
      <div>
        <button onClick={handlePreviousPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  ); 
};

export default Lista;