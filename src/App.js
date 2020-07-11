import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const resultQuote = await Axios(`https://www.breakingbadapi.com/api/quotes`);
      console.log(resultQuote.data);
      setItems(result.data);
      setQuotes(resultQuote.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} quotes={quotes} />

    </div>
  );
}

export default App;
