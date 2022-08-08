import "../style/Engraving.css";
import mokoko from "../images/mokoko.jpg";

export default function Engraving({ className, Firstele, Firstidx, stone, setStone, percentage, setPercentage }) {
  const handleBtnOnclik = (index) => {
    //index = 0,1,2
    if (index === 0) {
      let random = Math.floor(Math.random() * 100); //확률 소숫점 내림
      let result = "fail";
      //랜덤으로 나온 숫자보다 percentage(초기 75%) 가 큰 경우 : 성공 / 아닌경우 그대로 fail
      if (percentage > random) {
        result = "success";
      }
      //성공이면
      if (result === "success") {
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
      console.log(result);
      setStone(() => {
        for (let i of stone[index]) {
          //i 는 {result: '',checked: false}
          console.log(i);
          if (!i.checked) {
            //false 일때만 = 클릭 안한 경우만
            Object.assign(i, { result: result, checked: true });
            console.log("1");
            break;
          }
        }
        console.log(stone);
        return stone;
      });
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
                <div>
                  <div className={"Engraving__action__box__square " + ele.result} key={idx} />
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
