import {Routes, Route} from "react-router"

import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import NotFoundPage from "../pages/NotFoundPage"; // 404 ERROR
import FaqPage from "../pages/FaqPage";
import DocumentationPage from "../pages/DocumentationPage";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/services" element={<ServicesPage/>}></Route>
                <Route path="/documentation" element={<DocumentationPage/>}></Route>
                <Route path="/faq" element={<FaqPage/>}></Route>
                <Route path="/*" element={<NotFoundPage/>}></Route> 
            </Routes>
        </>
    );
}