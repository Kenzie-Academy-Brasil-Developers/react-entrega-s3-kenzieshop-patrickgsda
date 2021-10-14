import { Button } from "@material-ui/core";
import { Container } from "./styles";
import { addCartThunk, removeCartThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";

function Product({ product, isSale = false }) {
  const dispatch = useDispatch();
  return (
    <Container key={product.id}>
      <img src={product.img} alt={product.name} />
      <p>{product.name}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      {!isSale && (
        <Button
          onClick={() => dispatch(addCartThunk(product))}
          color="secondary"
          variant="contained"
        >
          Adicionar ao carrinho
        </Button>
      )}
      {isSale && (
        <Button
          onClick={() => dispatch(removeCartThunk(product.id))}
          color="secondary"
          variant="contained"
        >
          Remover do carrinho
        </Button>
      )}
    </Container>
  );
}

export default Product;
