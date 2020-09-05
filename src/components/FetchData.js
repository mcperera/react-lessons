import React, { Component } from "react";

class FetchData extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/1")
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
      });
  }

  render() {
    const nameLoading = this.state.loading
      ? "Loading...."
      : this.state.character.name;
    return (
      <div>
        <h1>{nameLoading}</h1>
      </div>
    );
  }
}

export default FetchData;
