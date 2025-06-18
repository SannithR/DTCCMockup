import React, { useState, useMemo } from "react";
import { IconComponentNode } from "../IconComponentNode/IconComponentNode";
import { Line1 } from "../Line1/Line1";
import { Line1_1 } from "../Line11/Line1_1";
import { Line7 } from "../Line7/Line7";
import { Line38 } from "../Line38/Line38";
import { Line39 } from "../Line39/Line39";
import { Line40 } from "../Line40/Line40";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./style.css";
import Details from "../../Details/Details/Details";
import CopyDialogueBox from "../../Dialogue/CopyDialogueBox/CopyDialogueBox";

export default function ContentUpdated () {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(18);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDropdowns, setSelectedDropdowns] = useState({
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
    dropdown4: ""
  });
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Modal state management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isCopyDialogOpen, setIsCopyDialogOpen] = useState(false);

  // Keep the existing table data structure but make it paginated
  const allData = useMemo(() => {
    // Original table data from the existing structure
    const column1Data = [
      "0034779", "0034778", "0234779", "4234559", "3234759", "0034759", "6234759", "0034779",
      "6234759", "4234559", "0034779", "3234759", "3234759", "4234559", "0034759", "0034759",
      "0034759", "0034759", "6234759", "6234759", "0034779", "0034779", "0034759", "0034759", "0034779"
    ];

    const column2Data = [
      "Test", "Test 0234779", "Test 001", "Test 0012345", "Test 007", "Test 0456789", "Test 002",
      "Test 0016789", "Test 003", "Test 0098765", "Test 004", "Test 0123456", "Test 005", "Test 0087654",
      "Test 006", "Test 0034567", "Test 010", "Test 0111111", "Test 012", "Test 0134567", "Test 014",
      "Test 0156789", "Test 016", "Test 0179876", "Test 018"
    ];

    const column3Data = [
      "30_ABXYZ", "35_GHIKZM", "20_ABXYM", "25_KHIKZM", "40_LMNOPQ", "15_DEFUVW", "50_RSTUVW",
      "45_XYZABC", "10_KLMNOP", "55_QRSTUV", "60_ABCDEF", "70_GHIJKL", "65_MNOPQR", "80_STUVWX",
      "75_YZABCD", "85_EFGHIJ", "90_PQRSTU", "95_VWXYZA", "100_HIJKLM", "110_NOPQRS", "105_TUVWXY",
      "120_ZABCDE", "125_FGHJKL", "130_MNOPST", "140_QRSTUV"
    ];

    const column4Data = [
      "2024-12-25  03:09:05 AM", "2024-11-25  04:19:06 AM", "2024-10-26  03:09:08 AM",
      "2024-12-25  05:09:15 AM", "2024-12-25  03:09:05 PM", "2024-12-24  03:09:25 AM",
      "2024-11-23  03:09:07 AM", "2024-10-21  03:09:09 AM", "2024-12-25  05:08:01 AM",
      "2024-12-25  03:09:08 PM", "2024-11-23  03:09:05 AM", "2024-12-25  03:09:05 AM",
      "2024-12-25  03:09:15 AM", "2024-12-25  03:09:55 PM", "2024-12-25  03:09:35 PM",
      "2024-12-25  03:09:05 AM", "2024-12-20  03:09:05 AM", "2024-12-21  08:09:05 PM",
      "2024-12-27  09:09:05 AM", "2024-12-25  02:09:05 AM", "2024-12-23  03:09:05 AM",
      "2024-12-25  03:09:05 PM", "2024-12-25  03:09:05 AM", "2024-12-27  03:09:05 AM",
      "2024-12-25  03:09:05 AM"
    ];

    // Create 800 items by repeating and varying the original data
    const data = [];
    for (let i = 0; i < 800; i++) {
      data.push({
        id: i + 1,
        column1: column1Data[i % column1Data.length],
        column2: column2Data[i % column2Data.length],
        column3: column3Data[i % column3Data.length],
        column4: column4Data[i % column4Data.length]
      });
    }
    return data;
  }, []);

  // Dropdown options
  const dropdownOptions = [
    { value: "", label: "Select" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" }
  ];

  // Filter and search logic
  const filteredData = useMemo(() => {
    let filtered = allData;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply dropdown filters (if needed)
    // Add filtering logic based on dropdown selections here

    return filtered;
  }, [allData, searchTerm, selectedDropdowns]);

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Pagination logic
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  // Event handlers
  const handleDropdownChange = (dropdownName, value) => {
    setSelectedDropdowns(prev => ({
      ...prev,
      [dropdownName]: value
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSearchClick = () => {
    // Open the CopyDialogueBox modal
    setIsCopyDialogOpen(true);
  };

  const handleSort = (columnKey) => {
    setSortConfig(prev => ({
      key: columnKey,
      direction: prev.key === columnKey && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleRowSelect = (rowId) => {
    // Find the row data for the selected row
    const rowData = allData.find(item => item.id === rowId);
    if (rowData) {
      setSelectedRowData(rowData);
      setIsModalOpen(true);
    }

    // Also maintain the original selection behavior for other functionality
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) {
        newSet.delete(rowId);
      } else {
        newSet.add(rowId);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (selectedRows.size === currentData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentData.map(item => item.id)));
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Modal handlers
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRowData(null);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // CopyDialogueBox modal handlers
  const handleCloseCopyDialog = () => {
    setIsCopyDialogOpen(false);
  };

  const handleCopyDialogBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseCopyDialog();
    }
  };

  return (
    <div className="contant2">


      <div className="main-contant2">
        <div className="title-2">
          <div className="text">PAGE TITLE 00123</div>

          <div className="info-icon">
            <div className="info-circle">
              <HelpOutlineIcon
                style={{
                  color: '#666',
                  fontSize: '20px',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="div-3">
            <div className="row-2">
              <div className="top-label-dropdown">
                <div className="frame-content2-4">
                  <div className="label-wrapper">
                    <div className="label">
                      <div className="text-wrapper-content2-5">Lorem Ipsum</div>
                    </div>
                  </div>

                  <div className="frame-content2-5" />
                </div>

                <div className="div-4">
                  <select
                    value={selectedDropdowns.dropdown1}
                    onChange={(e) => handleDropdownChange('dropdown1', e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      cursor: 'pointer',
                      appearance: 'none',
                      color: 'inherit',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                  >
                    {dropdownOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="frame-content2-6">
                    <KeyboardArrowDownIcon
                      style={{
                        color: '#666',
                        fontSize: '20px',
                        pointerEvents: 'none',
                        marginRight:"-670px"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="top-label-dropdown">
                <div className="frame-content2-4">
                  <div className="label-wrapper">
                    <div className="label">
                      <div className="text-wrapper-content2-5">Lorem Ipsum</div>
                    </div>
                  </div>

                  <div className="frame-content2-5" />
                </div>

                <div className="div-4">
                  <select
                    value={selectedDropdowns.dropdown2}
                    onChange={(e) => handleDropdownChange('dropdown2', e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      cursor: 'pointer',
                      appearance: 'none',
                      color: 'inherit',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                  >
                    {dropdownOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="frame-content2-6">
                    <KeyboardArrowDownIcon
                      style={{
                        color: '#666',
                        fontSize: '20px',
                        pointerEvents: 'none',
                         marginRight:"-670px"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="top-label-dropdown">
                <div className="frame-content2-4">
                  <div className="label-wrapper">
                    <div className="label">
                      <div className="text-wrapper-content2-5">Lorem Ipsum</div>
                    </div>
                  </div>

                  <div className="frame-content2-5" />
                </div>

                <div className="div-4">
                  <select
                    value={selectedDropdowns.dropdown3}
                    onChange={(e) => handleDropdownChange('dropdown3', e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      cursor: 'pointer',
                      appearance: 'none',
                      color: 'inherit',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                  >
                    {dropdownOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="frame-content2-6">
                    <KeyboardArrowDownIcon
                      style={{
                        color: '#666',
                        fontSize: '20px',
                        pointerEvents: 'none',
                         marginRight:"-670px"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row-2">
              <div className="top-label-dropdown">
                <div className="frame-content2-4">
                  <div className="label-wrapper">
                    <div className="label">
                      <div className="text-wrapper-content2-5">Lorem Ipsum</div>
                    </div>
                  </div>

                  <div className="frame-content2-5" />
                </div>

                <div className="div-4">
                  <select
                    value={selectedDropdowns.dropdown4}
                    onChange={(e) => handleDropdownChange('dropdown4', e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      cursor: 'pointer',
                      appearance: 'none',
                      color: 'inherit',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                  >
                    {dropdownOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="frame-content2-6">
                    <KeyboardArrowDownIcon
                      style={{
                        color: '#666',
                        fontSize: '20px',
                        pointerEvents: 'none',
                         marginRight:"-670px"
                      }}
                    />
                  </div>
                </div>

                <div className="help-text-wrapper-content2">
                  <div className="help-text">Advanced</div>
                </div>
              </div>

              <div className="search-bar">
                <div className="div-5">
                  <div className="input-box">
                    <div className="default">
                      <div className="input-box-top-label">
                        <div className="label-frame-content2">
                          <div className="label-2">
                            <p className="text-wrapper-content2-5">
                              Lorem Ipsum Aenean leo ligula
                            </p>

                            <div className="text-wrapper-content2-7">*</div>
                          </div>
                        </div>

                        <div className="frame-content2-wrapper">
                          <div className="frame-content2-7">
                            <input
                              className="search-input"
                              placeholder="Search"
                              type="text"
                              value={searchTerm}
                              onChange={handleSearchChange}
                              // onClick={handleSearchClick}
                              style={{
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                width: '100%',
                                height: '100%',
                                cursor: 'text',
                                paddingRight: '30px',
                                fontSize: 'inherit',
                                fontFamily: 'inherit',
                                color: 'inherit'
                              }}
                            />
                         
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                      className="input"
                   
                      type="text"
                      // value={searchTerm}
                      onChange={handleSearchChange}
                      onClick={handleSearchClick}
                      style={{
                        cursor: 'text',
                        paddingRight: '40px'
                      }}
                    />
                    <SearchIcon
                      style={{
                        position: 'absolute',
                        right: '12px',
                        color: '#666',
                        fontSize: '20px',
                        cursor: 'pointer'
                      }}
                      onClick={handleSearchClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="button" onClick={handleSearchClick}>
            <div className="div-wrapper-2">
              <SearchIcon style={{ marginRight: '8px', fontSize: '16px' }} />
              <div className="PRIMARY">FIND</div>
            </div>
          </button>
        </div>

        <div className="container">
          <div className="overlap">
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="action-bar">
                  <div className="frame-content2-8">
                    <div className="element-to-of">Total Items Found: {totalItems}</div>
                  </div>

                  <div className="data-grid-action-bar">
                    <button
                      className="button-2"
                      onClick={() => {
                        // Copy functionality
                        console.log('Copy selected items:', Array.from(selectedRows));
                      }}
                      disabled={selectedRows.size === 0}
                      style={{
                        opacity: selectedRows.size === 0 ? 0.5 : 1,
                        cursor: selectedRows.size === 0 ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <div className="div-wrapper-2">
                        <div className="text-wrapper-content2-8">COPY</div>
                      </div>
                    </button>

                    <button
                      className="button-3"
                      onClick={() => {
                        // Delete functionality
                        console.log('Delete selected items:', Array.from(selectedRows));
                        setSelectedRows(new Set());
                      }}
                      disabled={selectedRows.size === 0}
                      style={{
                        opacity: selectedRows.size === 0 ? 0.5 : 1,
                        cursor: selectedRows.size === 0 ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <div className="div-wrapper-2">
                        <div className="text-wrapper-content2-8">DELETE</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="container-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <Line38 className="line-38" />
                      <Line39 className="line-39" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-2">
              <div className="overlap-2">
                <div className="data-grids">
                  <div className="grids-data-grid">
                    <div className="container-3">
                      <div className="container-4">
                        <div className="line-wrapper">
                          <Line7 className="line-7" />
                        </div>

                        <div className="checkbox-column">
                          <div className="checkbox">
                            <div className="div-5">
                              <input
                                type="checkbox"
                                className="rectangle"
                                checked={selectedRows.size === currentData.length && currentData.length > 0}
                                onChange={handleSelectAll}
                                style={{ cursor: 'pointer' }}
                              />
                            </div>
                          </div>

                       

                         

                          {currentData.map((item, index) => (
                            <div
                              key={item.id}
                              className={index % 2 === 0 ? "checkbox-states" : "check-box-wrapper"}
                            >
                              <div className="div-5">
                                <input
                                  type="checkbox"
                                  className="rectangle"
                                  checked={selectedRows.has(item.id)}
                                  onChange={() => handleRowSelect(item.id)}
                                  style={{ cursor: 'pointer' }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="data-column">
                          <div
                            className="header-cell"
                            onClick={() => handleSort('column1')}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="frame-content2-9">
                              <div className="group-3">
                                <IconComponentNode className="line-1" />
                                <div className="label-3">
                                  Lorem Ipsum
                                  {sortConfig.key === 'column1' && (
                                    <span style={{ marginLeft: '5px' }}>
                                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {currentData.map((item, index) => (
                            <div
                              key={`col1-${item.id}`}
                              className={index % 2 === 0 ? "cell-states" : "cell-states-2"}
                            >
                              <div className="div-wrapper-2">
                                <div className="lorem-lipsum">{item.column1}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="data-column">
                          <div
                            className="header-cell"
                            onClick={() => handleSort('column2')}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="frame-content2-9">
                              <div className="group-4">
                                <IconComponentNode className="line-1" />
                                <div className="label-3">
                                  Pede justo
                                  {sortConfig.key === 'column2' && (
                                    <span style={{ marginLeft: '5px' }}>
                                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {currentData.map((item, index) => (
                            <div
                              key={`col2-${item.id}`}
                              className={index % 2 === 0 ? "cell-states" : "cell-states-2"}
                            >
                              <div className="div-wrapper-2">
                                <div className="lorem-lipsum">{item.column2}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="data-column-2">
                          <div
                            className="header-cell"
                            onClick={() => handleSort('column3')}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="frame-content2-9">
                              <div className="group-5">
                                <IconComponentNode className="line-1" />
                                <div className="label-3">
                                  Donec pede justo
                                  {sortConfig.key === 'column3' && (
                                    <span style={{ marginLeft: '5px' }}>
                                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {currentData.map((item, index) => (
                            <div
                              key={`col3-${item.id}`}
                              className={index % 2 === 0 ? "cell-states" : "cell-states-2"}
                            >
                              <div className="div-wrapper-2">
                                <div className="lorem-lipsum">{item.column3}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="data-column-3">
                          <div
                            className="header-cell"
                            onClick={() => handleSort('column4')}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="frame-content2-9">
                              <div className="group-5">
                                <IconComponentNode className="line-1" />
                                <div className="label-3">
                                  Donec pede justo
                                  {sortConfig.key === 'column4' && (
                                    <span style={{ marginLeft: '5px' }}>
                                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {currentData.map((item, index) => (
                            <div
                              key={`col4-${item.id}`}
                              className={index % 2 === 0 ? "cell-states" : "cell-states-2"}
                            >
                              <div className="div-wrapper-2">
                                <div className="lorem-lipsum">{item.column4}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="data-column-4">
                          <div
                            className="header-cell"
                            onClick={() => handleSort('column4')}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="frame-content2-9">
                              <div className="group-5">
                                <IconComponentNode className="line-1" />
                                <div className="label-3">
                                  Donec pede justo
                                  {sortConfig.key === 'column4' && (
                                    <span style={{ marginLeft: '5px' }}>
                                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {currentData.map((item, index) => (
                            <div
                              key={`col4-${item.id}`}
                              className={index % 2 === 0 ? "cell-states" : "cell-states-2"}
                            >
                              <div className="div-wrapper-2">
                                <div className="lorem-lipsum">{item.column4}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="container-5" />
                    </div>
                  </div>
                </div>

                <Line40 className="line-40" />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
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
                onClick={handlePrevPage}
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
                      className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                className="pagination-btn"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Details Modal */}
        {isModalOpen && selectedRowData && (
          <div className="modal-overlay" onClick={handleModalBackdropClick}>
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Details for {selectedRowData.column1}</h2>
                <button className="modal-close-btn" onClick={handleCloseModal}>
                  <CloseIcon style={{ fontSize: '24px', color: '#616161' }} />
                </button>
              </div>
              <div className="modal-body">
                <Details />
              </div>
            </div>
          </div>
        )}

        {/* CopyDialogueBox Modal */}
        {isCopyDialogOpen && (
          <div className="modal-overlay" onClick={handleCopyDialogBackdropClick}>
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title"> Lookup</h2>
                <button className="modal-close-btn" onClick={handleCloseCopyDialog}>
                  <CloseIcon style={{ fontSize: '24px', color: '#616161' }} />
                </button>
              </div>
              <div className="modal-body">
                <CopyDialogueBox />
              </div>
            </div>
          </div>
        )}

      </div>


    </div>
  );
};
