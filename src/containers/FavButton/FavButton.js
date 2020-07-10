import React,{useState} from 'react'

const FavButton=(props)=>{
    const [click,setClick]=useState(true)
    const clickHandler=()=>{
        setClick(false)
    }

    return(
        <div>
            {click 
                ? <button onClick={clickHandler}>Like</button>
                : <h3 style={{color:'lightgreen'}}>You liked this movie</h3>
            }
        </div>
    )
}

export default FavButton