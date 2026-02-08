import "../scripts/mouse.js"
import Header from "../components/header.jsx"

import "../styles/background.css"
import "../styles/windows.css"
import "../styles/adapter_panel.css"

export default function HomePage() {
    return (
    <>
        <section className="background-layers">
            <div className="layers-container">
                <div className="layers-item layer-1"></div>
                <div className="layers-item layer-2"></div>
            </div>
        </section> 

        <div className="main-content">

            <Header/>

            <main>
                <div className="windows">
                    <div className="window">
                        <div className="window-header">x</div>
                        <div className="window-main-content">
                            <p><b>Лучший</b>, среди подвальных хостов</p>
                        </div>
                    </div>
                    <div className="window-code">
                        <div className="window-code-header">x</div>
                        <div className="window-code-main-content" >
                            <p><i className="start-profile-status">podvalchik_host@DESKTOP000000 /real/path/totally</i></p>
                            <p>$ run node --full --house</p>
                            <p>{">"} <i className="ok-status">[OK]</i> GlamurNode is online</p>
                            <p>{">"} <i className="waiting-status">[WARN]</i> CherdakNode is waiting</p>
                            <p>{">"} <i className="waiting-status">[WARN]</i> KartoshkaNode is waiting</p>
                            <p>{">"} <i className="waiting-status">[WARN]</i> PikmiNode is waiting</p>
                        </div>
                    </div>
                </div>

                <div className="adapter-panel">
                    <div className="adapter-panel-list">
                        <a href="/">{"Панель управления"}</a>
                        <a href="/">{"Телеграм канал"}</a>
                        <a href="/">{"Бот"}</a>
                    </div>
                </div>

            </main>
        </div>
    </>
    )
}
