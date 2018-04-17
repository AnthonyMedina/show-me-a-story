import React, { Component, Fragment } from "react";
import { Narrator } from "../Logic/Narrator";

export class Main extends Component {
  state = { start: false };

  start = () => {
    this.setState({ start: true });
  };

  render() {
    return (
      <div>
        <button className="start" onClick={this.start}>
          Once upon a time...
        </button>
        {this.state.start && <Narrator />}
      </div>
    );

    // <div> Click the launch button to start the AWS Lex Bot.
    //    <button (click)="showLexBot($event)"> Launch </button>
    // </div>

    // <p> Final intent response will be displayed here :
    //    <span class="result">{{finalIntent}}</span>
    // </p>

    // <div [hidden]="!showBot" id="bot" (window:onLexResult)="handleLexResult($event)">
    // 	<div id="audio-control" class="white-circle">
    // 	   <div>
    // 		  <img src="assets/images/lex.png">
    // 	   </div>
    // 	</div>

    // 	<div>
    // 	   <canvas class="visualizer"></canvas>
    // 	</div>

    // 	<div id="message-panel">
    // 	   <span id="message"></span>
    // 	</div>
    // </div>
  }
}
