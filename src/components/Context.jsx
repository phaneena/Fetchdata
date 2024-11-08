import React, { createContext, useState, useEffect } from "react";

export const fetchcontext = createContext();

const Context = ({ children }) => {
  const [fetchproducts, setFetchproducts] = useState([]);
  const [favrt,setFavrt]=useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setFetchproducts(data.recipes);
      } catch (error) {
        console.error("Error fetching ", error);
      }
    };
    fetchData();
  }, []);
  const addfavrt = (item) => {
    setFavrt([...favrt,item])
};
  return (
    <fetchcontext.Provider value={{fetchproducts,setFetchproducts,favrt,addfavrt}}>
      {children}
    </fetchcontext.Provider>
  );
};

export default Context;