import AppRouter from "./components/router/AppRouter";
import { HelloProvider } from "./lib/context/HelloContext";

function App() {
  return (
    <HelloProvider>
      <AppRouter />
    </HelloProvider>
  );
}

export default App;
