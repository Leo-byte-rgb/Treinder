import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import weightLift from "../../assets/men.png";
import styles from "./styles.module.scss";

export const UserSignUp = () => {
  const [form, setForm] = useState();

  const handleValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <main className={styles.container}>
      <h2>Registre-se no Trainder</h2>
      <FormControl>
        <FormLabel htmlFor="email">Nome Completo</FormLabel>
        <Input id="email" type="email" name="name" onChange={handleValue} />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" name="email" onChange={handleValue} />
        <FormLabel htmlFor="email">Telefone</FormLabel>
        <Input id="email" type="email" name="name" onChange={handleValue} />
        <FormLabel htmlFor="email">Senha</FormLabel>
        <Input
          id="email"
          type="password"
          name="password"
          onChange={handleValue}
        />
        <FormLabel htmlFor="email">Repita sua senha</FormLabel>
        <Input
          id="email"
          name="repeatPassword"
          type="password"
          onChange={handleValue}
        />
        <Button>Enviar</Button>
      </FormControl>
      <img src={weightLift} />
    </main>
  );
};
