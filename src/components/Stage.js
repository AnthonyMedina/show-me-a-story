import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import "./Stage.css";
import Box from "./Box";

class Stage extends Component {
  state = {
    isVisible: true,
    weather: "sunny",
    location: "https://preview.ibb.co/gDZ9xS/20474342274_cbe8fc3a7b_o.jpg",
    character: {
      name: "Bob",
      image:
        "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-7HeVAHLaw20%2FVDaJMsK2QxI%2FAAAAAAAAAA4%2FlsIJD1oxSvY%2Fs1600%2Frobot.png&f=1"
    },
    props: ["url", "url"]
  };

  render() {
    return <Box />;
  }
}

export default Stage;
