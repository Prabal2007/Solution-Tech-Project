import React from "react";
import "./pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPageItems = () => {
    const items = [];
    const maxVisible = 10;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) items.push(i);
    } else {
      items.push(1);
      let left = Math.max(2, currentPage - 2);
      let right = Math.min(totalPages - 1, currentPage + 2);
      if (left > 2) items.push("left-ellipsis");
      for (let i = left; i <= right; i++) items.push(i);
      if (right < totalPages - 1) items.push("right-ellipsis");
      items.push(totalPages);
    }
    return items;
  };

  const items = getPageItems();

  return (
    <div className="pagination">
      <button
        className="page-btn"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {items.map((it, idx) => {
        if (it === "left-ellipsis" || it === "right-ellipsis") {
          return (
            <span key={"e-" + idx} className="ellipsis">
              …
            </span>
          );
        }

        return (
          <button
            key={it}
            className={`page-item ${it === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(it)}
          >
            {it}
          </button>
        );
      })}

      <button
        className="page-btn"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </div>
  );
}

export default Pagination;
