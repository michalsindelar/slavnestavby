import React, { Component } from "react"
import Map from "../Map/Map"
import List from "../List/List"
import Scrollbar from '../../consts/Scrollbar';

class ShowScreen extends Component {

  constructor() {
      super();
      let self = this;
      setInterval(function() {
          if (window.mapPointsChanged) {
                window.mapPointsChanged = false;
                self.forceUpdate();
          }
      }, 250);
  }

  render() {
    const { view } = this.props;

    return (
      <div id="showScreen" >
        <Scrollbar topOffset={70}>
          <Map view={view} />
          <List view={view} />
        </Scrollbar>
      </div>
    )
  }
}

export default ShowScreen
