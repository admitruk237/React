import "./App.css";
import PetInfo from "./components/petInfo";

function App() {
  return (
    <div className="App">
      <PetInfo
        animal="spider"
        age="10"
        hasPet
      />
      <PetInfo
        animal="dog"
        age="5"
        hasPet={false}
      />
    </div>
  );
}

export default App;
