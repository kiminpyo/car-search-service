import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import CarDetailPage from "./pages/CarDetailPage/CarDetailPage";
import NoMatch from "./pages/ErrorPage/ErrorPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="/detail" element={<CarDetailPage />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

export default App;
