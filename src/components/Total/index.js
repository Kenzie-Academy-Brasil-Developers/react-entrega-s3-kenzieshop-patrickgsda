import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";
import { Container, Box } from "./styles";
import { Button } from "@material-ui/core";

function Total() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  function handleClick(local) {
    history.push(`/${local}`);
  }
  return (
    <Box>
      {cart.length > 0 && (
        <Container>
          <Card
            sx={{
              padding: "25px",
              backgroundColor: "#e4ddff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {" "}
            <h1>Resumo do Pedido</h1>
            {cart.length > 1 ? (
              <p> {cart.length} produtos adicionados</p>
            ) : (
              <p> {cart.length} produto adicionado</p>
            )}{" "}
            O total do carrinho ficou R${" "}
            {cart
              .map((cartItem) => cartItem.price)
              .reduce(reducer, 0)
              .toFixed(2)}
            <Button
              sx={{ marginTop: "25px" }}
              onClick={() => handleClick("login")}
              color="success"
              variant="contained"
            >
              Finalizar pedido
            </Button>
          </Card>
        </Container>
      )}
      {cart.length === 0 && (
        <h1>
          Seu carrinho está vazio... <Link to="/">Voltar ao inicio!</Link>
        </h1>
      )}
    </Box>
  );
}

export default Total;
