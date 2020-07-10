import React,{useState} from 'react'

export const AuthContext=React.createContext({
    isAuth:false,
    login:()=>{},
    cancelLogin:()=>{}
})

const AuthContextProvider=(props)=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const loginHandler=()=>{
        setIsAuthenticated(true)
    }
    const cancelLoginHandler=()=>{
        setIsAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={{
            isAuth:isAuthenticated,
            login:loginHandler,
            cancelLogin:cancelLoginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider