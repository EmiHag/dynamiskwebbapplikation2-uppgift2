import React, { useState } from 'react';
import './App.css';

function FilmSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Sök film..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Sök</button>
    </form>
  );
}

export default FilmSearch;
