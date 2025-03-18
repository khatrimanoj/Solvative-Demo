import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PlacesTable from "./components/TableListing";
import Pagination from "./components/Pagination";

const App = () => {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPlaces = async () => {
    if (!query) {
      setPlaces([]);
      setTotalCount(0);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL,
        {
          params: { namePrefix: query, limit, offset },
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_API_KEY,
            "x-rapidapi-host": import.meta.env.VITE_API_HOST
          }
        }
      );
      setPlaces(response.data.data);
      setTotalCount(response.data.metadata?.totalCount || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPlaces();
  }, [offset, limit]);

  return (
    <div className="wrapper">
      <div className="main-title">
        <h1>Search for places</h1>
      </div>
      <SearchBar query={query} setQuery={setQuery} handleSearch={fetchPlaces} />
      <PlacesTable places={places} offset={offset} loading={loading} query={query} />
      <Pagination offset={offset} limit={limit} totalCount={totalCount} setOffset={setOffset} setLimit={setLimit} loading={loading} />
    </div>
  );
};
export default App;