import React from "react";

// Reusable DataTable component
export default function DataTable({
  columns = [],
  data = [],
  currentPage = 1,
  itemsPerPage = 10,
  totalItems = 0,
  totalPages = 1,
  selectedRows = new Set(),
  sortConfig = { key: null, direction: "asc" },
  onSort = () => {},
  onRowSelect = () => {},
  onSelectAll = () => {},
  onPageChange = () => {},
  onPrevPage = () => {},
  onNextPage = () => {},
  renderActions = null,
}) {
  // Calculate indices for pagination info
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + data.length;

  return (
    <div className="container">
      <div className="overlap">
        <div className="overlap-wrapper">
          <div className="overlap">
            {/* Action bar for copy/delete or custom actions */}
            {renderActions && renderActions()}
            {/* Decorative lines can be added here if needed */}
          </div>
        </div>
        {/* Data grid (table) */}
        <div className="container-2">
          <div className="overlap-2">
            <div className="data-grids">
              <div className="grids-data-grid">
                <div className="container-3">
                  <div className="container-4">
                    {/* Checkbox column for row selection */}
                    <div className="checkbox-column">
                      <div className="checkbox">
                        <div className="div-5">
                          <input
                            type="checkbox"
                            className="rectangle"
                            checked={selectedRows.size === data.length && data.length > 0}
                            onChange={onSelectAll}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                      {/* Individual row checkboxes */}
                      {data.map((item, index) => (
                        <div
                          key={item.id}
                          className={index % 2 === 0 ? "checkbox-states" : "check-box-wrapper"}
                        >
                          <div className="div-5">
                            <input
                              type="checkbox"
                              className="rectangle"
                              checked={selectedRows.has(item.id)}
                              onChange={() => onRowSelect(item.id)}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Data columns with sortable headers */}
                    {columns.map((col, colIdx) => (
                      <div className={col.className || "data-column"} key={col.key}>
                        <div
                          className="header-cell"
                          onClick={() => onSort(col.key)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="frame-content2-9">
                            <div className={col.headerGroupClass || "group-3"}>
                              {col.icon}
                              <div className="label-3">
                                {col.label}
                                {sortConfig.key === col.key && (
                                  <span style={{ marginLeft: "5px" }}>
                                    {sortConfig.direction === "asc" ? "↑" : "↓"}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {data.map((item, index) => (
                          <div
                            key={`col-${col.key}-${item.id}`}
                            className={index % 2 === 0 ? "cell-states" : "cell-states-2"}
                          >
                            <div className="div-wrapper-2">
                              <div className="lorem-lipsum">{item[col.key]}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="container-5" />
                </div>
              </div>
            </div>
            {/* Pagination controls */}
            <div className="pagination">
              <div className="frame-content2-new">
                <div className="frame-content2-11">
                  <div className="pagination-info">
                    Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
                  </div>
                </div>
                <div className="pagination-controls">
                  <button
                    className="pagination-btn"
                    onClick={onPrevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <div className="page-numbers">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={pageNum}
                          className={`page-number ${currentPage === pageNum ? "active" : ""}`}
                          onClick={() => onPageChange(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className="pagination-btn"
                    onClick={onNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
