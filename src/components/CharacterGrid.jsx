import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";

const CharacterGrid = ({ items, isLoading, quotes }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
            <h1 className="center"><u><strong>Cast</strong></u></h1>

      <hr />
      <br/>
      <section className="cards">
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item} />
        ))}
      </section>
      <br/>
      <hr/>
      <h1 className="center"><u><strong>Quotes</strong></u></h1>
      <section>
        {quotes.map((quote) => (
          <div className="card-quote">
            <ul>
              <li>
                {quote.quote}----{quote.author}
              </li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CharacterGrid;
