import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import weightLift from "../../assets/men.png";
import styles from "./styles.module.scss";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserSignUp = () => {
  const [form, setForm] = useState();
  const navigate = useNavigate();

  const handleValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () =>{
    api.post('/users', form).then(()=>{
      toast.success('Cadastro realizado com sucesso!');
      navigate("/login");
    }).catch(()=>{
      toast.error('Erro ao realizar o cadastro!');
    });

  };

  return (
    <main className={styles.container}>
      <h2>Registre-se no Trainder</h2>
      <FormControl>
      <FormLabel htmlFor="name">Nome Completo</FormLabel>
        <Input id="name" type="text" name="name" onChange={handleValue} />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" name="email" onChange={handleValue} />
        <FormLabel htmlFor="phone">Telefone</FormLabel>
        <Input id="phone" type="number" name="phone" onChange={handleValue} />
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleValue}
        />
        <FormLabel htmlFor="password_confirmation">Repita sua senha</FormLabel>
        <Input
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          onChange={handleValue}
        />


        <Button onClick={handleSubmit}>Enviar</Button>
      </FormControl>
      <img src={weightLift} />
    </main>
  );
};
