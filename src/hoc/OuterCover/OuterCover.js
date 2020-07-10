import React, { useState } from 'react'

import styles from './OuterCover.module.css'
import Toolbar from '../../UI/Toolbar/Toolbar'
import SideDrawer from '../../UI/SideDrawer/SideDrawer'


const OuterCover = props=>{
    const [sideDrawerIsVisible,setSideDrawerIsVisible]=useState(false)

    const sideDrawerClosedHandler=()=>{
        setSideDrawerIsVisible(false)
    }

    const sideDrawerTogglehandler=()=>{
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }
    
        return(
            <div>
                <Toolbar 
                    drawerToggleClicked={sideDrawerTogglehandler}/>
                <SideDrawer 
                    open={sideDrawerIsVisible} 
                    closed={sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {props.children}
                </main>
            </div>
        )
}
    
export default OuterCover