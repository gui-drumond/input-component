import { useState } from "react";
import "./App.css";
import InputBase from "./components/InputBase";
import Icon from "./lupa.svg";
function App() {
  const [value, setValue] = useState("aaaa");
  return (
    <div className="App">
      <div className="content">
        <InputBase
          Icon={Icon}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          label="Label"
          name="Search"
          textError="Caption error"
          hasError={false}
          message="Caption"
          placeholder="Placeholder"
        />
      </div>
    </div>
  );
}

export default App;
