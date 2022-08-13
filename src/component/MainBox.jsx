import { useEffect, useState } from "react";
import "../style/MainBox.css";
import Engraving from "./Engraving";
import Modal from "./Modal";

export default function MainBox({
  stone,
  setStone,
  cnt,
  setCnt,
  result,
  setResult,
  percentage,
  setPercentage,
  stoneKey,
  setStoneKey,
  newStone,
  closeModal,
  modalOpen,
}) {
  return (
    <div className="MainBox">
      {modalOpen ? <Modal open={modalOpen} close={closeModal} header="짜잔~!" result={result} /> : null}
      <div>
        <button className="clearBtn" onClick={newStone}>
          새 돌 꺼내기
        </button>
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
