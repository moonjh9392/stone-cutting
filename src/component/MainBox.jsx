import { useEffect, useState } from "react";
import "../style/MainBox.css";
import Engraving from "./Engraving";
import Modal from "./Modal";

export default function MainBox({ stone, setStone, clear }) {
  const clearArray = [0, 0, 0];
  const [cnt, setCnt] = useState(clearArray);
  const [result, setResult] = useState(clearArray);
  const [modalOpen, setModalOpen] = useState(false);
  let sumCnt = 0;

  //성공확률 퍼센테이지 초기값 75%
  const [percentage, setPercentage] = useState(75);

  //새 돌 꺼내기 - 초기화 버튼
  const clearBtnOnClick = () => {
    setStone(clear); //스톤 초기화
    setPercentage(75); //확률 초기화
    setCnt(clearArray); //컴포넌트 별 카운트 초기화
    setResult(clearArray); //결과 초기화
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    cnt.map((ele) => (sumCnt += ele));
    if (sumCnt === 30) {
      sumCnt = 0;
      openModal();
    }
  }, [cnt]);
  return (
    <div className="MainBox">
      {modalOpen ? (
        <Modal
          open={modalOpen}
          close={closeModal}
          header="짜잔~!"
          result={result}
          stone={stone}
          setStone={setStone}
          clear={clear}
        />
      ) : null}
      <div>
        <button className="clearBtn" onClick={clearBtnOnClick}>
          새 돌 꺼내기
        </button>
        {/* <button>저장</button> */}
      </div>

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
            result={result}
            setResult={setResult}
          />
        );
      })}
    </div>
  );
}
