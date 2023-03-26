import React, { useEffect } from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";

const RegionInfo = (x) => {
  const { cardData } = useSelector((state) => state.region);
  const { currency_symbol, timezones, units } = cardData;
  return (
    <Card
      title="Region Info"
      style={{
        position: "fixed",
        bottom: "30%",
        right: "5px",
        width: "200px",
        height: "300px",
        overflow: "auto",
        zIndex: 10000,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <p>
        <b>Currency Symbol:</b> {currency_symbol || "N/A"}
      </p>
      <p>
        <b>Timezones:</b>
      </p>
      <ul>
        {timezones.map((timezone) => (
          <li key={timezone}>{timezone || "N/A"}</li>
        ))}
      </ul>
      <p>
        <b>Units:</b>
      </p>
      <ul>
        <li>
          <b>Speed:</b> {units.speed || "N/A"}
        </li>

        
      </ul>
    </Card>
  );
};

export default RegionInfo;
