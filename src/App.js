import React, { Component } from 'react';
import NavBar from './components/NavBar';
import axios from 'axios';
import UserProfile from './components/UserProfile';
import SearchGuide from './components/SearchGuide';

const re = /^[a-zA-Z0-9-_]+$/;
const baseUrl = "https://api.github.com/users/";

// put your github oauth api client_id and client_secret here
// const config = {
//   params: {
//     client_id: "some-string",
//       client_secret: "some-string"
//   }
// };

// sample axios request with above config params

// axios.get(baseUrl + name, config)
//   .then((response) => {
//     this.setState({
//       repos: response.data
//     });
//   })
//   .catch((error) => {
//     console.clear();
//   });


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
    axios.get(baseUrl + name + "/repos")
      .then((response) => {
        this.setState({
          repos: response.data
        });
      })
      .catch((error) => {
        console.clear();
      });
  };

  fetchStarredRepos = (name) => {
    axios.get(baseUrl + name + "/starred")
      .then((response) => {
        this.setState({
          starred: response.data
        });
      })
      .catch((error) => {
        console.clear();
      });
  };

  fetchFollowers = (name) => {
    axios.get(baseUrl + name + "/followers")
      .then((response) => {
        this.setState({
          followers: response.data
        });
      })
      .catch((error) => {
        console.clear();
      });
  };

  fetchFollowings = (name) => {
    axios.get(baseUrl + name + "/following")
      .then((response) => {
        this.setState({
          followings: response.data
        });
      })
      .catch((error) => {
        console.clear();
      });
  };
  fetchUserDetails = (username) => {
    if (re.test(username)) {
      axios.get(baseUrl + username)
        .then((response) => {
          this.setState({
            userDetails: response.data
          });
          this.fetchRepos(username);
          this.fetchStarredRepos(username);
          this.fetchFollowers(username);
          this.fetchFollowings(username);
        })
        .catch((error) => {
          console.clear();
        });
    } else {
      this.setState({
        username: "",
        userDetails: "",
        repos: [],
        starred: [],
        followers: [],
        followings: []
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
