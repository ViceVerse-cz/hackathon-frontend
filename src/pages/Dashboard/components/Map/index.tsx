import MapPoint from "./MapPoint";
import { Map as Mapa, Overlay } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

const MAPTILER_ACCESS_TOKEN = 'HZ3y7zy6K3OyLECvP79F'
const MAP_ID = 'streets-v2-dark'

const maptilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, MAP_ID)

interface MapPointProps {
  id: number;
  lat: number;
  lng: number;
}


export default function Map() {
  const [loading, setLoading] = useState(true)
  const [points, setPoints] = useState<MapPointProps[]>([{ id: 1, lat: 49.2266539, lng: 17.6663328 }])

  // useEffect(() => {
  //   api.get('points').then(response => {
  //     setPoints(response.data)
  //     setLoading(false)
  //   })
  // }, [])


  const defaultProps: [number, number] = [49.2266539, 17.6663328]

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Mapa
        provider={maptilerProvider}
        dprs={[1, 2]} // this provider supports HiDPI tiles
        defaultCenter={defaultProps}
        metaWheelZoom={false}
        minZoom={9}
        maxZoom={9}
        defaultZoom={9}
      >
        {
          points.map(point => (
            <Overlay
              key={String(point.id)}
              anchor={[point.lat, point.lng]}
              offset={[0, 0]}
            >
              <MapPoint id={point.id} />
            </Overlay>
          ))
        }
        )
      </Mapa>
    </div>
  );
}
