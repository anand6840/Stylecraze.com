import React from "react";
import Homepromo from "./Homepromo";
import WhiteBgcompo from "./WhiteBgcompo";
import PinkbBgcompo from "./PinkbBgcompo";
import data from "./homedb.json";
import InPress from "./InPress";
import Medreviews from "./Medreviews";
import Testimonials from "./Testimonials";
const Home = () => {
  window.scrollTo(0, 0);
  let mkupdata = data.makeup[0];
  let hairstyle = data.hairstyle[0];
  let helthnwelness = data.helthnwelness[0];
  let haircare = data.haircare[0];
  let skincare = data.skincare[0];
  return (
    <div>
      <Homepromo />
      <WhiteBgcompo data={mkupdata} />
      <PinkbBgcompo data={haircare} />
      <WhiteBgcompo data={hairstyle} />
      <PinkbBgcompo data={skincare} />
      <WhiteBgcompo data={helthnwelness} />
      <InPress />
      <Medreviews />
      <Testimonials />
    </div>
  );
};

export default Home;
