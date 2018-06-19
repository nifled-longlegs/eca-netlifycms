import React from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"


const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 29.096, lng: -110.9405 }}
    defaultOptions={{ styles: props.customStyle }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 29.096, lng: -110.9405 }} />}
  </GoogleMap>
))

export default Map;
