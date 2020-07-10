import React from 'react'

import styles from './Logo.module.css'

const logo=(props) =>(
    <div className={styles.Logo} style={{height:props.height}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHsV7eC7hWogTHTgEGCiHod_ix6htJi8KEig&usqp=CAU" alt="MovieLovers"/>
    </div>
)

export default logo;