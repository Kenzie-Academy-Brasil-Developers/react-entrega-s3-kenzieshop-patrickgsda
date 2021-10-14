import iconSale from "../../images/sale.svg";
import iconLogin from "../../images/login.svg";
import { H1, Container } from "./styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OutubroRosa from "../../images/outubrorosa.png";

function Header() {
  const { products } = useSelector((state) => state);
  const history = useHistory();
  function handleClick() {
    history.push("/cart");
  }

  return (
    <Container>
      <Container>
        <H1>Patrick's Store</H1>
        <img src={OutubroRosa} alt="Outubro Rosa" />
      </Container>
      <Container>
        <Container onClick={() => handleClick()}>
          <img src={iconSale} alt="Sacola" />
          Carrinho
        </Container>
        <Container>
          <img src={iconLogin} alt="Login" />
          Entrar
        </Container>
      </Container>
    </Container>
  );
}

export default Header;
