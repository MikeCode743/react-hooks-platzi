import { useState, useEffect } from "react";

const useCaracter = (url) => {
  const [caracters, setCaracters] = useState([]);

  useEffect(() => {
    const getCarateres = async () => {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setCaracters(resultado.results);
    };

    getCarateres();
  }, [url]);

  return caracters;
};

export default useCaracter;
