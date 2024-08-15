import React from "react";

function CategoryFilter({ selectedGenre,onGenreChange}) {
  function handleChange(e) {
  onGenreChange(e.target.value);
  }

  
  const imageUrl = process.env.PUBLIC_URL + '/images/';

  return (
    <div className="filter">
     
        <select name="filter" value={selectedGenre} onChange={handleChange}>
          <option value="All">Filter By Genre</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Drama">Drama</option>
          <option value="Animation">Animation</option>
          <option value="Crime">Crime</option>
        </select>
     
      
    </div>
  );
}

export default CategoryFilter;
