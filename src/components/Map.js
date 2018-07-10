import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) => 
<GoogleMap
  defaultZoom={10}
  googleMapURL: ''
  loadingElement={<div>Loading Map...</div>}
  defaultCenter={{ lat: 34.1, lng: -118.4}}
>
  {props.isMarkerShown && <Marker position={{ lat: 34.194190, lng: -118.519022 }} />}
</GoogleMap>
))

export default Map;