import React,{useContext} from 'react';


import Card from '../../UI/Card/Card';
import './SeriesItem.css';
import {SeriesContext} from '../../context/series-context'

const SeriesItem = props => {
  const {toggleFav}=useContext(SeriesContext)

  const toggleFavHandler=()=>{
    toggleFav(props.id)
  }

  return (
    <React.Fragment>
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.image} width='100%' height="10%" alt="Not FOund"/>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
    <br/>
    </React.Fragment>
  );
};

export default SeriesItem;
