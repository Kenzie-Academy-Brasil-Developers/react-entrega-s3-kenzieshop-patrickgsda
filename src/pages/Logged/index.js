import { Box } from "@material-ui/system";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Logged() {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <div>
      <Header />
      {cart.length > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Pedido efetuado com sucesso!</h1>
          <h1>Agradecemos a sua preferencia!!!</h1>
        </Box>
      )}
      {cart.length === 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>
            Seu carrinho está vazio... <Link to="/">Voltar ao inicio!</Link>
          </h1>
        </Box>
      )}
    </div>
  );
}

export default Logged;
