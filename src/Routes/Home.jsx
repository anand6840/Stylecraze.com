import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faPinterest,
//   faTwitter,
//   faYoutube,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import Copyright from "../Components/Copyright";
import "./Home.css";
import Footer from "../Components/Footer"
function Home() {
  return (
    <div>
      {/* <h1>Welcome to Home Page</h1> */}

      {/* Top Heading - 1 */}
      <div className="heading_1">
        <div id="heading_1a">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2019/06/101-Nice-Things-To-Say-To-A-Friend-To-Make-Her-Feel-Wonderful-1.jpg.webp"
            alt=""
            srcset=""
          />
          <p>101 Nice Things To Say To A </p>
          <p>Friend To Make Her Feel Wonderful</p>
        </div>
        <div id="heading_1b">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2019/06/9-Important-Qualities-Of-A-Healthy-And-Happy-Relationship.jpg.webp"
            alt=""
            srcset=""
          />
          <p>9 Important Qualities Of A </p>
          <p>Healthy And Happy Relationship</p>
        </div>
      </div>
      {/* heading - 1 ends */}

      {/* Social Media Tag Start */}
      <div className="heading_2">
        <img
          src="https://i.postimg.cc/gkwvJj6b/img-1.jpg://postimg.cc/MvSc3WD9"
          alt=""
          srcset=""
        />
      </div>
      {/* Social Media Tag End*/}

      {/* MakeUp Article */}
      <div className="makeup_link">
        <Link id="heading_3_title" to="/makeup">
          MAKEUP
        </Link>
      </div>

      <div className="article_1">
        <div>
          <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/How-To-Apply-Makeup-Like-A-Pro--A-Step-By-Step-Tutorial-1.jpg.webp" />
        </div>
        <div className="article_makeUp">
          <h3 id="article_1_h3">
            How To Apply Makeup Like A Pro – A Step By Step Tutorial
          </h3>
          <p id="article_1_p3">
            “There is no right or wrong way to apply makeup. Makeup is
            self-expression!”, says Lindsay Kastuk, a commercial and editorial
            makeup artist based in New York City. No thumb rule can decide what
            will enhance your favorite features and create […]
          </p>
          <p>
            By <strong>Shalini Roy</strong>
          </p>
        </div>
      </div>
      {/* MakeUp Article Ends*/}

      {/* MakeUp Cards Start */}
      <div className="cards_makeup">
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/6-Best-Ways-To-Dry-Your-Nail-Polish-Faster.jpg.webp"
            alt=""
            srcset=""
          />
          <p className="cards_makeup_p">
            6 Best Ways To Dry Your Nail Polish Faster
          </p>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/How-To-Do-Eyebrow-Slits.jpg.webp"
            alt=""
            srcset=""
          />
          <p className="cards_makeup_p">How To Do Eyebrow Slits</p>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/7-Different-Nail-Shapes-And-How-To-Achieve-Them.jpg.webp"
            alt=""
            srcset=""
          />
          <p className="cards_makeup_p">
            7 Different Nail Shapes And How To Achieve Them
          </p>
        </div>
      </div>
      {/* MakeUp Cards Ends */}

      {/* Press Cards Starts */}
      <div className="press_article">
        <div className="heading_6_div">
          <Link id="heading_6_title" to="/news">
            IN PRESS
          </Link>
        </div>

        <div id="press_img">
          <img
            src="https://i.postimg.cc/3Rb2CSSW/Web-capture-24-8-2022-2455-www-stylecraze-com.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      {/* Press Cards Ends */}

      {/* Medical Review Starts */}
      <div className="medical_review">
        <h2 id="medical_review_h2">MEDICAL REVIEWERS</h2>
        <div className="medical_box">
          <div className="medical_box_card">
            <img
              src="https://www.stylecraze.com/static-content/aboutus/Vindhya.jpg"
              alt=""
              srcset=""
            />
            <div className="medical_box_desig">
              <p>
                <strong>Dr. Vindhya L Veerula</strong>
              </p>
              <p>MD,FAAD</p>
            </div>
          </div>
          <div className="medical_box_card">
            <img
              src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Dr-Perpetua-Neo-DClinPsy-UCL-MPhil-1.jpg.webp"
              alt=""
              srcset=""
            />
            <div className="medical_box_desig">
              <p>
                <strong>Dr Perpetua Neo</strong>
              </p>
              <p>DClinPsy, UCL; MPhil</p>
            </div>
          </div>
          <div className="medical_box_card">
            <img
              src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Dr-Jill-Carnahan.jpg.webp"
              alt=""
              srcset=""
            />
            <div className="medical_box_desig">
              <p>
                <strong>Dr. Jill Carnahan</strong>
              </p>
              <p>MD, ABFM, ABIHM, IFMCP</p>
            </div>
          </div>
          <div className="medical_box_card">
            <img
              src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Alexandra-Dusenberry-MS-RDN.jpg.webp"
              alt=""
              srcset=""
            />
            <div className="medical_box_desig">
              <p>
                <strong>Alexandra Dusenberry</strong>
              </p>
              <p>MS, RDN</p>
            </div>
          </div>
          <div className="medical_box_card">
            <img
              src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/Dr.-Kendall-R.-Roehl.jpg.webp"
              alt=""
              srcset=""
            />
            <div className="medical_box_desig">
              <p>
                <strong>Dr. Kendall R. Roehl</strong>
              </p>
              <p>MD, FACS</p>
            </div>
          </div>
          <div className="medical_box_card">
            <img
              src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Mollie-Meldahl.jpg.webp"
              alt=""
              srcset=""
            />
            <div className="medical_box_desig">
              <p>
                <strong>Mollie Meldahl</strong>
              </p>
              <p>RD, LD, CPT</p>
            </div>
          </div>
        </div>
        <p id="medical_last_line">
          Our team of 80+ doctors, nutritionists, dermatologists, and wellness
          professionals reviews all our articles for medical and factual
          accuracy.
        </p>
        <button id="medical_team_button">MEET THE TEAM</button>
      </div>
      {/* Medical Review Ends */}
      {/* Testimonials section Starts */}
      <div className="testimonial_box">
        <p className="testimonial_heading">TESTIMONIALS</p>
        <div className="testimonial_container">
          <div className="testimonial_content">
            <div>
              <i>
                “As an introvert, I have always found it hard to break the ice
                or to continue conversations. The witty yet well-researched
                content of this website has helped me express myself better in
                various situations.”
              </i>
            </div>
            <div className="testimonial_author">
              <strong>-Gayatri Gogoi</strong>
            </div>
          </div>
          <div className="testimonial_content">
            <div>
              <i>
                “ “I tend to gravitate towards home remedies to resolve various
                skin and hair issues, and StyleCraze has a wonderful repository
                of at-home solutions. Excellent work!””
              </i>
            </div>
            <div className="testimonial_author">
              {" "}
              <strong>-Priya Dikshit</strong>{" "}
            </div>
          </div>
          <div className="testimonial_content">
            <div>
              <i>
                “StyleCraze is my guilty pleasure. I have always struggled with
                weight management, but the tips and information on all the
                latest diet and fitness trends have helped me stay in shape!”
              </i>
            </div>
            <div className="testimonial_author">
              {" "}
              <strong> -Priya Thawani</strong>
            </div>
          </div>
          <div className="testimonial_content">
            <div>
              <i>
                “I had damaged hair and wanted to get to the root cause of the
                issues. That was when I came across StyleCraze that has
                thoroughly researched solutions and tells why and how to go
                about them. Thank you for being my hair savior!”
              </i>
            </div>
            <div className="testimonial_author">
              <strong>-Ananya Kataria</strong>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials section Ends */}
      
      {/* Footer Section Start */}
      <Footer/>
      {/* Footer Section Ends */}

      {/* Copyright section Start*/}
      {/* <div className="copyright_section">
        <p>Copyright © 2011 - 2022 IncNut Stylecraze Private Limited. All rights reserved.</p>
        <p>StyleCraze provides content of general nature that is designed for informational purposes only. The content is not intended to be a substitute</p>
        <p>for professional medical advice, diagnosis, or treatment. Click here for additional information.</p>
      </div> */}
      <Copyright/>
      {/* Copyright section Ends*/}
    </div>
  );
}
export default Home;
