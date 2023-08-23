import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../Services/productos";
import { Button } from "react-bootstrap";

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  console.log("🚀 ~ file: Detalle.jsx:5 ~ Detalle ~ params:", id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);

        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log("🚀 ~ file: Detalle.jsx:21 ~ request ~ e:", e);
      }
    };
    request();
  }, [id]);

  if (loading) {
    return <div className="">Cargando producto...</div>;
  } else {
    return (
      <div className="">
        <h3>{producto.title}</h3>
        <p>{producto.price}</p>
        <p>{producto.description}</p>
        <Button>Comprar</Button>
        <Link to="/">
          <Button>Volver</Button>
        </Link>
      </div>
    );
  }
}

export default Detalle;
