import { useEffect, useState } from "react";
import "./Exercise.css";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
import Spinner from "react-bootstrap/Spinner";

function Exercise() {
  const axios = require("axios");
  const [exercise, setExercise] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: { muscle: "biceps" },
    headers: {
      "X-RapidAPI-Key": "5f6fbc43c7msh7b2892562f48991p1a0887jsn43b5969c2659",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  const getApi = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setExercise(response.data);
        setLoading(true);
      })
      // setLoading(true)
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getApi();
    }, 2000);   //sec delay
  }, []);

  return (
    <>
      {/* <h1>Welcome to Exercise Page</h1> */}

      {/* API rendering */}

      {loading ? (
        exercise.map((el) => (
          <div className="exercise_api_box">
            <h2>{el.name}</h2>
            <p>
              {" "}
              <strong>Type:</strong> {el.type}
            </p>
            <p>
              <strong>Muscle:</strong>
              {el.muscle}
            </p>
            <p>
              <strong>Difficulty:</strong>
              {el.difficulty}
            </p>
            <p>
              <strong>Description:</strong> {el.instructions}
            </p>
          </div>
        ))
      ) : (
        <Spinner animation="border" />
      )}

      {/* API rendering Ends*/}
      <Footer />
      <Copyright />
    </>
  );
}
export default Exercise;

// const getApi = () => {
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//     setExercise(response.data);
//      setLoading(true);
//   })
//   // setLoading(true)
//   .catch(function (error) {
//     console.error(error);
//   });
// };
