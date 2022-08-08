import "../style/MainBox.css";
import Engraving from "./Engraving";

export default function MainBox(params) {
  let i = [0, 1, 2];
  return (
    <div className="MainBox">
      {i.map((ele) => {
        return <Engraving className={ele === 2 ? "decrease" : "increase"} key={ele} index={ele} />;
      })}
    </div>
  );
}
