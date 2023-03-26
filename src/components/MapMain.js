import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as turf from "@turf/turf";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapMain = () => {
  const { bbox, lat, lon } = useSelector((state) => state.region);
  const [mapBounds, setMapBounds] = useState([
    [51.49, -0.08],
    [51.5, -0.06],
  ]);
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [mapZoom, setMapZoom] = useState(1);

  useEffect(() => {
    if (lat && lon) {
      setMapCenter([lat, lon]);
      setMapZoom(1);
    }
  }, [lat, lon]);

  useEffect(() => {
    if (bbox.length) {
      const bboxPolygon = turf.bboxPolygon(bbox);
      const bboxBounds = turf.bbox(bboxPolygon);
      setMapBounds([
        [bboxBounds[1], bboxBounds[0]],
        [bboxBounds[3], bboxBounds[2]],
      ]);
    }
  }, [bbox]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      scrollWheelZoom={true}
      style={{ height: "calc(100vh - 100px)" }}
      bounds={mapBounds}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={mapCenter}>
        <Popup>
         MAPUP <br /> APP
    
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapMain;
