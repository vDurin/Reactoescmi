import React, { useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';



const Lista = ({ users, delete: handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const handleClickDelete = (userId) => {
    handleDelete(userId);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(users.length / recordsPerPage);



const maxPageNumbers = 3; // numero massimo di numeri di pagina da visualizzare
const middlePageNumber = Math.floor(maxPageNumbers / 2); // numero di pagina centrale
let startPageNumber = currentPage - middlePageNumber; // numero di pagina di partenza
startPageNumber = startPageNumber < 1 ? 1 : startPageNumber; // assicurarsi che il numero di pagina di partenza non sia inferiore a 1
let endPageNumber = startPageNumber + maxPageNumbers - 1; // numero di pagina di fine
endPageNumber = endPageNumber > totalPages ? totalPages : endPageNumber; // assicurarsi che il numero di pagina di fine non sia superiore al numero totale di pagine
const pageNumbers = Array.from({ length: endPageNumber - startPageNumber + 1 }, (_, index) => startPageNumber + index);






  

 
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
      <Pagination>
 
      <Pagination.Prev  onClick={handlePreviousPage}/>
      <Pagination.Item>Pagina corrente:{currentPage}</Pagination.Item>
          
      {pageNumbers.map((page) => (
      <Pagination.Item  key={page}  onClick={() => handlePageChange(page)} disabled={ currentPage === page  }  className={currentPage === page ? "current-page" : ""}>{page}</Pagination.Item>
        ))}
      <Pagination.Ellipsis /> 
      <Pagination.Item>Totale Pagine:{totalPages}</Pagination.Item>
      <Pagination.Next onClick={handleNextPage} />
      
      </Pagination>
 
      </div>
    </div>
  ); 
};

export default Lista;