import "../style/BottomBox.css";
export default function BottomBox({ viewStone }) {
  const getStone = viewStone === {} ? false : viewStone.stone;
  return (
    <div className="BottomBox">
      <div>순서대로 안지우면 밑에 안지워짐 새로고침 해야됨(수정중)</div>
      {getStone
        ? viewStone.stone.map((ele, idx) => {
            return (
              <div className="line" key={idx}>
                {ele.map((ele2, idx2) => {
                  return (
                    <div
                      className={
                        "square " +
                        (idx === 2
                          ? ele2.result === "success"
                            ? "red"
                            : "black"
                          : ele2.result === "success"
                          ? "blue"
                          : "black")
                      }
                      key={idx2}
                    />
                  );
                })}
              </div>
            );
          })
        : null}
    </div>
  );
}
