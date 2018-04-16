import React, { Component, Fragment } from "react";
import ReactHowler from "react-howler";
import "./App.css";

class App extends Component {
  state = {
    playing: false
  };

  play = () => {
    this.setState({
      playing: true,
      ended: false
    });
  };

  finishedPlaying = () => {
    this.setState({
      ended: true
    });
  };

  render() {
    return (
      <Fragment>
        <ReactHowler
          src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          playing={this.state.playing}
          onEnd={this.finishedPlaying}
        />
        {!this.state.playing && <button onClick={this.play}>BEGIN</button>}
        {this.state.ended && <div>Finished Playing</div>}
      </Fragment>
    );
  }
}

export default App;
