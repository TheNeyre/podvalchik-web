import Header from "../components/header"
import "./rent.css"
export default function Rent() {
  return (
    <>
    <Header></Header>
      <div className="tariff-calculator">
        <div className="output-calculator-panel"></div>
        <div className="input-calculator-panel">

          <ul className="param-preview">
            <li className="param-preview-text">Оперативная память</li>
            <li><button className="param-edit-button">{"<"}</button></li>
            <li><input className="param-input" type="text"/></li>
            <li><button className="param-edit-button">{">"}</button></li>
            <li className="param-comment-text">GB DDR3/4</li>
          </ul>

          <ul className="param-preview">
            <li className="param-preview-text">Ядра</li>
            <li><button className="param-edit-button">{"<"}</button></li>
            <li><input className="param-input" type="text"/></li>
            <li><button className="param-edit-button">{">"}</button></li>
            <li className="param-comment-text">pCPU</li>
          </ul>

          <ul className="param-preview">
            <li className="param-preview-text">Диск</li>
            <li><button className="param-edit-button">{"<"}</button></li>
            <li><input className="param-input" type="text"/></li>
            <li><button className="param-edit-button">{">"}</button></li>
            <li className="param-comment-text">GB</li>
          </ul>

          <ul className="param-preview">
            <li className="param-preview-text">хуйня</li>
            <li><button className="param-edit-button">{"<"}</button></li>
            <li><input className="param-input" type="text"/></li>
            <li><button className="param-edit-button">{">"}</button></li>
            <li className="param-comment-text">хуйня</li>
          </ul>

        </div>
      </div>
    </>
  )
}