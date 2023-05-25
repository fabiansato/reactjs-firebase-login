import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Buscador from "./Buscador";
import Row from "react-bootstrap/Row";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [titulo ] = useState("Listado de productos");
  const [buscar, setBuscar] = useState("Automoviles");

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAllProductos(buscar);
        // const response = await res.json()
        console.log(
          "🚀 ~ file: Productos.jsx:25 ~ request ~ response:",
          response
        );
        setProductos(response.data.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [buscar]);

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("🚀 ~ file: Productos.jsx:32 ~ handleChange ~ value:", value);
    setBuscar(value);
  };

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h1>{titulo}</h1>
        <Buscador buscar={buscar} handleChange={handleChange} />
        <Row>
          {productos.map((producto) => (
            <Producto
              id={producto.id}
              nombre={producto.title}
              precio={producto.price}
              thumbnail={producto.thumbnail}
              categoria=""
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Productos;
