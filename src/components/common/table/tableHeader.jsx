import React, { Component } from "react";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import { IconContext } from "react-icons";
class TableHeader extends Component {
  state = {
    errorMessage: "",
  };

  raseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };
  renderSortIcon = (column) => {
    const sortColumn = { ...this.props.sortColumn };
    if (!column.path) return null;
    else {
      if (sortColumn.path === column.path) {
        if (sortColumn.order === "asc") {
          return (
            <IconContext.Provider value={{ className: "sort-icon" }}>
              <FaSortAmountUp />
            </IconContext.Provider>
          );
        } else {
          return (
            <IconContext.Provider value={{ className: "sort-icon" }}>
              <FaSortAmountDown />
            </IconContext.Provider>
          );
        }
      }
    }
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <tr className="table100-head">
          {columns.map((c) => (
            <th
              key={c._id}
              className={c.className}
              onClick={() => this.raseSort(c.path)}
            >
              {c.name}
              {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
