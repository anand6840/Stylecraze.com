import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
import "./News.css";
import Spinner from "react-bootstrap/Spinner";

function News() {
  const axios = require("axios");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    url: "https://live-fitness-and-health-news.p.rapidapi.com/news",
    headers: {
      "X-RapidAPI-Key": "5f6fbc43c7msh7b2892562f48991p1a0887jsn43b5969c2659",
      "X-RapidAPI-Host": "live-fitness-and-health-news.p.rapidapi.com",
    },
  };

  const getApi2 = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNews(response.data);
        setLoading(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      getApi2();
    }, 2000); // sec delay
  }, []);

  return (
    <>
      <h1>Trending News Around the world</h1>
      {/* API rendering */}
      {loading ? (
        news.map((el) => (
          <div className="news_api_box">
            <h2 key={el.id}>{el.title}</h2>
            <p>
              {" "}
              Source: <strong>{el.source}</strong>
            </p>
            <a href={el.url}>Read More...</a>
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
export default News;




{
  /* {
          news.map((el) => (
          <div className="news_api_box">
            <h2 key={el.id}>{el.title}</h2>
            <p> Source: <strong>{el.source}</strong></p>
            <a href={el.url}>Read More...</a>
          </div>
        ))
      } */
}
