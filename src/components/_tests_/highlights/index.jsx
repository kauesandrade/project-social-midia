import { Component } from "react";
import Flicking from "@egjs/react-flicking";

import Highlight from "../highlight";

export default class DemoComponent extends Component {
  render() {
    return <Flicking circular={true}>
      {/* <div><Highlight/></div> */}
      <div >2</div>
      <div >3</div>
      <div >4</div>
      <div >5</div>
    </Flicking>;
  }
}