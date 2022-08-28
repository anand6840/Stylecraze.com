import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterStyle.css"

function Footer() {
  return (
    <>
      <div className="footer_section">
        <div className="list_1_footer">
          <p>About Us</p>
          <p>Image Usage Policy</p>
          <p>Contact Us</p>
          <p>Editorial Guidelines</p>
          <p>Join Our Medical Board</p>
          <p>Press Room</p>
        </div>
        <div className="list_2_footer">
          <p> Advertise With Us</p>
          <p> Privacy Policy</p>
          <p> Terms Of Use</p>
          <p> Affiliate Disclosure</p>
          <p> Cookie Policy</p>
        </div>
        <div className="list_3_icons">
          <div id="follow">Follow us</div>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className="list_4_footer">
          <p> Our Sister Sites</p>
          <p> MomJunction</p>
          <p> The BridalBox</p>
          <p> Skinkraft</p>
          <p> Vedix</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
