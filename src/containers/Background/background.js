import React,{useCallback, Suspense} from 'react'
import {connect} from 'react-redux'

import Card from '../../dependent/Card'
import './background.css'
import Search from '../Search/Search'
import * as actionTypes from '../../store/actions/actionTypes'


const ErrorModal=React.lazy(()=>import( '../../UI/ErrorModal/ErrorModal'))

const Spinner=React.lazy(()=>import('../../UI/Spinner/Spinner'))



const Background=React.memo((props)=>{
    const {onClearError}=props

    const backgroundImage=props.mdata
    .filter(ig => ig.name === 'backgroundImage')
    .map(ig=>ig.value)

    const clearError=useCallback(()=>{
        onClearError()
    },[onClearError])
    
    return(
        <div>
            
            <div className="top-right">
                    <Search />     
                </div>
            {props.loading 
            ? ( <Suspense fallback={<div>LOADING............</div>}>
                    <Spinner/>
                </Suspense>)
            : null}

            { props.error 
            ? (<Suspense fallback={<div>ERROR!!!!!!</div>}>
                    <ErrorModal onClose={clearError}>{props.error}</ErrorModal>
                </Suspense>)
            : null}

            <div className="background">
                <img src={backgroundImage} alt="Not found!!!!!!!!!" width="100%" height="1050px" />
                <div className="centered"> 
                    <Card/>
                </div>
            </div>
            <h5 style={{color:'#b2beb5',textAlign:'center'}}>Designed & Developed by GayathriRaja</h5>
        </div>
    )
})

const mapStateToProps=state=>{
    return{
        mdata:state.movieData,
        error:state.error,
        loading:state.loading
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onClearError:()=>dispatch({type:actionTypes.CLEAR_ERROR})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Background)