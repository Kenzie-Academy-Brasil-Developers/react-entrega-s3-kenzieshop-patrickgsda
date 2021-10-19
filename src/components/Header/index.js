import iconSale from "../../images/sale.svg";
import iconLogin from "../../images/login.svg";
import { H1, Container, Box } from "./styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OutubroRosa from "../../images/outubrorosa.png";

function Header() {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  function handleClick(local) {
    history.push(`/${local}`);
  }

  return (
    <Box>
      <Container onClick={() => handleClick("")}>
        <H1>Patrick's Store</H1>
        <img src={OutubroRosa} alt="Outubro Rosa" />
      </Container>
      <Container>
        <Container onClick={() => handleClick("cart")}>
          {cart.length > 0 && <span>{cart.length}</span>}
          <img src={iconSale} alt="Sacola" />
          Carrinho
        </Container>
        <Container onClick={() => handleClick("login")}>
          <img src={iconLogin} alt="Login" />
          Entrar
        </Container>
      </Container>
    </Box>
  );
}

export default Header;
