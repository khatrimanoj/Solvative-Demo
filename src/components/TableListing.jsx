import React from "react";

const TableListing = ({ places, offset, loading, query }) => {
  return (
    <div className="table-container">
      {loading && <div className="spinner"><img src="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif" alt="loader" /></div>}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {places.length > 0 ? (
            places.map((place, index) => (
              <tr key={index}>
                <td data-label="#">{offset + index + 1}</td>
                <td data-label="Place Name">{place.name}</td>
                <td data-label="Country">
                    <div className="flag-name">
                        <img
                            src={`https://flagsapi.com/${place.countryCode}/flat/32.png`}
                            alt={place.country}
                        />
                        <span>{place.country}</span>
                    </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">{query ? "No results found" : "Start searching"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableListing;
