import Head from "next/head";
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import MapForm from "../components/MapForm";
import dynamic from "next/dynamic";
import styles from "../styles/Form.module.scss";
import Board from "../components/Board";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/userSlice";
import FormSub from "../components/FormSub";

export default function Form() {
  const [coord, setCoord] = useState({});

  const MapForm = React.useMemo(
    () =>
      dynamic(() => import("../components/MapForm"), {
        loading: () => <p>A map is loading</p>,
        ssr: false, // This line is important. It's what prevents server-side render
      }),
    [
      /* list variables which should trigger a re-render here */
    ]
  );

  //@ts-ignore
  const name2 = useSelector((state) => state.user.name);
  //@ts-ignore
  const email2 = useSelector((state) => state.user.email);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  function handleChange(e: any) {
    e.preventDefault();

    dispatch(update({ name, email }));
  }

  // console.log(name, "name");
  // console.log(email, "email");
  // console.log(name2, "name2");
  // console.log(email2, "email2");

  const pull_data = (data: any) => {
    //console.log(data, "kkk");
    setCoord(data);
  };

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>DelincuenMapa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className={styles.subContainer}>
          <div className={styles.subSubContainer}>
            <MapForm func={pull_data} />
          </div>
          <div className={styles.subSubContainer}>
            <FormSub coord={coord} />
          </div>
        </div>
      </main>
    </div>
  );
}
