import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function Producto({ id, price, title, thumbnail, login }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>${price}</Card.Subtitle>
          <hr />
          <Button variant="primary" as={Link} to={`/producto/${id}`}>
            Ver detalle
          </Button>
          {login && (
            <>
              <Button
                variant="primary"
                as={Link}
                to={`/producto/modificar/${id}`}
              >
                Modificar
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Producto;
