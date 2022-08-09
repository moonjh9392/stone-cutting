import { useState } from "react";
import "../style/MainBox.css";
import Engraving from "./Engraving";

export default function MainBox(params) {
  //3x10의 2차원 배열 선언 [[{},{},{}...],[{},{},{}...],[{},{},{}...]]
  const [stone, setStone] = useState(Array.from(Array(3), () => new Array(10).fill({ result: "", checked: false })));

  //성공확률 퍼센테이지 초기값 75%
  const [percentage, setPercentage] = useState(75);
  return (
    <div className="MainBox">
      {stone.map((ele, idx) => {
        return (
          <Engraving
            className={idx === 2 ? "decrease" : "increase"} //className에 따라 box-shadow를 다르게 줌
            key={idx}
            Firstele={ele} //stone 2차원 배열의 1차 배열 [{},{},{}...]
            Firstidx={idx} //인덱스 0,1,2
            stone={stone}
            setStone={setStone}
            percentage={percentage}
            setPercentage={setPercentage}
          />
        );
      })}
    </div>
  );
}
