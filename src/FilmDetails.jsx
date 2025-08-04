import './App.css';

function FilmDetails({ film }) {
  return (
    <div>
      <h2>{film.title}</h2>
      <p>Regissör: {film.director}</p>
      <p>Producent: {film.producer}</p>
      <p>Sammanfattning: {film.opening_crawl}</p>
      <p>Releasedatum: {film.release_date}</p>
      <p>Antal karaktärer: {film.characters.length}</p>
      <p>Antal rymdskepp: {film.starships.length}</p>
    </div>
  );
}

export default FilmDetails;
