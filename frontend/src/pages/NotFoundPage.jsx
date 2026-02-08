import Header from "../components/header"
import "../styles/background.css"
export default function NotFoundPage() {
    return (
        <>
        <Header></Header>

        <section className="background-layers">
            <div className="layers-container">
                <div className="layers-item layer-1"></div>
                <div className="layers-item layer-404"></div>
            </div>
        </section> 

        </>
    )
}