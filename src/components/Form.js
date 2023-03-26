import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRegion } from "../redux/reducers/regions";
import { Select, Button } from "antd";

const { Option } = Select;

const Form = () => {
  const [selectedRegion, setSelectedRegion] = useState();
  const dispatch = useDispatch();

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const getCountryData = async (countryName) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${countryName}&format=json&polygon_geojson=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0];
  };

  const getCountryCardData = async (countryName) => {
    const url = `https://restcountries.com/v2/name/${countryName}?fullText=true`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const getCountryMeasurementUnits = async (countryName) => {
    const apiKey = "336b3355184b4514bc5f1d0ca1114e68";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${countryName}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data?.results[0];
  };


  const handleFormSubmit = async () => {
    const countryData = await getCountryData(selectedRegion);
    const countryCardData = await getCountryCardData(selectedRegion);
    const countryMeasurementUnits = await getCountryMeasurementUnits(
      selectedRegion
    );

    dispatch(
      setRegion({
        name: selectedRegion,
        bbox: countryData.boundingbox,
        lat: countryData.lat,
        lon: countryData.lon,
        cardData: {
          currency_symbol: countryCardData[0].currencies[0].symbol,
          timezones: countryCardData[0].timezones,
          units: {
            speed: countryMeasurementUnits?.annotations?.roadinfo?.speed_in,
            
          },
        },
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "100px",
        left: "40%",
        zIndex: 10000,
        gap: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <Select
        defaultValue={selectedRegion}
        style={{ width: 300 }}
        onChange={handleRegionChange}
        autoFocus
        placeholder="Select a country"
      >
        <Option value="India">India</Option>
        <Option value="United States of America">United States</Option>
        <Option value="United Kingdom of Great Britain and Northern Ireland">
          United Kingdom
        </Option>
      </Select>
      <Button
        type="primary"
        onClick={handleFormSubmit}
        disabled={selectedRegion === undefined}
      >
        Load
      </Button>
    </div>
  );
};

export default Form;
