import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFOund from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import FavoritesProvider from "./context/favorites";

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/Watch/:id" element={ <Watch/> }></Route>
                    <Route path="/search" element={ <Search/> }></Route>
                    <Route path="/favorite" element={ <Favorite/> }></Route>
                    <Route path="*" element={ <PageNotFOund/> }></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes