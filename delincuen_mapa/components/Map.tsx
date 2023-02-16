import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useSelector } from "react-redux";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";
import styles from "../styles/Map.module.scss";
import Markers from "./Markers";

export default function Map({ customers, handleClickMarker }: any) {
  const customersFiltered = useSelector((state: any) => state.user.robos);
  //console.log(customersFiltered, "customersFiltered");
  const peopleArray = !customersFiltered ? customers : customersFiltered;
  return (
    <div className={styles.container}>
      <MapContainer
        center={[-2.2, -79.93]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers
          customers={peopleArray}
          handleClickMarker={handleClickMarker}
        />
      </MapContainer>
    </div>
  );
}
