import React, { useEffect, useRef } from "react";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="searchBar-container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search places..."
        value={query}
        className="search-bar"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <div className="short-cut">
        <span>Ctrl + /</span>
      </div>
    </div>
  );
};

export default SearchBar;