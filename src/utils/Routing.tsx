import { Routes, Route } from "react-router-dom";
import MainPage from "../views/homepage";

const Routing: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/download-api" element={ <MainPage /> } />
        </Routes>
    )
};

export default Routing;
