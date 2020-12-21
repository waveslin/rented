import {useState, createContext, useContext} from 'react';

const AuthContext = createContext();

const AuthUpdateContext = createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const useAuthUpdate = () => {
    return useContext(AuthUpdateContext);
}

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({login: false, token: null, rented_account: null});

    const updateAuth = (info) =>{
        setAuth(info);
    }

    return (
        <AuthContext.Provider value={auth}>
            <AuthUpdateContext.Provider value={updateAuth}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

export {useAuth, useAuthUpdate, AuthProvider};