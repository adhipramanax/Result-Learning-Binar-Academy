import React, { Component } from "react";
import Table from "../components/Table";

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_data_album: [],
      list_data_column: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list_data_album: data,
          list_data_column: Object.keys(data[0]),
        });
      });
  }

  componentDidUpdate() {
    console.log(this.state.list_data_album);
    console.log(this.state.list_data_column);
  }

  render() {
    return (
      <div>
        <Table
          tableName="Album Table"
          listData={this.state.list_data_album}
          listColumnName={this.state.list_data_column}
        />
      </div>
    );
  }
}

export default Albums;
