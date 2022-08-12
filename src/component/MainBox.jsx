import { useEffect, useState } from "react";
import "../style/MainBox.css";
import Engraving from "./Engraving";
import Modal from "./Modal";

export default function MainBox({
  stone,
  setStone,
  clear,
  cnt,
  setCnt,
  result,
  setResult,
  percentage,
  setPercentage,
  clearArray,
  stoneKey,
  setStoneKey,
  newStone,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  let sumCnt = 0;

  //성공확률 퍼센테이지 초기값 75%

  const saveStone = () => {
    //localStorage에 세공한 돌의 결과 저장
    let stones = JSON.parse(localStorage.getItem("stones"));
    let objStone = {
      result,
      stone,
      cnt,
      percentage,
    };
    if (stones === null || stones.length === 0) {
      stones = [];
      objStone.key = 0;
      stones.push(objStone);
    } else {
      let check = true; //키값이 같은것이 있는지 체크
      let copiedStones = stones.map((ele) => {
        //있으면 덮음
        if (ele.key === stoneKey) {
          objStone.key = stoneKey;
          check = false;
          return objStone;
        } else {
          return ele;
        }
      });
      if (check) {
        //없으면 추가
        let maxKey = 0;
        if (Array.isArray(stones)) {
          maxKey = stones[stones.length - 1].key + 1;
        }
        objStone.key = maxKey;
        stones.push(objStone);
      } else {
        stones = copiedStones;
      }
    }
    localStorage.setItem("stones", JSON.stringify(stones));
    newStone();
    closeModal();
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
        <Modal open={modalOpen} close={closeModal} header="짜잔~!" result={result} saveStone={saveStone} />
      ) : null}
      <div>
        <button className="clearBtn" onClick={newStone}>
          새 돌 꺼내기
        </button>
        <button onClick={saveStone}>저장</button>
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
