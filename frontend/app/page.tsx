import Header from "./components/header"
export default function Root() {
  return (
    <>
    <Header></Header>
    <img src="/imgs/work1.png" className="locked-obj img-servers" />
    {/* <img src="/imgs/back.jpg" className="locked-obj img-back" /> */}
    <div className="main-text">
      <p className="parent-text">
        <b className="paret-better-text">ЛУЧШИЙ</b> СРЕДИ ПОДВАЛЬНЫХ ХОСТОВ
      </p>
      <p className="children-text">КОГДА СЕРВЕРНАЯ НЕ РАДИ ДЕНЕГ, А ДЛЯ ДУШИ.</p>
    </div>

    <div className="main-block-buttons">
      <div className="main-button"><a href="">ПАНЕЛЬ УПРАВЛЕНИЯ</a></div>
      <div className="main-button"><a href="/rent">АРЕНДА СЕРВЕРА</a></div>
    </div>
    </>
  )
}