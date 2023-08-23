import { FloatingLabel, Form } from "react-bootstrap";

function Input({
  label,
  type = "text",
  name,
  register,
  placeholder,
  errors,
  children,
}) {
  return (
    <FloatingLabel controlId={name} label={label} className="mb-3">
      <Form.Control type={type} placeholder={placeholder} {...register} />
      {errors && errors[name]?.type === "required" && (
        <Form.Text className="text-muted">El campo es obligatorio</Form.Text>
      )}
      {children && children}
    </FloatingLabel>
  );
}

export default Input;
