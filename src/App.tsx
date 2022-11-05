import { AuthProvider } from "./contexts/auth";
import { BuildingProvider } from "./contexts/building";
import Routes from "./routes";
import "./assets/globals.css";

function App() {

  return (
    <AuthProvider>
      <BuildingProvider>
        <Routes />
      </BuildingProvider>
    </AuthProvider>
  );
}

export default App;
