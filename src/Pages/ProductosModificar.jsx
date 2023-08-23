import { useForm } from "react-hook-form";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { update, getById, deleteProducto } from "../Services/productos";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertNavigation from "../Components/AlertNavigation";

function ProductosModificar() {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });

  const [alert, setAlert] = useState({
    variant: "",
    text: "",
    duration: "0",
    link: "",
  });

  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const request = async () => {
      try {
        const producto = await getById(id);
        setValue("title", producto.data().title);
        setValue("price", producto.data().price);
        setValue("description", producto.data().description);
        setValue("thumbnail", producto.data().thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id]);

  const onSubmit = async (data) => {
    setLoadingSave(true);
    try {
      console.log(data);
      const document = await update(id, data);
      console.log(
        "🚀 ~ file: ProductosAlta.jsx:16 ~ onSubmit ~ document:",
        document
      );
      setAlert({
        variant: "success",
        text: "Su producto se ha modificado correctamente",
        duration: 1000,
        link: "/",
      });
      setLoadingSave(false);
    } catch (e) {
      console.log(e);
    }
    setLoadingSave(false);
  };
  const handleDelete = async () => {
    setLoadingDelete(true);
    try {
      const document = await deleteProducto(id);
      console.log(
        "🚀 ~ file: ProductosModificar.jsx:41 ~ handleDelete ~ document:",
        document
      );
      setAlert({
        variant: "success",
        text: "Su producto se ha eliminado correctamente",
        duration: 1000,
        link: "/",
      });
      setLoadingDelete(false);
    } catch (e) {
      console.log(e);
    }
    setLoadingDelete(false);
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
        </FloatingLabel>
        <FloatingLabel label="Precio" className="mb-3">
          <Form.Control
            type="number"
            {...register("price", { required: true })}
          />
        </FloatingLabel>
        <FloatingLabel label="Descripción" className="mb-3">
          <Form.Control
            type="text"
            {...register("description", { required: true })}
          />
        </FloatingLabel>
        <FloatingLabel label="Ingrese una imagen" className="mb-3">
          <Form.Control
            type="text"
            {...register("thumbnail", { required: true })}
          />
        </FloatingLabel>
        <ButtonWithLoading
          type="submit"
          variant="primary"
          loading={loadingSave}
        >
          Guardar
        </ButtonWithLoading>
        <ButtonWithLoading
          type="button"
          variant="danger"
          onClick={handleDelete}
          loading={loadingDelete}
        >
          Eliminar
        </ButtonWithLoading>
        <Link to="/">
          <Button>Volver</Button>
        </Link>
      </form>
      <AlertNavigation {...alert} />
    </>
  );
}

export default ProductosModificar;
