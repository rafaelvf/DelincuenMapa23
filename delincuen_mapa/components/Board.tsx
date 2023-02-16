import styles from "../styles/Board.module.scss";
import Tweets from "./Tweets";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearFilter } from "../redux/userSlice";

export default function Board({ customers, handleClick }: any) {
  const [peopleArray, setPeopleArray] = useState([]);
  //const arrayAmague: [] = customers;
  const customersFiltered = useSelector((state: any) => state.user.robos);

  useEffect(() => {
    if (!customersFiltered) {
      setPeopleArray(customers);
    } else {
      setPeopleArray(customersFiltered);
    }
  });

  //const peopleArray = !customersFiltered ? customers : customersFiltered;
  const dispatch = useDispatch();
  console.log(customersFiltered, "customersFiltered2");
  console.log(customers, "customersFiltered23BOARD");
  console.log(peopleArray, "peopleArray");
  return (
    <>
      {peopleArray ? (
        <div className={styles.container}>
          {peopleArray.map((i: any, key: any) => (
            <Tweets
              //ciudad={i.ciudad}
              fecha={i.fechaHora}
              descripcion={i.descripcion}
              tipo={i.tipo}
              valor={i.valor}
              articulo={i.articulo}
              latitud={i.coordenadas.lat}
              longitud={i.coordenadas.lng}
              key={key}
            />
          ))}
          <div
            className={styles.borrarFiltros}
            onClick={() => {
              dispatch(clearFilter()), handleClick("");
            }}
          >
            Borrar Filtros
          </div>
        </div>
      ) : (
        <div className={styles.loading}>loading...</div>
      )}
    </>
  );
}
