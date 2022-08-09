import "../style/Engraving.css";
import mokoko from "../images/mokoko.jpg";
import { useState } from "react";

export default function Engraving({ className, Firstele, Firstidx, stone, setStone, percentage, setPercentage }) {
  const [cnt, setCnt] = useState(0);
  //const copiedStone = stone.slice()
  const copiedStone = JSON.parse(JSON.stringify(stone));
  const handleBtnOnclik = (index) => {
    if (cnt < 10) {
      //10칸 초과면 버튼 작동 안함
      //index = 0,1,2
      let random = Math.floor(Math.random() * 100); //확률 소숫점 내림

      //랜덤으로 나온 숫자보다 percentage(초기 75%) 가 큰 경우 : 성공 / 아닌경우 그대로 fail
      const isSuccess = percentage > random;

      //성공이면
      if (isSuccess) {
        if (percentage > 25) {
          //확률이 25% 초과일 경우 - 10%
          setPercentage(percentage - 10);
        }
      } else {
        //실패이면
        if (percentage < 75) {
          //확률이 75%미만 일경우 +10%
          setPercentage(percentage + 10);
        }
      }
      copiedStone[index][cnt] = Object.assign({}, { result: isSuccess ? "success" : "fail", checked: isSuccess });
      setStone(copiedStone);
      setCnt(cnt + 1);
    }
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
                <div key={idx}>
                  <div
                    className={
                      "Engraving__action__box__square " +
                      (ele.result === "success" && Firstidx === 2 ? "success_red" : ele.result)
                      // 클래스 추가로 버튼 클릭시 마름모의 색을 바꿈
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="Engraving__action__result"></div>
        </div>
        <div
          className="Engraving__btn"
          onClick={() => {
            handleBtnOnclik(Firstidx);
          }}
        >
          <img src={mokoko} alt="mokoko" />
        </div>
      </div>
    </>
  );
}
