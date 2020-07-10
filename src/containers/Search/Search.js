import React,{useState,useEffect,useRef} from 'react'
import {connect} from 'react-redux'


import './Search.css'
import * as actions from '../../store/actions/index'

const Search=React.memo(props=>{
    const {onSearchData}=props

    const [enteredFilter,setEnteredFilter]=useState('')
    const inputRef=useRef()
  
    useEffect(()=>{
        setTimeout(()=>{
            onSearchData(enteredFilter,inputRef)
        },1000)
          
    },[enteredFilter,inputRef,onSearchData])

    return(
        <section className="search">
                <div className="search-input">
                    <input 
                        ref={inputRef}
                        type="text" 
                        value={enteredFilter}
                        onChange={event=>setEnteredFilter(event.target.value)}
                        placeholder="SearchMovieTitle"/>
                </div>
        </section>
    )
})

const mapDispatchToProps=dispatch=>{
    return{
        onSearchData:(data)=>dispatch(actions.searchMovieData(data))
    }
}

export default connect(null,mapDispatchToProps)(Search)
