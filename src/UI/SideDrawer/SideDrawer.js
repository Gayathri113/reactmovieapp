import React from 'react'

import Logo from '../Logo/Logo'
import NavigationItems from '../../components/NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import BackDrop from '../Backdrop/Backdrop'

const sideDrawer =(props)=>{
    let attachedClasses=[styles.SideDrawer,styles.Close]
    if(props.open){
        attachedClasses=[styles.SideDrawer,styles.Open]
    }
    return(
     <div>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
     </div>
    )
}

export default sideDrawer