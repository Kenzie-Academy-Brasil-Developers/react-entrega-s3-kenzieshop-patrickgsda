import { useSelector } from "react-redux";
import Product from "../Product";
import { Container, ContainerCenter } from "./styles";

function Products() {
  const { products } = useSelector((state) => state);
  return (
    <ContainerCenter>
      <Container>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    </ContainerCenter>
  );
}

export default Products;
