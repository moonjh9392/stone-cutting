import "../style/Engraving.css";
import mokoko from "../images/mokoko.jpg";

export default function Engraving({ className, index }) {
  let i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleBtnOnclik = (index) => {
    alert(index);
  };
  return (
    <>
      <div>{index === 0 ? "성공확률" : index === 2 ? "균열확률" : ""}</div>
      <div className={"Engraving " + className}>
        <div className="Engraving__img"></div>
        <div className="Engraving__action">
          <div className="Engraving__action__name"></div>
          <div className="Engraving__action__box">
            {i.map((ele) => {
              return (
                <div>
                  <div className={"Engraving__action__box__square__" + index + "_" + ele} key={ele} />
                </div>
              );
            })}
          </div>
          <div className="Engraving__action__result"></div>
        </div>
        <div className="Engraving__btn" onClick={() => handleBtnOnclik(index)}>
          <img src={mokoko} alt="mokoko" />
        </div>
      </div>
    </>
  );
}
