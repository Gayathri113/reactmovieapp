import React,{useContext} from 'react'


import Background from '../../containers/Background/background'
import Auth from '../../Auth'
import {AuthContext} from '../../context/auth-context'

const Layout=(props)=>{
    const authContext=useContext(AuthContext)
    let content=<Auth/>
    if(authContext.isAuth){
        content=<Background/>
    }
    return(
        <div>
            {content}
        </div>
        
    )
}

export default Layout