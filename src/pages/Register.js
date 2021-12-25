import { Routes, Route } from "react-router-dom";
import RegisEmail from "./register/RegisEmail";
import RegisUser from "./register/RegisUser";
import Verify from "./register/Verify";
import RegisInfo from "./register/RegisInfo";

export default function Register() {
  return (
    <Routes>
      <Route path="/" element={<RegisEmail />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/user" element={<RegisUser/>} />
      <Route path="/info" element={<RegisInfo/>} />
    </Routes>
  );
}
