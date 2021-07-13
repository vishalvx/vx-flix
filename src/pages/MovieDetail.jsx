import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BASE_KEY = 'https://api.themoviedb.org/3/movie/';

const API_KEY = '?api_key=90719954e0f97ee3aaee36dd91cdf164&language=en-US ';

function MovieDetail() {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState({});

  const getMoviesDetail = async () => {
    try {
      const response = await fetch(BASE_KEY + id + API_KEY);
      const results = await response.json();
      setMovieDetail(results);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMoviesDetail();
  }, [id]);

  if(!movieDetail.original_title) return null; 

  return (
    <div>
      <h2>{movieDetail.original_title}</h2>
      <h2>{movieDetail.overview}</h2>
    </div>
  );
};

export default MovieDetail;
