import "../style/Engraving.css";
import mokoko from "../images/mokoko.jpg";

export default function Engraving({
  className,
  Firstele,
  Firstidx,
  stone,
  setStone,
  percentage,
  setPercentage,
  cnt,
  setCnt,
  result,
  setResult,
  saveStone,
}) {
  // const [cnt, setCnt] = useState(0); //채워지는 칸을 위해 Engraving컴포넌트별 상태 만듬
  const copiedStone = [...stone]; //stone을 직접 수정하면 안되기 때문에 복사본 만듬
  const copiedCnt = [...cnt]; //cnt를 직접 수정하면 안되기 때문에 복사본 만듬
  const copiedResult = [...result]; //cnt를 직접 수정하면 안되기 때문에 복사본 만듬
  const handleBtnOnclik = (index) => {
    let stones = JSON.parse(localStorage.getItem("stones"));
    if (stones !== null && stones.length !== 0 && stones.length >= 100) {
      alert("저장되어 있는 돌이 100개가 넘습니다. 사용하지 않는 돌은 지워주세요");
    } else {
      //index = 0,1,2
      if (copiedCnt[index] < 10) {
        //10칸 초과면 버튼 작동 안함

        let random = Math.floor(Math.random() * 100); //확률 소숫점 내림

        //랜덤으로 나온 숫자보다 percentage(초기 75%) 가 큰 경우 : 성공 / 아닌경우 그대로 fail
        const isSuccess = percentage > random;

        //성공이면
        if (isSuccess) {
          if (percentage > 25) {
            //확률이 25% 초과일 경우 - 10%
            setPercentage(percentage - 10);
          }
          copiedResult[index] += 1;
          setResult(copiedResult);
        } else {
          //실패이면
          if (percentage < 75) {
            //확률이 75%미만 일경우 +10%
            setPercentage(percentage + 10);
          }
        }
        copiedStone[index][copiedCnt[index]] = Object.assign(
          {},
          { result: isSuccess ? "success" : "fail", checked: isSuccess }
        );
        //stone[index][copiedCnt[index]]의 객체{}를  { result: "success", checked: true }로 변경
        setStone(copiedStone); //stone 상태 업데이트
        copiedCnt[index] += 1;
        setCnt(copiedCnt); //한칸 채워질때마다 다음칸으로 이동
      }
    }
  };
  return (
    <>
      <div className="Engraving__percentage">
        {Firstidx === 0 ? "성공확률 " : Firstidx === 2 ? "균열확률 " : null}
        {Firstidx !== 1 ? percentage + "%" : null}
      </div>
      <div className={"Engraving " + className}>
        {/* className 으로 box-shadow 변경 */}
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
        {/* 모코코 망치버튼 */}
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
