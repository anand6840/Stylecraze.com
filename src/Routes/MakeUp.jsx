import "./MakeUp.css";
import MakeUpBanner from "./MakeUpBanner";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
function MakeUp() {
  return (
    <>
      {/* <h1>Welcome To MakeUp</h1> */}
      <MakeUpBanner />
      {/* Heading start */}
      <div className="article_1_makeUp">
        <div className="article_1_title">
          <h1>5 Celebrities With Tattooed Eyebrows</h1>
          <p>
            Not everyone is blessed with Delevigne-esque bushy and bold
            eyebrows. But celebrities with tattooed eyebrows have shown us how
            to face that challenge. There are different forms of eyebrow
            tattoos, including microblading and henna brows. From Madonna to
            Mila Kunis […]
          </p>
          <p>
            By <strong>Nisha Baghadia</strong>
          </p>
        </div>
        <div className="article_1_img">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/2051-Celebrities-With-Tattooed-Eyebrows-720x810.jpg.webp"
            alt=""
            srcset=""
          />
        </div>
      </div>
      {/* Heading End */}
      {/* Card Section Start */}
      <div className="cards_section">
        <div className="card">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2017/07/Top-50-Acrylic-Nail-Designs-2-720x810.jpg.webp"
            alt=""
            srcset=""
          />
          <p>50 Top Acrylic Nail Designs and Ideas For Women To Try</p>
        </div>
        <div className="card">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Thin-Out-Nail-Polish-Banner-720x810.jpg.webp"
            alt=""
            srcset=""
          />
          <p>How To Thin Out Nail Polish That’s Thick And Clumpy</p>
        </div>
        <div className="card">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2014/10/2390_Top-5-Alternatives-To-Replace-Expensive-Makeup-Brushes_ss.jpg.webp"
            alt=""
            srcset=""
          />
          <p>Top 5 Alternatives For Expensive Makeup Brushes</p>
        </div>
        <div className="card">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/10-Simple-Self-Help-Makeup-Tips-For-A-Perfect-Makeover.jpg.webp"
            alt=""
            srcset=""
          />
          <p>10 Quick Beauty Tips To Give Yourself A Complete Makeover</p>
        </div>
        <div className="card">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/2290-Vaseline-The-Best-Eye-Makeup-Remover.jpg.webp"
            alt=""
            srcset=""
          />
          <p>Vaseline: The Best Eye Makeup Remover</p>
        </div>
        <div className="card">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/10-Pictures-of-Kristen-Stewart-Without-Makeup.jpg.webp"
            alt=""
            srcset=""
          />
          <p>10 Pictures of Kristen Stewart Without Makeup</p>
        </div>
      </div>
      {/* Card Section Ends */}
      <Footer/>
      <Copyright/>
    </>
  );
}
export default MakeUp;
