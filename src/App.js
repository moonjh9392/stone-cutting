import MainBox from "./component/MainBox";
import SideBox from "./component/SideBox";
import "./App.css";
import BottomBox from "./component/BottomBox";
import { useState } from "react";

function App() {
  //3x10의 2차원 배열 선언 [[{},{},{}...],[{},{},{}...],[{},{},{}...]]
  const clear = Array.from(Array(3), () => new Array(10).fill({ result: "", checked: false }));
  const clearArray = [0, 0, 0];
  const [stone, setStone] = useState(clear);
  const [cnt, setCnt] = useState(clearArray);
  const [result, setResult] = useState(clearArray);
  const [percentage, setPercentage] = useState(75);
  const [rend, setRend] = useState(false);
  const [viewStone, setViewStone] = useState({});
  const [stoneKey, setStoneKey] = useState();

  const getStone = (ele) => {
    //꺼내기
    // setViewStone({ key, stone });
    setStone(ele.stone);
    setStoneKey(ele.key);
    setPercentage(ele.percentage);
    setCnt(ele.cnt);
    setResult(ele.result);
  };

  //새 돌 꺼내기 - 초기화 버튼
  const newStone = () => {
    setStone(clear); //스톤 초기화
    setStoneKey();
    setPercentage(75); //확률 초기화
    setCnt(clearArray); //컴포넌트 별 카운트 초기화
    setResult(clearArray); //결과 초기화
  };

  return (
    <div className="App">
      <div className="AppTop">
        <SideBox
          rend={rend}
          setRend={setRend}
          viewStone={viewStone}
          setViewStone={setViewStone}
          getStone={getStone}
          newStone={newStone}
          stoneKey={stoneKey}
        />
        <MainBox
          stone={stone}
          setStone={setStone}
          clear={clear}
          cnt={cnt}
          setCnt={setCnt}
          result={result}
          setResult={setResult}
          percentage={percentage}
          setPercentage={setPercentage}
          clearArray={clearArray}
          stoneKey={stoneKey}
          setStoneKey={setStoneKey}
          newStone={newStone}
        />
      </div>
      <div className="AppBottom">
        <BottomBox viewStone={viewStone} />
      </div>
    </div>
  );
}

export default App;
