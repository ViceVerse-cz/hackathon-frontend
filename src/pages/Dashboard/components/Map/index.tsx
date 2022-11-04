import MapPoint from "./MapPoint";
import { Map as Mapa, Marker } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'

const MAPTILER_ACCESS_TOKEN = 'cNjsznbnTUWR75F9V8RY'
const MAP_ID = '42ef8c6c-ee73-4de7-a73f-f5b7fdcaa831'

const maptilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, MAP_ID)

interface MapTilerProps {
  x: number;
  y: number;
  z: number;
  dpr: number | undefined;
}


export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Mapa
        provider={maptilerProvider}
        dprs={[1, 2]} // this provider supports HiDPI tiles
        height={200}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      />
    </div>
  );
}
