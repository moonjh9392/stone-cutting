import "../style/SideBox.css";

export default function SideBox({ rend, setRend, viewStone, setViewStone, getStone, newStone, stoneKey }) {
  let stones = JSON.parse(localStorage.getItem("stones"));
  const deleteStone = (idx, key) => {
    stones.splice(idx, 1);
    localStorage.setItem("stones", JSON.stringify(stones));
    if (stoneKey === key) {
      newStone();
    } else {
      setRend(!rend);
    }
  };

  const clearStones = () => {
    localStorage.removeItem("stones");
    newStone();
  };

  return (
    <div className="SideBox">
      <button onClick={clearStones}>초기화</button>
      <div>
        {stones !== null
          ? stones.map((ele, idx) => {
              return (
                <div className="sideStones" key={idx}>
                  <span>[{idx + 1}]</span>
                  <span className="blue">{ele.result[0]}</span>&nbsp;
                  <span className="blue">{ele.result[1]}</span>&nbsp;
                  <span className="red">{ele.result[2]}</span>&nbsp;돌
                  <span class="material-icons sideBtn" onClick={() => getStone(ele)}>
                    trending_flat
                  </span>
                  <span class="material-icons sideBtn" onClick={() => deleteStone(idx, ele.key)}>
                    close
                  </span>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
