/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
import React from 'react';
import './FeaturedMovie.css';

export default ({ item }) => {
  const plural = item.number_of_seasons > 1 ? 'Temporadas' : 'Temporada';
  const genres = [];

  for (const i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = `${description.substring(0, 200)}...`;
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--info">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--points">
              {item.vote_average}
              {' '}
              Pontos
            </div>
            <div className="featured--year">
              {item.first_air_date.slice(0, 4)}
            </div>
            <div className="featured--seasons">{`${item.number_of_seasons} ${plural}`}</div>
            <div className="featured--description">{description}</div>
            <div className="featured--buttons">
              // eslint-disable-next-line react/prop-types
              <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
              <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
