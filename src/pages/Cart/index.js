import Sales from "../../components/Sale";
import Header from "../../components/Header";
import Total from "../../components/Total";
import { Container } from "./styles";

function Cart() {
  return (
    <>
      <Header />
      <Container>
        <Sales />
        <Total />
      </Container>
    </>
  );
}

export default Cart;
