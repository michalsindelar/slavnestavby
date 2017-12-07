import appendScript from "./appendScript"

export const CONFIG = {
  mapboxScriptUrl: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.35.1/mapbox-gl.js",
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
        new window.mapboxgl.Map({
          container: mapboxContainerId, // container id
          center: mapboxCenter,
          zoom: mamboxZoom,
          style: mapboxStyle
        })
        /* eslint-enable */
      },
      err => {
        reject(err)
      },
    )
  })
}
