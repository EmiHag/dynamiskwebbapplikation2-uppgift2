import React, { useEffect, useState } from "react";
import FilmSearch from "./FilmSearch"; // Antagande att FilmSearch är ditt sökfält
import FilmDetails from "./FilmDetails";
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetch("https://swapi.info/api/films")
      .then(response => response.json())
      .then((data) => setFilms(data));
  }, []);

  function search(query) {
    const result = films.find(film =>
      film.title.toLowerCase().includes(query.toLowerCase()) ||
      film.director.toLowerCase().includes(query.toLowerCase()) ||
      film.opening_crawl.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResult(result);
  }

  return (
    <div>
      <h1>Star Wars filmer</h1>
      <FilmSearch onSearch={search} /> {/* Uppdaterat till 'search' */}
      {searchResult && <FilmDetails film={searchResult} />}
    </div>
  );
}

export default App;
