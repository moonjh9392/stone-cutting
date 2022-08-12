import "../style/BottomBox.css";
export default function BottomBox({ viewStone }) {
  const getStone = viewStone === {} ? false : viewStone.stone;
  return (
    <div className="BottomBox">
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
