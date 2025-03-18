import React from "react";

const Pagination = ({ offset, limit, totalCount, setOffset, setLimit, loading }) => {
  const totalPages = Math.ceil(totalCount / limit);
  const currentPage = Math.floor(offset / limit) + 1;
  const maxPageDisplay = 5;
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + maxPageDisplay - 1);

  const handlePageClick = (page) => {
    if (!loading) setOffset((page - 1) * limit);
  };

  return (
    <div className="pagination-container">
        <div className="showing-entries">
            <span>Show </span>
            <select className="showing" onChange={(e) => setLimit(Number(e.target.value))} value={limit} disabled={loading}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
            <span> entries</span>
        </div>
        <div className="pagination">
        <button className="btn btn-prev" disabled={currentPage === 1 || loading} onClick={() => setOffset(offset - limit)}>
          &lt;
        </button>
        {[...Array(endPage - startPage + 1).keys()].map((i) => (
          <button
            className={`btn btn-page ${currentPage === startPage + i ? "active" : ""}`}
            key={i}
            onClick={() => handlePageClick(startPage + i)}
            disabled={loading}
          >
            {startPage + i}
          </button>
        ))}
        {totalPages > maxPageDisplay && currentPage + maxPageDisplay <= totalPages && (
          <button className="btn btn-next" onClick={() => setOffset(offset + limit)} disabled={loading}>&gt;</button>
        )}
      </div>
    </div>
  );
};

export default Pagination;