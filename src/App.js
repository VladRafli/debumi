import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './assets/css/index.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register/*" element={<Register />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </Router>
    );
}
