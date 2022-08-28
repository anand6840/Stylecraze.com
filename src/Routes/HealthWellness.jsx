import "./HealthWellness.css";
import BmiCheck from "./BmiCheck.jsx";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
function HealthWellness() {
  return (
    <div>
      {/* <h1>Welcome to Health Wellness</h1> */}
      {/* Top Section */}
      <div className="healthwellness_link">
        <p>HEALTH AND WELLNESS</p>
      </div>

      <div className="article_1_healthwell">
        <div className="article_1_img">
          <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/How-Are-Hormones-Responsible.jpg.webp" />
        </div>
        <div className="article_makeUp">
          <h3 id="article_1_h3">
            Hormones And Weight Gain: Symptoms And Ways To Control
          </h3>
          <p id="article_1_p3">
            “There is a direct link between hormones and weight gain. Sudden
            weight gain and difficulty losing weight could be the symptoms of
            hormonal weight gain. A balanced diet and exercise alone may not be
            as effective in such cases. You […]
          </p>
          <p>
            By <strong>Medically Reviewed by Reda Elmardi, RDN</strong>
          </p>
        </div>
      </div>
      {/* Top Section Ends */}

      {/* BMI section */}
      <BmiCheck />
      {/* BMI section Ends */}
      <Footer />
      <Copyright />
    </div>
  );
}
export default HealthWellness;
