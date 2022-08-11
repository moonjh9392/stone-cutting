import "../style/SideBox.css";

export default function SideBox({ rend, setRend, viewStone, setViewStone }) {
  let stones = JSON.parse(localStorage.getItem("stones"));
  const deleteStone = (idx) => {
    stones.splice(idx, 1);
    localStorage.setItem("stones", JSON.stringify(stones));
    if (viewStone.idx === idx) {
      setViewStone({});
    } else {
      setRend(!rend);
    }
  };
  const getStone = (idx, stone) => {
    setViewStone({ idx, stone });
  };
  return (
    <div className="SideBox">
      {stones !== null
        ? stones.map((ele, idx) => {
            return (
              <div className="sideStones" key={idx}>
                <div>
                  {ele.result[0]}&nbsp;{ele.result[1]}&nbsp;{ele.result[2]}돌
                </div>
                <button onClick={() => getStone(idx, ele.stone)}>꺼내기</button>
                <button onClick={() => deleteStone(idx)}>지우기</button>
              </div>
            );
          })
        : null}
    </div>
  );
}
