import React,{useContext} from 'react';

import SeriesItem from './SeriesItem/SeriesItem';
import './SeriesPage.css';
import {SeriesContext} from '../context/series-context'

const SeriesPage = props => {
  const seriesList=useContext(SeriesContext).series
 
  return (
    <ul className="products-list">
      {seriesList.map(prod => (
        <SeriesItem
          key={prod.id}
          id={prod.id}
          image={prod.image}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
   );
};

export default SeriesPage;
