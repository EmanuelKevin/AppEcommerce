import { useForm } from "react-hook-form";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { create } from "../Services/productos";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertNavigation from "../Components/AlertNavigation";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [alert, setAlert] = useState({
    variant: "",
    text: "",
    duration: "0",
    link: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const document = await create(data);
      console.log(
        "🚀 ~ file: ProductosAlta.jsx:16 ~ onSubmit ~ document:",
        document
      );
      setAlert({
        variant: "success",
        text: "Su producto se ha registrado con éxito",
        duration: 1000,
        link: "/",
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FloatingLabel
          label="Ingrese el nombre de su producto"
          className="mb-3"
        >
          <Form.Control
            type="text"
            {...register("title", { required: true })}
          />
          {errors?.nombre && <div>El campo es obligatorio</div>}
        </FloatingLabel>
        <FloatingLabel label="Precio" className="mb-3">
          <Form.Control
            type="number"
            {...register("price", { required: true })}
          />
          {errors?.apellido && <div>El campo es obligatorio</div>}
        </FloatingLabel>
        <FloatingLabel label="Descripción" className="mb-3">
          <Form.Control
            type="text"
            {...register("description", { required: true })}
          />
          {errors?.description && <div>El campo es obligatorio</div>}
        </FloatingLabel>
        <FloatingLabel label="Ingrese una imagen" className="mb-3">
          <Form.Control
            type="text"
            {...register("thumbnail", { required: true })}
          />
          {errors?.email && <div>El campo es obligatorio</div>}
        </FloatingLabel>
        <ButtonWithLoading type="submit" variant="primary" loading={loading}>
          Cargar producto
        </ButtonWithLoading>
        <Link to="/">
          <Button>Volver</Button>
        </Link>
      </form>
      <AlertNavigation {...alert} />
    </>
  );
}

export default ProductosAlta;
