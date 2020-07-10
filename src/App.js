import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters`);

      console.log(result.data);
    };


    fetchItems()
  },[]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
