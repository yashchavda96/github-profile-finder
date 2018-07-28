import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  handleChange = (event) => {
    this.setState({
      username: event.target.value
    }, () => {
      if (this.state.username === "") {
        this.handleSubmit()
      }
    });
  };
  handleSubmit = () => {
    this.props.fetchUserDetails(this.state.username);
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary" >
        <span className="navbar-brand mb-0 h1">Github Profile Finder</span>
        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control mr-sm-2" type="text" placeholder="Search by username" value={this.state.username} onChange={this.handleChange} />
          <button class="btn btn-light btn-outline-light my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>Search</button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
