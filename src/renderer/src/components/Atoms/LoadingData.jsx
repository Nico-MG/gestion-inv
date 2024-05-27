import React, { useState, useEffect } from "react";
import "./loadingdata.css";
import i_loading from "../../images/i_loading.gif";
import { Container } from "@mui/material";

const LoadingData = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
    }, 300); // Cambia el valor según la velocidad deseada

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      maxWidth="sm" // Establece el ancho máximo del Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh", // Ajusta la altura según tu diseño
        marginLeft: "600px", // Corrige la propiedad marginLeft
      }}
    >
      <img
        src={i_loading}
        alt="Loading animation"
        style={{ width: "100px", height: "100px" }} // Ajusta el tamaño de la imagen
      />
      <h2 style={{ fontStyle: "italic" }}>Cargando data{dots}</h2>
    </Container>
  );
};

export default LoadingData;
