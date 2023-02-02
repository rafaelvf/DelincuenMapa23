import React from "react";
import { Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Markers = ({ customers }: any) => {
  console.log(customers, "robos");

  const markers =
    customers && customers.length
      ? customers.map((place: any, i: any) => (
          <Marker key={i} position={place.coordenadas}>
            <Popup>
              Tipo de Delito: {place.tipo}
              <br />
              Latitud: {place.coordenadas.lat}
              <br />
              Longitud:{place.coordenadas.lng}
            </Popup>
          </Marker>
        ))
      : null;

  return markers && markers.length ? <div>return {markers}</div> : null;
};

export default Markers;
