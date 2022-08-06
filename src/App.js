import MainBox from "./component/MainBox";
import SideBox from "./component/SideBox";
import "./App.css";
import BottomBox from "./component/BottomBox";

function App() {
  return (
    <div className="App">
      <div className="AppTop">
        <SideBox />
        <MainBox />
      </div>
      <div className="AppBottom">
        <BottomBox />
      </div>
    </div>
  );
}

export default App;
