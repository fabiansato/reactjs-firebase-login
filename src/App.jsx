
//Alias en el import. Ej BrowserRouter
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

import {AuthProvider} from "./Config/auth";

import Footer from "./Components/Footer";

import Registro from "./Pages/Signup";
import MyUser from "./Pages/MyUser";
import Detalle from "./Pages/Detalle";
import Login from "./Pages/Login";
import NavBarMenu from "./Components/NavBarMenu";
import NotFound from "./Pages/NotFound";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <NavBarMenu />
      <Container>
        <AuthProvider> {/* Todo lo que este debajo tendra el Authprovider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myuser" element={<MyUser />} />
          <Route path="/producto/:id" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>  
      </Container>
      
<Footer />
    </Router>
  );
}

export default App;
