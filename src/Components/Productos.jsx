import { useState, useEffect } from "react";
import { getAll } from "../Services/productos";
import Producto from "./Producto";
import Row from "react-bootstrap/Row";

function Productos({ login }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    const request = async () => {
      try {
        const data = await getAll(buscar);
        console.log("🚀 ~ file: Productos.jsx:26 ~ request ~ res:", data);
        setProductos(data.docs);
        setLoading(false);
      } catch (error) {
        console.log("Error al obtener los productos", error);
      }
    };
    request();
  }, [buscar]);

  const titulo = "Lista de productos";

  if (loading) {
    return <div>Cargando productos...</div>;
  } else {
    return (
      <div>
        <h3>{titulo}</h3>
        <Row>
          {productos.map((producto) => (
            <Producto
              key={producto.id}
              {...producto.data()}
              id={producto.id}
              login={login}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Productos;
