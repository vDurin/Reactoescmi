import React, { useState } from 'react';
import './App.css';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const ProductsList= ({ products, delete: handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

 

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(products.length / recordsPerPage);



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
    const totalPages = Math.ceil(products.length / recordsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (   
   <div class="row">
      
          {currentRecords.map((products) => (
            <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={products.immagine}/>
             <Card.Body>
               <Card.Title>{products.nome}</Card.Title>
               <Card.Text>
               {products.description}
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>
           </div>
          ))}    
    
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

export default ProductsList;