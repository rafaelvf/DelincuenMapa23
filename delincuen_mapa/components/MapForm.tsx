import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import styles from "../styles/Map.module.scss";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const MapForm = (props: any) => {
  const [state, setState] = useState({
    currentLocation: { lat: -2.170998, lng: -79.922356 },
  });

  const [coordenadas, setCoordenadas] = useState({ lat: 1, lng: 1 });

  props.func(coordenadas);

  const onSuccess = (coordenadas: any) => {
    setCoordenadas({
      lat: coordenadas.coords.latitude,
      lng: coordenadas.coords.longitude,
    });
  };

  const onError = (error: any) => {
    setCoordenadas({
      lat: 1,
      lng: 1,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const success = (state: any) => {
    setState({
      currentLocation: {
        lat: state.coords.latitude,
        lng: state.coords.longitude,
      },
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const center = {
    lat: 51.505,
    lng: -0.09,
  };
  console.log(state, "d");
  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true);

    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            //@ts-ignore
            setState(marker.getLatLng());
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);
    const map = useMapEvents({
      click(e) {
        setCoordenadas({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });

    return coordenadas ? (
      <Marker
        key={coordenadas["lat"]}
        position={coordenadas}
        draggable={draggable}
        eventHandlers={eventHandlers}
        ref={markerRef}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup minWidth={90}>
          <p>Lat:latlng</p>
        </Popup>
      </Marker>
    ) : null;
  }

  console.log(state.currentLocation, "curren");

  return (
    <div className={styles.container}>
      <MapContainer
        center={state.currentLocation}
        zoom={18}
        scrollWheelZoom={true}
        style={{ height: "92vh", width: "100wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <DraggableMarker />
      </MapContainer>
    </div>
  );
};

export default MapForm;
