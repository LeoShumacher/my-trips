import { MapContainer, TileLayer, Marker, Popup,  } from 'react-leaflet'

const position = [ 0 , 0 ]
const Map = () => {
  
        
  return (

    <MapContainer center={[0,0]}
    style = {{height: '100%', width: '100%'}}
     zoom={3}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0,0]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
)

}

export default Map