import MainBox from "./component/MainBox";
import SideBox from "./component/SideBox";
import "./App.css";
// import BottomBox from "./component/BottomBox";
import { useEffect, useState } from "react";

function App() {
  //3x10의 2차원 배열 선언 [[{},{},{}...],[{},{},{}...],[{},{},{}...]]
  const clear = Array.from(Array(3), () => new Array(10).fill({ result: "", checked: false }));
  const clearArray = [0, 0, 0];
  const [stone, setStone] = useState(clear);
  const [cnt, setCnt] = useState(clearArray);
  const [result, setResult] = useState(clearArray);
  const [percentage, setPercentage] = useState(75);
  const [rend, setRend] = useState(false);
  // const [viewStone, setViewStone] = useState({});
  const [stoneKey, setStoneKey] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const getStone = (ele) => {
    //꺼내기
    // setViewStone({ key, stone });
    setStone(ele.stone);
    setStoneKey(ele.key);
    setPercentage(ele.percentage);
    setCnt(ele.cnt);
    setResult(ele.result);
    calSumCnt(ele.cnt);
  };

  useEffect(() => {
    if (calSumCnt(cnt) !== 0) {
      saveStone();
      setRend(!rend);
    }
  }, [cnt]);

  const calSumCnt = (cnt) => {
    let sumCnt = 0;
    cnt.map((ele) => (sumCnt += ele));
    if (sumCnt === 30) openModal();
    return sumCnt;
  };

  const saveStone = () => {
    //localStorage에 세공한 돌의 결과 저장
    let stones = JSON.parse(localStorage.getItem("stones"));
    let objStone = {
      result,
      stone,
      cnt,
      percentage,
    };
    let maxKey = 0;
    if (stones === null || stones.length === 0) {
      stones = [];
      objStone.key = maxKey;
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
    setStoneKey(stoneKey !== undefined ? stoneKey : maxKey);
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
          // viewStone={viewStone}
          // setViewStone={setViewStone}
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
          openModal={openModal}
          closeModal={closeModal}
          modalOpen={modalOpen}
        />
      </div>
      {/* <div className="AppBottom">
        <BottomBox viewStone={viewStone} />
      </div> */}
    </div>
  );
}

export default App;
