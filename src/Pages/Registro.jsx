import { useForm } from "react-hook-form";
import { create } from "../Services/authService";
import { useState } from "react";
import { registroMessage } from "../Utils/errorMessage";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertNavigation from "../Components/AlertNavigation";
import Input from "../Components/Input";
import { Form } from "react-bootstrap";

function Registro() {
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
      await create(data);
      setAlert({
        variant: "success",
        text: "Su cuenta se ha registrado con éxito",
        duration: 1000,
        link: "/login",
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      setAlert({
        variant: "danger",
        text: registroMessage[e.code] || "Ha ocurrido un error",
        duration: 0,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Ingrese su nombre"
          placeholder="Ingrese su nombre"
          register={{ ...register("nombre", { required: true }) }}
          errors={errors}
          name="nombre"
        />
        <Input
          type="apellido"
          label="Ingrese su apelido"
          placeholder="Ingrese su apellido"
          register={{ ...register("apellido", { required: true }) }}
          errors={errors}
          name="apellido"
        />
        <Input
          type="email"
          label="Ingrese su email"
          placeholder="Ingrese su correo electrónico"
          register={{ ...register("email", { required: true }) }}
          errors={errors}
          name="email"
        />
        <Input
          type="password"
          label="Ingrese su contraseña"
          placeholder="Ingrese su contraseña"
          register={{
            ...register("password", { required: true, minLength: 8 }),
          }}
          errors={errors}
          name="contraseña"
        >
          <Form.Text className="text-muted">
            {errors?.password?.type === "minLength" && (
              <div>Debe introducir al menos 8 caracteres</div>
            )}
          </Form.Text>
        </Input>
        <ButtonWithLoading type="submit" variant="primary" loading={loading}>
          Crear cuenta
        </ButtonWithLoading>
      </form>
      <AlertNavigation {...alert} />
    </>
  );
}

export default Registro;
