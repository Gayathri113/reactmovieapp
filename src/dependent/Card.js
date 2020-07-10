import React,{Component} from 'react';
import {connect} from 'react-redux'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import * as actions from '../store/actions/index'
import withErrorHandler from '../hoc/withErrorHandler'
import axios from '../axios-movie'
import FavButton from '../containers/FavButton/FavButton'

class Card extends Component  {

componentDidMount(){
  this.props.onFetchData()
}

render(){

  const originalrelease=this.props.mdata
    .filter(ig => ig.name === 'releasedate')
    .map(ig=>ig.value)

    const Title=this.props.mdata
    .filter(ig => ig.name === 'movieTitle')
    .map(ig=>ig.value)

    const Description=this.props.mdata
    .filter(ig => ig.name === 'description')
    .map(ig=>ig.value)

    const Time=this.props.mdata
    .filter(ig => ig.name === 'time')
    .map(ig=>ig.value)

    const AverageVote=this.props.mdata
    .filter(ig => ig.name === 'avgVote')
    .map(ig=>ig.value)

    const BoxOffice=this.props.mdata
    .filter(ig => ig.name === 'boxOffice')
    .map(ig=>ig.value)

    const ContentImage=this.props.mdata
    .filter(ig => ig.name === 'contentImage')
    .map(ig=>ig.value)

        
    return (
    <div style={{
      backgroundColor:'rgba(0,0,0,0.5)',
      width:'450px',
      height:'700px',
      marginTop:'0px'
    }}>
      <CardActionArea style={{
        width:'450px',
        backgroundColor:'rgba(0,0,0,0.5)',
        color:'white',
        margin:'1px 0px 0px 0px'
      }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:'lightgreen',fontWeight:'bold',fontVariant:'small-caps',fontSize:'30px'}}>
            {Title}
          </Typography>
          <Typography variant="body2" component="p" style={{fontStyle:'italic',fontSize:'16px',fontVariant:'normal'}}>
          {Description}
          </Typography>
          <div>
              <h2 style={{color:'lightgreen',fontSize:'20px'}}>
              Original Release: <div style={{color:'white',fontSize:'15px'}}>{originalrelease}</div>
              </h2>
              <h2 style={{color:'lightgreen',fontSize:'20px'}}>
              Running Time:  <div style={{color:'white',fontSize:'15px'}}>{Time}</div>
              </h2>
              <h2 style={{color:'lightgreen',fontSize:'20px'}}>
              Vote Average:  <div style={{color:'white',fontSize:'15px'}}>{AverageVote}</div>
              </h2>
              <h2 style={{color:'lightgreen',fontSize:'20px'}}>
              Box Office:   <div style={{color:'white',fontSize:'15px'}}>{BoxOffice}</div>
              </h2>
          </div>
        </CardContent>
        </CardActionArea>
        <FavButton/>
      
      <img
         height= '400px'
         width='450px'
         src={ContentImage}
         alt="Not found!!!!!!!!!!!!!!!!!"
        /> 
    </div>
  )}
}

const mapStateToProps=state=>{
  return{
      mdata:state.movieData
  }
}

const mapDispatchToProps=dispatch=>{
  return{
      onFetchData:()=>dispatch(actions.fetchMovieData())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Card,axios))
