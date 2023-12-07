import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Favourites from "./components/pages/Favourites/Favourites";
import PageLayout from "./components/templates/PageLayout/PageLayout";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route element={<PageLayout />}>
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/favourites"
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
