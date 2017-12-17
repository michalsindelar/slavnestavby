import appendScript from "./appendScript"

import { setActiveStructure } from "../services/actions"

export const CONFIG = {
  mapboxScriptUrl: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.1/mapbox-gl.js",
  mapboxAccessToken: "pk.eyJ1IjoibWljaGFsc2luZGVsYXIwMyIsImEiOiJjaXh2NGcxeWIwMDV2MnFvMXEzbXk2eDJwIn0.0RkllyKnfueuJ7EbJL_xXQ", // eslint-disable-line
  mapboxContainerId: "MapboxContainer",
  mapboxStyle: "mapbox://styles/michalsindelar03/cjapu6chsgqdq2rnx7ri2f1wa",
  mapboxCenter: [16.37, 49.14],
  mamboxZoom: 7,
}

class Mapbox {
  id = ""
  mapboxScriptUrl = "https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.1/mapbox-gl.js"
  mapboxAccessToken = ""
  mapboxContainerId = ""
  mapboxStyle = ""
  mapboxCenter = []
  mamboxZoom = 7

  constructor(config) {
    // Fallback to default config
    const _config = Object.assign({}, CONFIG, config)

    this.id = _config.id
    this.mapboxScriptUrl = _config.mapboxScriptUrl
    this.mapboxAccessToken = _config.mapboxAccessToken
    this.mapboxContainerId = _config.mapboxContainerId
    this.mapboxStyle = _config.mapboxStyle
    this.mapboxCenter = _config.mapboxCenter
    this.mamboxZoom = _config.mamboxZoom

    window.mapboxgl.accessToken = this.mapboxAccessToken
    window.map = new window.mapboxgl.Map({
      container: this.mapboxContainerId, // container id
      center: this.mapboxCenter,
      zoom: this.mamboxZoom,
      style: this.mapboxStyle,
    })
  }

  interposeLabels(labels) {
    labels.forEach((marker, i) => {
      // create a HTML element for each feature
      const el = document.createElement("div")
      el.className = "marker"
      el.addEventListener("click", () => {
        window.reduxStore.dispatch(setActiveStructure(i))
      })

      // make a marker for each feature and add to the map
      new window.mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(window[this.id])
    })
  }

  static loadScript() {
    return appendScript(CONFIG.mapboxScriptUrl)
  }
}

export default Mapbox
