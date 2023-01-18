import { Link } from "react-router-dom";
function Button({ src, text }) {
  return (
    <Link style={buttonStyle} to={src}>
      {text}
    </Link>
  );
}

const buttonStyle = {
  padding: ".5em 1em",
  border: "1px solid #29324a",
  borderRadius: "3px",
};

export default Button;
