import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Axios from "axios";
import CharacterGrid from "./components/CharacterGrid";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters`);

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
