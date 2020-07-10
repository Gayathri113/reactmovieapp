import React from 'react';

import Card from '../../UI/Card/Card';
import './FavSeriesItem.css';

const FavoriteItem = React.memo(props => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.image} width="100%" height="10%" alt="Not found"/>
      </div>
    </Card>
  );
});

export default FavoriteItem;
