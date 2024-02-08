import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const ProyectContext = createContext();

export const Provider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [loadingSwitch, setLoadingSwitch] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiData(data.map((obj) => ({ ...obj, liked: false })));
      setLoadingSwitch(true);
    } catch (error) {
      setApiError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProyectContext.Provider
      value={{
        apiData,
        setApiData,
        loadingSwitch,
        apiError,
        setApiError,
      }}
    >
      {children}
    </ProyectContext.Provider>
  );
};

export const useProyectContext = () => useContext(ProyectContext);
