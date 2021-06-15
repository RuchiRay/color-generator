import React, { useState,useEffect } from "react";
import rgbToHex from "./utils";
export const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...bcg);
  const hexValue = `${hex}`;
  useEffect(() => {
   const val=   setTimeout(() => {
          setAlert(false)
      }, 3000);
      return () => {
          clearTimeout(val)
      }
  }, [alert])
  return (
    <div
      className={index > 20 ? "dark" : "light"}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent">{weight}%</p>
      <p className="hex">{hex}</p>
      {alert ? <p className="alert">Copied to clipboard</p> : ""}
    </div>
  );
};
