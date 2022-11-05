import MapPoint from "./MapPoint";
import { Map as Mapa, Overlay } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import { api } from "../../../../services/api";
import { useEffect, useState } from "react";
import { BuildingState, Floor } from "../../../../interfaces/building.interface";

const MAPTILER_ACCESS_TOKEN = 'HZ3y7zy6K3OyLECvP79F'
const MAP_ID = 'streets-v2-dark'

const maptilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, MAP_ID)

interface MapPointProps {
  _id: String;
  lat: number;
  long: number;
  floors: Floor[];
  state: BuildingState;
}


export default function Map() {
  const [loading, setLoading] = useState(true)
  const [points, setPoints] = useState<MapPointProps[]>([] as MapPointProps[])

  useEffect(() => {
    api.get('/api/building/fetch-floor').then(response => {
      setPoints(response.data.data.buildings)
      setLoading(false)
    })
  }, [])


  const defaultProps: [number, number] = [49.2266539, 17.6663328]

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Mapa
        provider={maptilerProvider}
        dprs={[1, 2]}
        defaultCenter={defaultProps}
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
              <MapPoint id={point._id} state={point.state} floor={point.floors} />
            </Overlay>
          ))
          : <div />}
      </Mapa>
    </div>
  );
}
