import React, { Component, Fragment } from "react";
import { Control } from "./Control";
import { Conversation } from "./Conversation";
import { Recorder } from "./Recorder";
import { Renderer } from "./Renderer";

export class Narrator extends Component {
  render() {
    return (
      <Fragment>
        <Control />
        <Conversation />
        <Recorder />
        <Renderer />
      </Fragment>
    );
  }
}
