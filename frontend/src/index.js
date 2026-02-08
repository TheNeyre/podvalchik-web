import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from "react-router"

import AppRoutes from "./components/routes"

// Loading global css styles
import "./styles/normalize.css"
import "./styles/globals.css"
import "./styles/fonts.css"
import "./styles/animations.css"

const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(
    (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
)