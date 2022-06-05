import React, { Component } from "react";

// ["userId", "id", "title", "body"]

const printObjectRowData = (item, index) => {
  const getKeys = Object.keys(item);
  // recursively print object
  return (
    <tr key={index}>
      {getKeys.map((key, index2) => {
        if (typeof item[key] === "object") {
          return printObjectRowData(item[key], index2);
        }
        return <td key={index2}>{item[key]}</td>;
      })}
    </tr>
  );
};
class Table extends Component {
  render() {
    return (
      <>
        <h1>{this.props.tableName}</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>no</th>
              {this.props.listColumnName.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.listData.map((item, index) => {
              return printObjectRowData(item, index);
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
