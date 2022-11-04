import MapPoint from "./MapPoint";
import { Map as Mapa, Overlay } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

const MAPTILER_ACCESS_TOKEN = 'HZ3y7zy6K3OyLECvP79F'
const MAP_ID = 'streets-v2-dark'

const maptilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, MAP_ID)

interface MapPointProps {
  _id: number;
  lat: number;
  long: number;
}


export default function Map() {
  const [loading, setLoading] = useState(true)
  const [points, setPoints] = useState<MapPointProps[]>([] as MapPointProps[])

  useEffect(() => {
    api.get('/api/building/fetch').then(response => {
      setPoints(response.data.data.buildings)
      setLoading(false)
    })
  }, [])


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
        {!loading ?
          points.map(point => (
            <Overlay
              key={String(point._id)}
              anchor={[point.lat, point.long]}
              offset={[0, 0]}
            >
              <MapPoint id={point._id} />
            </Overlay>
          ))
          : <div>loading</div>}
        )
      </Mapa>
    </div>
  );
}
