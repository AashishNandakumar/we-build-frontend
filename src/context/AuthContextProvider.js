import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'

const AuthContextProvider = ({ children }) => {

    const [authToken, setAuthToken] = useState(sessionStorage.getItem('AuthToken'))

    useEffect(() => {
        sessionStorage.setItem('AuthToken', authToken)
    }, [authToken])

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider