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
          width={220}
          onClick={() => console.log("onClick!")}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          label="Label"
          name="Search"
          textError="Caption error"
          hasError={false}
          message="Caption"
          placeholder="Placeholder"
          type="button"
        />
      </div>
    </div>
  );
}

export default App;
