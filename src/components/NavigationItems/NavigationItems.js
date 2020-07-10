import React,{useContext} from 'react'

import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import {AuthContext} from '../../context/auth-context'

const NavigationItems=(props)=>{
    const authcontext=useContext(AuthContext)
   
    return(
    <ul className={styles.NavigationItems}>
        {authcontext.isAuth
            ?<NavigationItem link="/serieslovers">Series Lovers</NavigationItem>
            : null }
        {authcontext.isAuth
            ?<NavigationItem link="/favseries">Favorite Series</NavigationItem> 
            : null
        }
        <NavigationItem  link="/" exact>Movie Lovers</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
    </ul>
    )
}

export default NavigationItems