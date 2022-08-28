import { useState } from "react";
import "./BmiCheck.css";
function BmiCheck() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  const calcBmi = (event) => {
    let imgSrc;
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Fill all the details");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage(
          `Based on the height and weight entered, your BMI is ${bmi.toFixed(
            1
          )} indicating your weight is in the Under Weight for adults.`
        );
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage(
          `Based on the height and weight entered, your BMI is ${bmi.toFixed(
            1
          )} indicating your weight is in the Normal Weight for adults.`
        );
      } else if (bmi >= 25 && bmi < 30) {
        setMessage(
          `Based on the height and weight entered, your BMI is ${bmi.toFixed(
            1
          )} indicating your weight is in the Healthyr Weight for adults.`
        );
      } else {
        setMessage(
          `Based on the height and weight entered, your BMI is ${bmi.toFixed(
            1
          )} indicating your weight is in the Obese for adults.`
        );
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="bmi_section">
      <div className="bmi_title">
        <h2>BMI Calculator – Check Your Body Mass Index For Women & Men</h2>
      </div>
      <div className="bmi_desc">
        <p>
          It is an excellent tool to measure a person’s leanness or fatness as
          per height and weight. It widely describes whether your are in healthy
          zone or need to lose or gain weight. BMI ranges may vary based on your
          exercise regime. More you gain weight more will be the BMI but it does
          not mean that you are obese it can be because of high muscle mass
          also.
        </p>
      </div>
      
      {/* BMI APP */}
      <div className="bmi_app">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <input
              className="bmi_input"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter Your Weight in Kgs"
            />
          </div>
          <div>
            <input
              className="bmi_input"
              value={height}
              onChange={(el) => setHeight(el.target.value)}
              placeholder="Enter Your Height in cms"
            />
          </div>
          <div className="btns_bmi">
            <button className="submit_bmi" type="submit">
              Submit
            </button>
            <button className="reload_bmi" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
        </form>
        <div className="bmi_message">
          <p>
            {" "}
            <strong>{message}</strong>{" "}
          </p>
        </div>
      </div>
      {/* BMI APP ENDS*/}

      {/* About BMI */}
      <div className="about_bmi">
        <h2>What Is Body Mass Index?</h2>
        <p>
          BMI is Body Mass Index a parameter to assess nutritional status as per
          height and weight. It is a ratio between weight in kilograms and
          height in square meters
        </p>
        <img
          src="https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/man-body-mass-index-vector.jpg"
          alt=""
          srcset=""
        />
      </div>
      {/* RISK BMI */}
      <div className="risk_bmi">
        <h2>Risks of being overweight?</h2>
        <p>
          Overweight or severely obesity increases the risk of many diseases as
          per Postgraduate Medicine review studies :
        </p>
        <div className="risk_list">
          <ul>
          <li>Diabetes</li>
          <li>Cardiovascular disorders</li>
          <li>Metabolic Syndrome</li>
          <li>High Blood Pressure</li>
          <li>Pancreatitis</li>
          <li>Gallbladder diseases</li>
          <li>Osteoarthritis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default BmiCheck;
