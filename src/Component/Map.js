import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './myMap.css'
// mapboxgl.accessToken = 'pk.eyJ1Ijoic3ViaGFtcHJlZXQiLCJhIjoiY2toY2IwejF1MDdodzJxbWRuZHAweDV6aiJ9.Ys8MP5kVTk5P9V2TDvnuDg';
mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hheXVzaHJhdmkiLCJhIjoiY2xycTZwMjJpMDAwNDJwbXZhZ3AxZWtkcCJ9.WsNDmiK-3A4YAcCUC9r_RA';

function Map() {
  const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(76.8497778);
const [lat, setLat] = useState(23.0755086);
const [zoom, setZoom] = useState(9);
const geojson = {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'properties': {
  'message': 'Foo',
  'iconSize': [60, 60]
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-66.324462, -16.024695]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'message': 'Bar',
  'iconSize': [50, 50]
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-61.21582, -15.971891]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'message': 'Baz',
  'iconSize': [40, 40]
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-63.292236, -18.281518]
  }
  }
  ]
  };
useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng, lat],
  zoom: zoom
  });
 
  
 


  });
  console.log(map);
  
  return (
    <div>
    
<div ref={mapContainer} className="map-container" />


    </div>
  )
}

export default Map
