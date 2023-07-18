import { title } from 'process'
import { MapContainer, TileLayer, Marker, Popup,  } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places}: MapProps) => {
  
  return (

    <MapContainer
    center={[0,0]}
    style = {{height: '100%', width: '100%'}}
    zoom={3}
    >

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, location}) => {
        const { latitude, longitude } = location

        return (
          <Marker 
          key={`place-${id}`}
          position={[latitude, longitude]}
          title={name}
          />
        )
        

      })}
    </MapContainer>
)

}

export default Map