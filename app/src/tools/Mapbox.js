import appendScript from "./appendScript"

const config = {
  mapboxScriptUrl: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.35.1/mapbox-gl.js",
  mapboxAccessToken: "pk.eyJ1IjoibWljaGFsc2luZGVsYXIwMyIsImEiOiJjaXh2NGcxeWIwMDV2MnFvMXEzbXk2eDJwIn0.0RkllyKnfueuJ7EbJL_xXQ", // eslint-disable-line
  mapboxContainerId: "MapboxContainer",
  mapboxHeatStyle: "mapbox://styles/michalsindelar03/cj23jyff3007b2skh8w4yrtun",
  mapboxTrafficStyle: "mapbox://styles/michalsindelar03/cj2l4y6wo002s2srs58strpa0",
  mapboxCenter: [16.37, 49.14],
  mamboxZoom: 4,
}

export const init = () => {
  const { mapboxAccessToken, mapboxContainerId, mapboxCenter, mapboxScriptUrl, mamboxZoom } = config

  return new Promise((resolve, reject) => {
    appendScript(mapboxScriptUrl, () => Boolean(window.mapboxgl)).then(
      () => {
        // Check for window
        if (!window || !window.mapboxgl) {
          reject()
        }

        window.mapboxgl.accessToken = mapboxAccessToken

        /* eslint-disable */
        const map = new window.mapboxgl.Map({
          container: mapboxContainerId, // container id
          center: mapboxCenter,
          zoom: mamboxZoom,
        })
        /* eslint-enable */
      },
      err => {
        reject(err)
      },
    )
  })
}
