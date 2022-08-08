import "../style/Engraving.css";
import mokoko from "../images/mokoko.jpg";

export default function Engraving({ className, Firstele, Firstidx, stone, setStone, percentage, setPercentage }) {
  const handleBtnOnclik = (index) => {
    let random = Math.floor(Math.random() * 100);
    let result = false;
    if (percentage > random) {
      result = true;
    }
    if (result) {
      if (percentage > 25) {
        setPercentage(percentage - 10);
      }
    } else {
      if (percentage < 75) {
        setPercentage(percentage + 10);
      }
    }
    console.log(result);
    for (let i of stone[index]) {
      if (!i.checked) {
        i["result"] = result;
        i["checked"] = true;
        break;
      }
    }
    console.log(stone[index]);
  };
  return (
    <>
      <div>
        {Firstidx === 0 ? "성공확률 " : Firstidx === 2 ? "균열확률 " : ""}
        {Firstidx !== 1 ? percentage + "%" : ""}
      </div>
      <div className={"Engraving " + className}>
        <div className="Engraving__img"></div>
        <div className="Engraving__action">
          <div className="Engraving__action__name"></div>
          <div className="Engraving__action__box">
            {Firstele.map((ele, idx) => {
              return (
                <div>
                  <div className={"Engraving__action__box__square__" + Firstidx + "_" + idx} key={idx} />
                </div>
              );
            })}
          </div>
          <div className="Engraving__action__result"></div>
        </div>
        <div className="Engraving__btn" onClick={() => handleBtnOnclik(Firstidx)}>
          <img src={mokoko} alt="mokoko" />
        </div>
      </div>
    </>
  );
}
