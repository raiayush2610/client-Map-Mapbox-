import React from 'react'
import { Box } from '@mui/material'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
function AddLocation() {
    const [lng, setLng] = useState(76.8497778);
    const [lat, setLat] = useState(23.0755086);
    const [zoom, setZoom] = useState(9);
  return (
    <Box
    sx={{
        height:400,
        position:'relative'
    }}
    >
        <ReactMapGL
        mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
        initialViewState={{
          longitude: lng,
          latitude:lat,
          zoom:zoom 
        }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        >
        <Marker
        
        >

        </Marker>

        </ReactMapGL>


    </Box>
  )
}

export default AddLocation
