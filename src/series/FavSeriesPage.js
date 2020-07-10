import React,{useContext} from 'react';

import FavSeriesItem from '../series/FavSeries/FavSeriesItem';
import './SeriesPage.css';
import {SeriesContext} from '../context/series-context'

const Favorites = React.memo(props => {
  const favoriteSeries = useContext(SeriesContext).series.filter(p => p.isFavorite)
  
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteSeries.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteSeries.map(prod => (
          <FavSeriesItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            image={prod.image}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
});



export default Favorites;
