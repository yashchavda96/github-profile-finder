import React, { Component } from 'react';
import NavBar from './components/NavBar';
import axios from 'axios';
import UserProfile from './components/UserProfile';
import SearchGuide from './components/SearchGuide';

const re = /^[a-zA-Z0-9-_]+$/;
const baseUrl = "http://api.github.com/users/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userDetails: "",
      repos: [],
      starred: [],
      followers: [],
      followings: []
    };
  };
  fetchRepos = (name) => {
    axios.get(baseUrl + name + "/repos", {
      params: {
        client_id: "3626c90e04f2cc553787",
        client_secret: "c758510dd24758f8e427ebde120be128b35f917e"
      }
    })
      .then((response) => {
        console.log(response);

        this.setState({
          repos: response.data
        });

      })
      .catch((error) => {
        // console.clear();

      });
  };

  fetchStarredRepos = (name) => {
    axios.get(baseUrl + name + "/starred", {
      params: {
        client_id: "3626c90e04f2cc553787",
        client_secret: "c758510dd24758f8e427ebde120be128b35f917e"
      }
    })
      .then((response) => {
        console.log(response);

        this.setState({
          starred: response.data
        });

      })
      .catch((error) => {
        // console.clear();

      });
  };

  fetchFollowers = (name) => {
    axios.get(baseUrl + name + "/followers", {
      params: {
        client_id: "3626c90e04f2cc553787",
        client_secret: "c758510dd24758f8e427ebde120be128b35f917e"
      }
    })
      .then((response) => {
        console.log(response);

        this.setState({
          followers: response.data
        });

      })
      .catch((error) => {
        // console.clear();

      });
  };

  fetchFollowings = (name) => {
    axios.get(baseUrl + name + "/following", {
      params: {
        client_id: "3626c90e04f2cc553787",
        client_secret: "c758510dd24758f8e427ebde120be128b35f917e"
      }
    })
      .then((response) => {
        console.log(response);

        this.setState({
          followings: response.data
        });

      })
      .catch((error) => {
        // console.clear();

      });
  };
  fetchUserDetails = (username) => {
    if (re.test(username)) {
      axios.get(baseUrl + username, {
        params: {
          client_id: "3626c90e04f2cc553787",
          client_secret: "c758510dd24758f8e427ebde120be128b35f917e"
        }
      })
        .then((response) => {
          console.log(response);
          this.setState({
            userDetails: response.data
          });
          this.fetchRepos(username);
          this.fetchStarredRepos(username);
          this.fetchFollowers(username);
          this.fetchFollowings(username);
        })
        .catch((error) => {
          // console.clear();

        });
    }
  };
  render() {
    return (
      <div className="App">
        <NavBar fetchUserDetails={this.fetchUserDetails} />
        <div className="container-fluid">
          {this.state.userDetails !== "" ? <UserProfile {...this.state} /> : <SearchGuide />}
        </div>

      </div>
    );
  }
}

export default App;
