import { AuthProvider } from "./contexts/auth";
import { BuildingProvider } from "./contexts/building";
import Routes from "./routes";

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
