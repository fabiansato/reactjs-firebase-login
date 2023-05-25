//Componente tipo funcion
import Productos from "../Components/Productos";

import React from "react";
import firebase from "../Config/firebase";




const Home = () => {
  console.log(firebase);
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
     {/*  <Productos /> */}
    </>
  );
}

export default Home;
