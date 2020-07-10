import React,{useContext,useEffect} from 'react'

import Card from '../../UI/Card/Card'
import {AuthContext} from '../../context/auth-context'

const Logout=(props)=>{
    const cancelLogin=useContext(AuthContext).cancelLogin
    

    useEffect(()=>{
        cancelLogin()
    },[cancelLogin])

    return (
        <Card>
            <h1>You are logged out!!!!!!!!!!!</h1>
        </Card>
    )
}

export default Logout