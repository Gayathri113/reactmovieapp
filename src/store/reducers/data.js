import * as actionTypes from '../actions/actionTypes'

const initialState={
    movieData:[],
    loading:false,
    error:null,
    series:[
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
      ]    
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_MOVIE_START:
            return{
                ...state,
                loading:true,
                error:null
            }
        case actionTypes.FETCH_MOVIE_SUCCESS:
            return{
                ...state,
                movieData:action.movieData,
                loading:false
            }
        case actionTypes.FETCH_MOVIE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.errorMessage
            }
        case actionTypes.CLEAR_ERROR:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}

export default reducer