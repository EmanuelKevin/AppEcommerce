import { Button, Spinner } from "react-bootstrap";

function ButtonWithLoading({
  variant = "primary",
  type = "submit",
  loading,
  children,
  ...props
}) {
  return (
    <Button type={type} variant={variant} disabled={loading} {...props}>
      {loading && <Spinner animation="border" size="sm" />}
      {children}
    </Button>
  );
}

export default ButtonWithLoading;
