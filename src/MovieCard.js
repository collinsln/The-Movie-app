import React from "react";
import {Link} from "react-router-dom";


function MovieCard({id, releaseYear, posterUrl, title, genre}) {
  return (
   <div className="space-movie-card">
    
    <Link to={`/movie/${id}`}>
    
    <div className="ui card custom-card">
    <div className="content">
    <div className="center aligned">
      <div className="ui small image">
       <img className="ui centered image" src={posterUrl} alt={title} />
      </div>
      <div className="space">
        <div id="titleCard">{title}</div>
        <div>{releaseYear}</div>
        <div>{genre}</div>
        </div>
        </div>
        </div>
        </div>
   </Link>
    </div>
  );
}

export default MovieCard;