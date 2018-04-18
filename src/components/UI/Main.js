import React, { Component, Fragment } from "react";
import { Narrator } from "../Logic/Narrator";

export class Main extends Component {
  state = { finalIntent: "", scripts_loaded: false, showBot: false };

  showLexBot = () => {
    this.setState({ showBot: true });
    window.runLex = true;
  };

  handleLexResult = e => {
    this.setState({ finalIntent: e.target.value });
  };

  onLexData = data => {
    if (data && data.dialogState == "ReadyForFulfillment") {
      var lexEvent = document.createEvent("HTMLEvents");
      lexEvent.initEvent("onLexResult", true, false);
      lexEvent.partType = data.slots.PartType;
      document.getElementById("bot").dispatchEvent(lexEvent);
    }
  };

  render() {
    return (
      <Fragment>
        <h3> AWS LEX </h3>
        <div>
          {" "}
          Click the launch button to start the AWS Lex Bot.
          <button onClick={this.showLexBot}>Once upon a time...</button>
        </div>
        <p>
          {" "}
          Final intent response will be displayed here :{" "}
          <span className="result">{this.state.finalIntent}</span>{" "}
        </p>

        <div
          hidden={!this.state.showBot}
          id="bot"
          onChange={e => this.handleLexResult}
        />
      </Fragment>
    );
  }
}
