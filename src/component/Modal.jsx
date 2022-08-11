import "../style/Modal.css";

export default function Modal(props) {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, result, stone, rend, setRend } = props;

  const saveStone = () => {
    //localStorage에 세공한 돌의 결과 저장
    let stones = JSON.parse(localStorage.getItem("stones"));
    let objStone = {
      result: result,
      stone: stone,
    };
    console.log(stones);
    if (stones === null) {
      stones = [];
      stones.push(objStone);
    } else {
      stones.push(objStone);
    }

    localStorage.setItem("stones", JSON.stringify(stones));
    setRend(!rend);
    close();
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {result.map((ele, idx) => {
              return (
                <div className="result" key={idx}>
                  <div className={"square " + (idx === 2 ? "red" : "blue")} />
                  &nbsp;X&nbsp;{ele}
                </div>
              );
            })}
          </main>
          <footer>
            <button className="save" onClick={saveStone}>
              저장
            </button>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
