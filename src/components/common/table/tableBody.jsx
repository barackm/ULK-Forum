import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  state = {};
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;
    // function vowelsAndConsonants(s) {
    //   const vowels = ["a", "e", "i", "o", "u"];
    //   for (let i = 0; i <= s.length; i++) {
    //     console.log(
    //       vowels.filter((v) => v === s[i])[0] &&
    //         vowels.filter((v) => v === s[i])[0]
    //     );
    //   }
    // }
    // console.log(vowelsAndConsonants("javascriptloops"));
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id} className="table-space">
            {columns.map((column) => (
              <td className={column.className}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
