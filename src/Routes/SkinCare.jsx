import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SkinCare.css";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
import Spinner from "react-bootstrap/Spinner";

function SkinCare() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://makeup.p.rapidapi.com/products.json",
    params: { brand: "maybelline" },
    headers: {
      "X-RapidAPI-Key": "5f6fbc43c7msh7b2892562f48991p1a0887jsn43b5969c2659",
      "X-RapidAPI-Host": "makeup.p.rapidapi.com",
    },
  };

  const getApi3 = () => {
    // axios
    //   .get(
    //     `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setPosts(res.data);
    //     setLoading(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setPosts(response.data);
        setLoading(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      getApi3();
    }, 1000);
  }, []);
  return (
    <>
      {/* <h1>Welcome to SkinCare</h1> */}
      <p className="facial_p_desc">
        A facial is a skin care treatment that involves exfoliating and
        cleansing to eliminate dirt, dead skin, and impurities. It can be
        performed by an esthetician at a spa or a beauty salon or by a
        dermatologist at their clinic. Here are some recommendations for your
        skincare
      </p>
      <div>
        {/* Api Rendering */}
        <ul>
          {loading ? (
            posts.map((post) => (
              <div className="skincare_api_box" key={post.id}>
                <h2>{post.name}</h2>
                <div className="skincare_api_desc">
                  <img
                    className="skincare_api_desc_logo"
                    src={post.image_link}
                    alt="skincare"
                    srcset=""
                  />
                  <p className="skincare_api_desc_about">{post.description}</p>
                  <p>
                    {" "}
                    <strong>
                      <i>$ {post.price}</i>
                    </strong>{" "}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <Spinner animation="border" />
          )}
        </ul>

        {/* Api Rendering ends */}
      </div>
      <Footer />
      <Copyright />
    </>
  );
}
export default SkinCare;
