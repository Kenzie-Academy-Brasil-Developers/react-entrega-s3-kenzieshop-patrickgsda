import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/system";

const formSchema = yup.object().shape({
  email: yup.string().required("").email("E-mail inválido"),
  password: yup.string().required(),
});

function InputsLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  function handleClick() {
    history.push("/logged");
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "35ch",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
      onSubmit={handleSubmit(handleClick)}
    >
      <h1>Efetuar login...</h1>
      <TextField
        label="E-mail"
        nome="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Senha"
        nome="password"
        type="password"
        {...register("password")}
        error={!!errors.password}
      />
      <Button type="submit" color="secondary" variant="contained">
        Entrar
      </Button>
    </Box>
  );
}

export default InputsLogin;
