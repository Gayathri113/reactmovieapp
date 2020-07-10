import React from 'react'

import styles from './Modal.module.css'

const Modal = props =>{
    
        return(
                <div 
                    className={styles.Modal}
                    style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show?'1':'0'
                     }}
                     onClick={props.modalClosed}
                >
                {props.children}
                </div>
        )
}

export default React.memo(
    Modal,
    (prevProps,nextProps)=>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
    );