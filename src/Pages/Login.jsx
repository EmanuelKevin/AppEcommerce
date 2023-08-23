import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { login } from "../Services/authService";
import { useState } from "react";
import { loginMessage } from "../Utils/errorMessage";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertNavigation from "../Components/AlertNavigation";
import Input from "../Components/Input";

function Login({ setLogin }) {
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
      const response = await login(data);
      console.log("🚀 ~ file: Login.jsx:31 ~ onSubmit ~ response:", response);
      setAlert({
        variant: "success",
        text: `Bienvenido/a ${response?.name}`,
        duration: 1000,
        link: "/",
      });
      setTimeout(() => {
        setLogin(true);
      }, 4000);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setAlert({
        variant: "danger",
        text: loginMessage[e.code] || "Ha ocurrido un error",
        duration: 0,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            ...register("password", { required: true }),
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
          Ingresar
        </ButtonWithLoading>
      </form>
      <AlertNavigation {...alert} />
    </>
  );
}

export default Login;
