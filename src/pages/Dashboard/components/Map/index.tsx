import MapPoint from "./MapPoint";
import { Map as Mapa, Marker } from "pigeon-maps"

const MAPTILER_ACCESS_TOKEN = 'HZ3y7zy6K3OyLECvP79F'
const MAP_ID = '42ef8c6c-ee73-4de7-a73f-f5b7fdcaa831'

interface MapTilerProps {
  x: number;
  y: number;
  z: number;
  dpr: number | undefined;
}
function mapTiler({ x, y, z, dpr }: any): string {
  return `https://api.maptiler.com/maps/42ef8c6c-ee73-4de7-a73f-f5b7fdcaa831/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=cNjsznbnTUWR75F9V8RY`
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
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <Mapa
        provider={mapTiler}
        dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
        height={300}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      />
    </div>
  );
}
