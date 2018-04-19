import React, { Component, Fragment } from "react";
import { Main } from "./components/UI/Main";
import "./App.css";
import LexChat from "./components/LexChat";
import Stage from "./components/Stage";

class App extends Component {
  // state = { rotation: 0 };

  // componentDidMount() {
  //   requestAnimationFrame(this.tick);
  // }

  // tick = () => {
  //   this.setState({ rotation: this.state.rotation + 0.01 });
  //   requestAnimationFrame(this.tick);
  // };
  render() {
    return (
      <div>
        <Main />
        <Stage />
        {/* <LexChat
          botName="set_the_scene"
          IdentityPoolId="eu-west-1:3406189f-e003-43c7-a93b-95fa95a1b7b8"
          placeholder="Placeholder text"
          style={{ position: "absolute" }}
          backgroundColor="#FFFFFF"
          height={430}
          headerText="Chat with our awesome bot"
          region="eu-west-1"
        /> */}
      </div>
    );
  }
}

export default App;
