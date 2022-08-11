import "../style/SideBox.css";

export default function SideBox({ rend, setRend }) {
  let stones = JSON.parse(localStorage.getItem("stones"));
  const deleteStone = (idx) => {
    stones.splice(idx, 1);
    localStorage.setItem("stones", JSON.stringify(stones));
    setRend(!rend);
  };
  const getStone = () => {};
  return (
    <div className="SideBox">
      {stones !== null
        ? stones.map((ele, idx) => {
            console.log(ele);
            return (
              <div className="sideStones" key={idx}>
                <div>
                  {ele.result[0]}&nbsp;{ele.result[1]}&nbsp;{ele.result[2]}돌
                </div>
                <button onClick={getStone}>꺼내기</button>
                <button onClick={() => deleteStone(idx)}>지우기</button>
              </div>
            );
          })
        : null}
    </div>
  );
}
