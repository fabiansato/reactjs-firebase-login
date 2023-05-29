import React, { useState, useEffect } from "react";
import firebase, { storage, firestore } from "../Config/firebase";

const MyUserChanges = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);


  
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const docRef = firestore.collection("usuarios").doc(user.uid);
        docRef.get().then((doc) => {
          if (doc.exists) {
            setUserData(doc.data());
          } else {
            console.log(`No document exists for user with id: ${user.uid}`);
          }
        }).catch((error) => {
          console.log(`Error getting document for user with id: ${user.uid}`, error);
        });
        
      } else {
        setUser(null);
        setUserData(null);
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

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`avatars/${user.uid}`);
    fileRef.put(file).then(() => {
      console.log('Uploaded a file');
      fileRef.getDownloadURL().then((url) => {
        firebase.auth().currentUser.updateProfile({ photoURL: url })
          .then(() => {
            // Use firebase.auth().currentUser to get the updated user
            setUser(firebase.auth().currentUser)
          })
          .catch((error) => console.error("Error updating profile: ", error));
      });
    });
  }

  return (
    <>
    
      <h1>Mi Usuario</h1>
      {user ? (
        <div>
          <h2>Bienvenido {user.displayName} a nuestra página</h2>
          <p>Email:</p>
            <p>{user.email}</p>
  
            {userData && (
              <>
                <p>Country: {userData.country}</p>
                <p>Name: {userData.name}</p>
                <p>Last Name: {userData.lastname}</p>
              </>
            )}
          {user.photoURL ? (
            <>
            <img src={user.photoURL} alt="avatar" width="100" height="100" />
     

            <p>Cambia tu Avatar:</p>
            <input type="file" onChange={handleUpload} />
            </>
          ) : (
            <>
             <p>Sube tu avatar:</p>
            <input type="file" onChange={handleUpload} />
            </>
          )}
  
          <button onClick={handleSignOut}>Salir</button>
        </div>
      ) : (
        <h2>Por favor registrate o loguéate</h2>
      )}
    </>
  );
}

export default MyUserChanges;