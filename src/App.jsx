import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registro from "./Pages/Registro";
import Detalle from "./Pages/Detalle";
import Container from "react-bootstrap/Container";
import ProductosAlta from "./Pages/ProductosAlta";
import ProductosModificar from "./Pages/ProductosModificar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <Router>
      <Menu login={login} setLogin={setLogin} />
      <Container>
        <Routes>
          <Route path="/" element={<Home login={login} />} />

          {!login && (
            <>
              <Route path="/login" element={<Login setLogin={setLogin} />} />
              <Route path="/register" element={<Registro />} />
            </>
          )}
          {login && (
            <>
              <Route path="/productos/alta" element={<ProductosAlta />} />
              <Route
                path="/producto/modificar/:id"
                element={<ProductosModificar />}
              />
            </>
          )}
          <Route path="/producto/:id" element={<Detalle />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
