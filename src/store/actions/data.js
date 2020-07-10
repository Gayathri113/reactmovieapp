import * as actionTypes from './actionTypes'
import axios from '../../axios-movie'

export const fetchMovieSuccess=(movieData)=>{
    return{
        type:actionTypes.FETCH_MOVIE_SUCCESS,
        movieData:movieData
    }
}

export const fetchMovieFail=(error)=>{
    return{
        type:actionTypes.FETCH_MOVIE_FAIL,
        errorMessage:error.message
    }
}

export const fetchMovieStart=()=>{
    return{
        type:actionTypes.FETCH_MOVIE_START
    }
}

export const fetchMovieData=()=>{
    return dispatch=>{
        dispatch(fetchMovieStart())
        axios.get('movieData/Howtotrainyourdragon.json')
            .then(res=>{
                const fetchedMovieData = []
                for(let key in res.data){
                    fetchedMovieData.push({
                        name:key,
                        value:res.data[key]
                    })
                }
                dispatch(fetchMovieSuccess(fetchedMovieData))
            })
            .catch(err=>{
               dispatch(fetchMovieFail(err))
            })
    }
}

export const searchMovieData=(data)=>{
    return dispatch=>{
        dispatch(fetchMovieStart())
        if(data){
            axios.get('movieData/'+data+'.json')
            .then(res=>{
                const fetchedMovieData = []
                for(let key in res.data){
                    fetchedMovieData.push({
                        name:key,
                        value:res.data[key]
                    })
                }
                dispatch(fetchMovieSuccess(fetchedMovieData))
            })
            .catch(err=>{
               dispatch(fetchMovieFail(err))
            })
        }else{
            dispatch(fetchMovieData())
        }
    }
}


