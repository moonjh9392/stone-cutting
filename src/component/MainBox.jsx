import { useState } from "react";
import "../style/MainBox.css";
import Engraving from "./Engraving";

export default function MainBox(params) {
  const [stone, setStone] = useState(Array.from(Array(3), () => new Array(10).fill({ result: "", checked: false })));
  const [percentage, setPercentage] = useState(75);

  return (
    <div className="MainBox">
      {stone.map((ele, idx) => {
        return (
          <Engraving
            className={idx === 2 ? "decrease" : "increase"}
            key={idx}
            Firstele={ele}
            Firstidx={idx}
            stone={stone}
            setStone={setStone}
            percentage={percentage}
            setPercentage={setPercentage}
          />
        );
      })}
    </div>
  );
}
