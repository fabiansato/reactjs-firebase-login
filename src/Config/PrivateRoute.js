import React, { useContext } from "react";
import {Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth";

// dentro de privateRoute tendremos que saber que tipo de componente se debe usar si el usuario es logeado

const PrivateRoute = ({ component: RouteComponent, ...rest}) =>{
    const{currentUser} = useContext(AuthContext);
    return(
        <Route
        {...rest}
        render={routeProps =>
         !!currentUser ? ( // dependiendo si tenemos el usuario entonces renderizará esto
           <RouteComponent {...routeProps}/>
               ) : ( // si no tenemos el usuario entonces nos mandará a al path de login
                <Redirect to={"/login"}/>
             
               )
          }
    /> 
  );
};

export default PrivateRoute