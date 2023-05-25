import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import firebase from "../Config/firebase";

function NavBarMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
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
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <b>Trabajo Final</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
   
          {user ? (
             // Si el usuario está autenticado, mostrar "Salir"
               
             <>
                <Nav.Link as={Link} to="/myuser">
                Mi usuario
              </Nav.Link>
            <Nav.Link onClick={handleSignOut}>
              Salir
            </Nav.Link>
             </>
          ) : (
            // Si el usuario no está autenticado, mostrar "Registro" e "Ingresar"
            <>
              <Nav.Link as={Link} to="/signup">
                Registro
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Ingresar
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarMenu;
