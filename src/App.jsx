import CrewList from "./components/CrewList";
import { CrewProvider } from "./contexts/CrewContext";

function App() {
  return (
    <CrewProvider>
      <div className="App">
        <h1>Black Skies</h1>
        <CrewList />
      </div>
    </CrewProvider>
  );
}

export default App;
