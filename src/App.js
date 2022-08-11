import MainBox from "./component/MainBox";
import SideBox from "./component/SideBox";
import "./App.css";
import BottomBox from "./component/BottomBox";
import { useState } from "react";

function App() {
  const [rend, setRend] = useState(false);
  return (
    <div className="App">
      <div className="AppTop">
        <SideBox rend={rend} setRend={setRend} />
        <MainBox rend={rend} setRend={setRend} />
      </div>
      <div className="AppBottom">
        <BottomBox />
      </div>
    </div>
  );
}

export default App;
