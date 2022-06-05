import React, { Component } from "react";
import Table from "../components/Table";
import "../assets/css/style-post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_data_post: [],
      list_data_column: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list_data_post: data,
          list_data_column: Object.keys(data[0]),
        });
      });
  }

  componentDidUpdate() {
    console.log(this.state.list_data_post);
    console.log(this.state.list_data_column);
  }

  render() {
    return (
      <div>
        <Table
          tableName="Post Table"
          listData={this.state.list_data_post}
          listColumnName={this.state.list_data_column}
        />
      </div>
    );
  }
}

export default Post;
