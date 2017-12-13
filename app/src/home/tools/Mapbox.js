import * as R from "ramda"

import appendScript from "./appendScript"

export const CONFIG = {
  mapboxScriptUrl: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.1/mapbox-gl.js  ",
  mapboxAccessToken: "pk.eyJ1IjoibWljaGFsc2luZGVsYXIwMyIsImEiOiJjaXh2NGcxeWIwMDV2MnFvMXEzbXk2eDJwIn0.0RkllyKnfueuJ7EbJL_xXQ", // eslint-disable-line
  mapboxContainerId: "MapboxContainer",
  mapboxStyle: "mapbox://styles/michalsindelar03/cjapu6chsgqdq2rnx7ri2f1wa",
  mapboxCenter: [16.37, 49.14],
  mamboxZoom: 7,
}

export const init = () => {
  const {
    mapboxAccessToken,
    mapboxContainerId,
    mapboxCenter,
    mapboxScriptUrl,
    mapboxStyle,
    mamboxZoom,
  } = CONFIG

  return new Promise((resolve, reject) => {
    appendScript(mapboxScriptUrl, () => Boolean(window.mapboxgl)).then(
      () => {
        // Check for window
        if (!window || !window.mapboxgl) {
          reject()
        }

        window.mapboxgl.accessToken = mapboxAccessToken

        /* eslint-disable */
        window.map = new window.mapboxgl.Map({
          container: mapboxContainerId, // container id
          center: mapboxCenter,
          zoom: mamboxZoom,
          style: mapboxStyle
        })
        /* eslint-enable */
        resolve()
      },
      err => {
        reject(err)
      },
    )
  })
}

export const interposeLabels = labels => {
  labels.forEach(marker => {
    // create a HTML element for each feature
    const el = document.createElement("div")
    el.className = "marker"

    // make a marker for each feature and add to the map
    new window.mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new window.mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>${marker.properties.title}</h3><p>${marker.properties.description}</p>`),
      )
      .addTo(window.map)
  })
}
