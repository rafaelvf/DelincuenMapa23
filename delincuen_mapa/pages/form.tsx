import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Nav from "../components/Nav";
import Map from "../components/Map";
import dynamic from "next/dynamic";
import styles from "../styles/Form.module.scss";
import Board from "../components/Board";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/userSlice";

export default function Form() {
  const Map = dynamic(
    () => import("../components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
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

  console.log(name, "name");
  console.log(email, "email");
  console.log(name2, "name2");
  console.log(email2, "email2");

  return (
    <div className={styles.container}>
      <Head>
        <title>DelincuenMapa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className={styles.subContainer}>
          <div style={{ width: "50%" }}>
            <Map />
          </div>
          <div style={{ width: "50%" }}>
            <form>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleChange}>update</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
