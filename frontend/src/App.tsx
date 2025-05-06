import AppRouter from "./components/router/AppRouter";
import { HelloProvider } from "./lib/provider/HelloProvider";

function App() {
  return (
    <HelloProvider>
      <AppRouter />
    </HelloProvider>
  );
}

export default App;
