import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MakeUp from "./MakeUp.jsx";
import HairCare from "./HairCare";
import SkinCare from "./SkinCare";
import HealthWellness from "./HealthWellness";
import News from "./News";
import Exercise from "./Exercise";
import AboutUs from "./AboutUs";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<MakeUp />} />
        <Route path="/haircare" element={<HairCare />} />
        <Route path="/skincare" element={<SkinCare />} />
        <Route path="/health_wellness" element={<HealthWellness />} />
        <Route path="/news" element={<News />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
