import React from "react";
import MoviesContainer from "./MoviesContainer";
import CategoryFilter from "./CategoryFilter";

function MoviesPage({ dataMovies, selectedGenre, onGenreChange,handleMovieClick }) {
 

  return (
    <div>
      <CategoryFilter selectedGenre={selectedGenre} onGenreChange={onGenreChange}  />
      <div className="ui segment custom-background">
        <MoviesContainer dataMovies={dataMovies} handleMovieClick={handleMovieClick} />
      </div>
    </div>
  );
}

export default MoviesPage;
