import React from "react";
import { Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { filterId } from "../redux/userSlice";
const Markers = ({ customers, handleClickMarker }: any) => {
  //console.log(customers, "robos");
  const dispatch = useDispatch();
  const markers =
    customers && customers.length
      ? customers.map((place: any, i: any) => (
          <Marker
            key={i}
            position={place.coordenadas}
            eventHandlers={{
              click: () => {
                dispatch(filterId(place._id)), handleClickMarker("Marker");
              },
            }}
          >
            {/* <Popup>
              Tipo de Delito: {place.tipo}
              <br />
              Latitud: {place.coordenadas.lat}
              <br />
              Longitud:{place.coordenadas.lng}
            </Popup> */}
          </Marker>
        ))
      : null;

  return markers && markers.length ? <div>return {markers}</div> : null;
};

export default Markers;
