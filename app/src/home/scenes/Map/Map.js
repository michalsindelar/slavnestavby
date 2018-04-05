import React, { Component } from "react"
import { CONFIG } from "../../tools/Mapbox"

class Map extends Component {
    render() {
        const { view } = this.props;

        let displayMap = view == "map" ? "block" : "none";

        return (
            <div style={{display: displayMap}} id={CONFIG.googleMapsContainerId} />
        )
    }
}

export default Map
