import React, {useEffect, useState} from "react";
import firebase from "./firebase";

// Lo que hace este componente "createcontext" de React es usar alguna funcion dentro de todo el componente de react
// En este caso usaremos para nuestro usuario dentro de todo el componente de react
export const AuthContext = React.createContext(); 

// Creamos una coleccion Authprovider y se cambiaria cada vez que uno quiera cambiar los datos en el status de firebase
export const AuthProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    // podemos usar un hook use efect
    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    },[]); // pasamos un array vacio a nuestra auth change dentro de nuestro cambio

    return (
        <AuthContext.Provider
        value={{
            currentUser
        }}
  
        >
        {children}
        </AuthContext.Provider>

    );
};