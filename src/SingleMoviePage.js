import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function SingleMoviePage({ dataMovies, onDelete, onEdit }) {
  const { id } = useParams();
  const selectedMovie = dataMovies.find((movie) => movie.id === parseInt(id));

  const [isEditMode, setEditMode] = useState(false);
  const [editedMovieData, setEditedMovieData] = useState({ ...selectedMovie });

  const { releaseYear, poster, title, genre, director, comments, rating } = selectedMovie;
  const imageUrl = process.env.PUBLIC_URL + '/images/';

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    
    onEdit(editedMovieData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedMovieData({ ...selectedMovie });
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMovieData({ ...editedMovieData, [name]: value });
  };

  if (!selectedMovie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="single-movie-container">
      <h1 id="single-title">
        {isEditMode ? (
          <input
            type="text"
            name="title"
            value={editedMovieData.title}
            onChange={handleInputChange}
          />
        ) : (
          title
        )}
      </h1>
      <p className="single-details">
        <strong>Director:</strong>{' '}
        {isEditMode ? (
          <input
            type="text"
            name="director"
            value={editedMovieData.director}
            onChange={handleInputChange}
          />
        ) : (
          director
        )}
      </p>
      <p className="single-details">
        <strong>Release Year: </strong>
        {isEditMode ? (
          <input
            type="text"
            name="releaseYear"
            value={editedMovieData.releaseYear}
            onChange={handleInputChange}
          />
        ) : (
          releaseYear
        )}
      </p>
      <p className="single-details">
        <strong>Genre:</strong>{' '}
        {isEditMode ? (
          <input
            type="text"
            name="genre"
            value={editedMovieData.genre}
            onChange={handleInputChange}
          />
        ) : (
          genre
        )}
      </p>
      <p className="single-details">
        <strong>Ratings:</strong>
        {isEditMode ? (
          <input
            type="text"
            name="rating"
            value={editedMovieData.rating}
            onChange={handleInputChange}
          />
        ) : (
          rating
        )}
      </p>
      <img id="single-image" src={imageUrl + poster} alt={title} />
      <p className="single-comment">
        <strong>Comments:</strong>
        {comments.map((comment, index) => (
          <p style={{ textAlign: 'center' }} key={index}>
            {comment}
          </p>
        ))}
      </p>
      {isEditMode ? (
        <div>
          <button className="save-movie-button" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-movie-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button className="delete-movie-button" onClick={() => onDelete(selectedMovie.id)}>
            Delete Movie
          </button>
          <button className="edit-movie-button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
      <Link to="/" className="Link">
        Back to Homepage
      </Link>
    </div>
  );
}

export default SingleMoviePage;
