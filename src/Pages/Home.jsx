import React, { useState, useEffect } from "react";
import firebase from "../Config/firebase";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Limpiar la suscripción cuando se desmonta el componente
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }
console.log(user);
  return (
    <>
 
      {user ? (
        <div>
          <h2>Bienvenido {user.displayName} a nuestra página</h2>
          <button onClick={handleSignOut}>Salir</button>
        </div>
      ) : (
        <h2>Por favor registrate o loguéate</h2>
      )}
    </>
  );
}

export default Home;
