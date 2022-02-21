import { useCallback, useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import weightLift from "../../assets/men.png";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";

export const UserSignIn = () => {
  const [form, setForm] = useState();
  const { signIn } = useAuth();

  const handleValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = useCallback(async () => {
    await signIn(form);

    toast.success("Loguin realizado com sucesso!");
  }, [form, signIn]);

  return (
    <main className={styles.container}>
      <h2>Logue no Trainder</h2>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" name="email" onChange={handleValue} />
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleValue}
        />
        <Button onClick={handleSubmit}>Enviar</Button>
      </FormControl>
      <img src={weightLift} />
    </main>
  );
};
