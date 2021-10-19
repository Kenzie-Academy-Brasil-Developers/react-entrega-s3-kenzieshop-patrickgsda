import { useSelector } from "react-redux";
import Product from "../Product";
import { Container, ContainerCenter } from "./styles";

function Sales() {
  const cart = useSelector((state) => state.cart);
  return (
    <ContainerCenter>
      <Container>
        {cart.map((product, index) => (
          <Product isSale="true" key={index} product={product} />
        ))}
      </Container>
    </ContainerCenter>
  );
}

export default Sales;
