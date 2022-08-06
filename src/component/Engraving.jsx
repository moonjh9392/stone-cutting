import "../style/Engraving.css";
import mococo from "../images/mococo.jpg";

export default function engraving(params) {
  let i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div>성공 확률</div>
      <div className="Engraving">
        <div className="Engraving__img"></div>
        <div className="Engraving__action">
          <div className="Engraving__action__name"></div>
          <div className="Engraving__action__box">
            {i.map((ele) => {
              return (
                <div>
                  <div className="Engraving__action__box__square" key={ele} />
                </div>
              );
            })}
          </div>
          <div className="Engraving__action__result"></div>
        </div>
        <div className="Engraving__btn">
          <img src={mococo} alt="mococo" />
        </div>
      </div>
    </>
  );
}
