import React, { useState } from "react";
import CardData from "./CardData";


const Search = () => {

    const [query, setQuery] = useState("");
  return (
    <div>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
         value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Items"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {
        CardData.length && CardData.filter((CardData) => {
          if (query === "") {
            //if query is empty
            return CardData;
          } else if (CardData.rname.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return CardData;
          }
        }).map((CardData) => (
          <div className="card" key={CardData.id}>
            <p>{CardData.rname}</p>
            <p>{CardData.price}</p>
          
          </div>
        ))}
    </div>
  );
};

export default Search;
