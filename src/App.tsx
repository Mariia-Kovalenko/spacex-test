import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Favourites from "./components/pages/Favourites/Favourites";
import PageLayout from "./components/templates/PageLayout/PageLayout";
import { RecoilRoot } from "recoil";
import { FAVOURITES_ENDPOINT, HOME_ENDPOINT } from "./utils/constants";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigate to={HOME_ENDPOINT} />} />
                        <Route element={<PageLayout />}>
                            <Route path={HOME_ENDPOINT} element={<Home />} />
                            <Route
                                path={FAVOURITES_ENDPOINT}
                                element={<Favourites />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </RecoilRoot>
    );
}

export default App;
