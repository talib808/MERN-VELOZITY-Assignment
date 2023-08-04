import React, { useState } from 'react';
import debounce from 'debounce';
import './SearchBar.css'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debounceSearch(newQuery);
  };

  const debounceSearch = debounce((newQuery) => {
    onSearch(newQuery);
  }, 300);

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInputChange}
      />
      <button className="search-button">
        <span role="img" aria-label="Search">
          🔍
        </span>
      </button>
    </div>
  );
};

export default SearchBar;

// import React, { useState } from 'react';
// import debounce from 'debounce';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     const newQuery = event.target.value;
//     setQuery(newQuery);
//     debounceSearch(newQuery);
//   };

//   const debounceSearch = debounce((newQuery) => {
//     onSearch(newQuery);
//   }, 300);

//   return (
//     <input
//       type="text"
//       placeholder="Search movies..."
//       value={query}
//       onChange={handleInputChange}
//     />
//   );
// };

// export default SearchBar;