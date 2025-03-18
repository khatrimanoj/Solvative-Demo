import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PlacesTable from "./components/TableListing";
import Pagination from "./components/Pagination";

const App = () => {
 

  return (
    <div>
      <SearchBar  />
      <PlacesTable/>
      <Pagination />
    </div>
  );
};

export default App;