import { useState } from "react";
import "./App.css";
import InputBase from "./components/InputBase";
import Icon from "./images/lupa.svg";
import Dropdown from "./components/Dropdown";
function App() {
  const [valueInput, setValueInput] = useState("Hint");
  const [valueDropdown, setDropdown] = useState("Hint");
  return (
    <div className="App">
      <div className="content">
        <InputBase
          Icon={Icon}
          width={220}
          onClick={() => console.log("onClick!")}
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          label="Label"
          name="Search"
          textError="Caption error"
          hasError={false}
          message="Caption"
          placeholder="Placeholder"
        />
        <InputBase
          Icon={Icon}
          width={220}
          onClick={() => console.log("onClick!")}
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          label="Label"
          name="Search"
          textError="Caption error"
          hasError={true}
          message="Caption"
          placeholder="Placeholder"
        />
        <Dropdown
          Icon={<img src={Icon} alt="Icone" />}
          width={220}
          onClick={() => console.log("onClick!")}
          onChange={(e) => setDropdown(e.target.value)}
          value={valueDropdown}
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
