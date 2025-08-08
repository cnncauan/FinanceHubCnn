import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFOund from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/Watch/:id" element={ <Watch/> }></Route>
                <Route path="/search" element={ <Search/> }></Route>
                <Route path="/favorite" element={ <Favorite/> }></Route>
                <Route path="*" element={ <PageNotFOund/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes