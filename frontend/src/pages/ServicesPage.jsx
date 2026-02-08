import Header from "../components/header"
import "../styles/background.css"
import "../styles/services_layout.css"

export default function NotFoundPage() {
    return (
        <>

        <section className="background-layers">
            <div className="layers-container">
                <div className="layers-item layer-1"></div>
            </div>
        </section>

        <div className="main-content">
            <Header></Header>
            <div className="services-container">
                <div className="services-layout">
                    <h2>БЕСПЛАТНЫЕ ИГРОВЫЕ СЕРВЕРА</h2>
                    <div className="tariff-plan-block">
                        {"Характеристики тарифного плана:"}
                        <ul>
                            <li>{"> 4GB RAM"}</li>
                            <li>{"> INF CPU"}</li>
                            <li>{"> 50GB DISK"}</li>
                        </ul>
                    </div>

                    <div className="tariff-plan-block">
                        {"Доступные игры:"}
                        <ul>
                            <li>{"> Minecraft"}</li>
                            <li>{"> Mindustry"}</li>
                            <li>{"> Terraria"}</li>
                            <li>{"> Factorio"}</li>
                        </ul>
                    </div>
                    (!) Управлять своим игровым сервером можно через нашу панель управления.

                </div>

                <div className="services-layout">
                    <h2>АРЕНДА ФИЗИЧЕСКОГО СЕРВЕРА</h2>
                    {"Аренда физ.сервера возможна по трём основным тарифам:"}
                    <br />
                    <br />
                    <div className="tariff-plan-block">
                        Базовый:
                        <ul>
                            <li>{"> 32vCPU"}</li>
                            <li>{"> 32 RAM DDR3"}</li>
                            <li>{"> 300GB DISK"}</li>
                        </ul>
                        Основной:
                        <ul>
                            <li>{"> 128vCPU"}</li>
                            <li>{"> 96 RAM DDR3"}</li>
                            <li>{"> 1000GB DISK"}</li>
                        </ul>
                    </div>

                    (!) Помимо этого доступна возможность аренды сервера на индивидуальном плане! Для этого обратитесь в <i><a href="https://t.me/podvalchik_support">поддержку.</a></i>
                    <br />
                    <br />
                    (!) После окончания сотрудничества ваши данные будут временно храниться у нас на случай вашего возвращения
                </div>

    
            </div>
        </div>



        </>
    )
}