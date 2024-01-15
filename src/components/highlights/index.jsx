import './style.css'

import { Component } from "react";
import Flicking from "@egjs/react-flicking";

export default class DemoComponent extends Component {
  render() {
    return <Flicking  circular={true}>
      <div style={{ width: "120px" }}>1</div>
      <div style={{ width: "20%" }}>2</div>
      <div style={{ width: "500px" }}>3</div>
      <div style={{ width: "300px" }}>4</div>
      <div style={{ width: "100%" }}>5</div>
    </Flicking>;
  }
}