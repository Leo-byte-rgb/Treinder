import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import styles from "./styles.module.scss";
import api from "../../services/api";



export const Trainers = () => {
  const [filter, setFilter] = useState("");

  const [treiners, setTreiners] = useState([]);

  const getData = () => {
    api.get("/trainers").then((response) => {
      setTreiners(response.data.map(({id, name, phone, email, avatar_url: photo, trainer: {description, city}})=> ({
        id, name, description, phone, email, city, photo
      })));
    })
  };

  useEffect(() =>{
    getData();
  }, [])
  return (
    <main className={styles.container}>
      <div className={styles.flex}>
        <Input
          placeholder="Busque por profissionais"
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      {treiners
        .filter((treiner) =>
          treiner.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((treiner) => {
          return <Card key={treiner.id} {...treiner} />;
        })}
    </main>
  );
};
