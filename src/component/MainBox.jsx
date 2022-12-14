import "../style/MainBox.css";
import Engraving from "./Engraving";
import Modal from "./Modal";
import suc from "../audio/suc.m4a";
import fail from "../audio/fail.m4a";
import { useRef } from "react";

export default function MainBox({
  stone,
  setStone,
  cnt,
  setCnt,
  result,
  setResult,
  percentage,
  setPercentage,
  newStone,
  closeModal,
  modalOpen,
}) {
  const audioSuc = useRef();
  const audioFail = useRef();
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
            audioSuc={audioSuc}
            audioFail={audioFail}
          />
        );
      })}
      <audio id="audio_suc" ref={audioSuc} src={suc} />
      <audio id="audio_fail" ref={audioFail} src={fail} />
    </div>
  );
}
