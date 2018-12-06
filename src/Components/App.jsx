import React, { Component } from "react";
import NavBar from "./NavBar";
import Timeline from "./Timeline";
import Form from './Form';

let oldChirps = [
  { userName: "Patrick", chirp: "This makes my brain hurt!" },
  { userName: "Patrick", chirp: "This lab is aggravating me" },
  {
    userName: "Patrick",
    chirp: "It would help if I would stop being so complex"
  }
]; //3 chirps on page

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      chirp: "",
      chirpsArray: []
    };

    this.handleUser = this.handleUser.bind(this);
    this.handleChirp = this.handleChirp.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleUser(value) {
    this.setState({ userName: value  });
  }

  handleChirp(value) {
    this.setState({ chirp: value  });
  }

  handleClick(e) {
    e.preventDefault();
    //snapshots
    let chirps = this.state.chirpsArray;
    let chirp = {
      userName: this.state.userName,
      chirp: this.state.chirp
    };
    chirps.unshift(chirp); //push new chirp to top of Timeline

    this.setState({ userName: "", chirp: "", chirpArray: chirps });
  } //when run push values into new card

  componentWillMount() {
    this.setState({ chirpsArray: oldChirps });
  } //shows oldChirps

  render() {
    return (
      <>
        <NavBar />
        <Form userName={this.state.userName} chirp={this.state.chirp} handleUser={this.handleUser} handleChirp={this.handleChirp} handleClick={this.handleClick} />
        <Timeline chirps={this.state.chirpsArray} />
      </>
    );
  }
}

export default App;
