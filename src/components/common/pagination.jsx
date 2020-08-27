import React from "react";
import _ from "lodash";
export default function Pagination({
  pageCount,
  pageItems,
  currentPage,
  onPageChange,
}) {
  const pages = Math.ceil(pageItems / pageCount);
  const range = _.range(1, pages + 1);
  if (range.length === 1) return null;
  return (
    <div className="pagination-wrapper">
      {range.map((page) => (
        <div
          key={page}
          onClick={() => onPageChange(page)}
          className={
            currentPage === page ? "pagination-item active" : "pagination-item "
          }
        >
          <span>{page}</span>
        </div>
      ))}
    </div>
  );
}
