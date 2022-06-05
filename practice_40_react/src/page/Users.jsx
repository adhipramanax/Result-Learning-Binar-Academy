import React, { Component } from "react";
import Table from "../components/Table";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_data_user: [],
      list_data_column: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list_data_user: data,
          list_data_column: Object.keys(data[0]),
        });
      });
  }

  componentDidUpdate() {
    console.log(this.state.list_data_user);
    console.log(this.state.list_data_column);
  }

  render() {
    return (
      <div>
        <Table
          tableName="User Table"
          listData={this.state.list_data_user}
          listColumnName={this.state.list_data_column}
        />
      </div>
    );
  }
}

export default Users;
