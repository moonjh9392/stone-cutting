import { useState } from "react";
import "../style/MainBox.css";
import Engraving from "./Engraving";

export default function MainBox(params) {
  //3x10의 2차원 배열 선언 [[{},{},{}...],[{},{},{}...],[{},{},{}...]]
  const clear = Array.from(Array(3), () => new Array(10).fill({ result: "", checked: false }));
  const [stone, setStone] = useState(clear);
  const [cnt, setCnt] = useState([0, 0, 0]);

  //성공확률 퍼센테이지 초기값 75%
  const [percentage, setPercentage] = useState(75);

  //새 돌 꺼내기 - 초기화 버튼
  const clearBtnOnClick = () => {
    setStone(clear); //스톤 초기화
    setPercentage(75); //확률 초기화
    setCnt([0, 0, 0]); //컴포넌트 별 카운트 초기화
  };

  return (
    <div className="MainBox">
      <button className="clearBtn" onClick={clearBtnOnClick}>
        새 돌 꺼내기
      </button>
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
            cnt={cnt}
            setCnt={setCnt}
          />
        );
      })}
    </div>
  );
}
