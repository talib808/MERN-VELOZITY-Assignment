
import React from 'react';
import "./Pagination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;







// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div className="pagination">
//       {pages.map((page) => (
//         <button
//           key={page}
//           className={currentPage === page ? 'active' : ''}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Pagination;