import Place from '@/pages/place/[slug]'
import Router, { useRouter } from 'next/router'
import { title } from 'process'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

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
  const router = useRouter()
  
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

      {places?.map(({ id, name,slug, location}) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/place/${ slug }`)
              }
            }}
          />
        )
        

      })}
    </MapContainer>
)

}

export default Map