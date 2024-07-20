import "./App.css";
import InputBase from "./components/InputBase";

function App() {
  return (
    <div className="App">
      <div className="content">
        <InputBase
          Icon={<>A</>}
          value="ta"
          label="input teste label"
          name="busca"
          message="faltou o input teste"
          hasError
          placeholder="placeholder teste"
        />
      </div>
    </div>
  );
}

export default App;
