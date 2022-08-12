import MainBox from "./component/MainBox";
import SideBox from "./component/SideBox";
import "./App.css";
import BottomBox from "./component/BottomBox";
import { useState } from "react";

function App() {
  //3x10의 2차원 배열 선언 [[{},{},{}...],[{},{},{}...],[{},{},{}...]]
  const clear = Array.from(Array(3), () => new Array(10).fill({ result: "", checked: false }));
  const [stone, setStone] = useState(clear);

  const [rend, setRend] = useState(false);
  const [viewStone, setViewStone] = useState({});
  return (
    <div className="App">
      <div className="AppTop">
        <SideBox rend={rend} setRend={setRend} viewStone={viewStone} setViewStone={setViewStone} />
        <MainBox stone={stone} setStone={setStone} clear={clear} />
      </div>
      <div className="AppBottom">
        <BottomBox viewStone={viewStone} />
      </div>
    </div>
  );
}

export default App;
