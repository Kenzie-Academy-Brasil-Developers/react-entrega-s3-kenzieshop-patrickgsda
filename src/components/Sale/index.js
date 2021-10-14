import { useSelector } from "react-redux";
import Product from "../Product";
import { Container, ContainerCenter } from "./styles";

function Sales() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <ContainerCenter>
      <Container>
        {JSON.parse(cart).map((product, index) => (
          <Product isSale="true" key={index} product={product} />
        ))}
      </Container>
    </ContainerCenter>
  );
}

export default Sales;
