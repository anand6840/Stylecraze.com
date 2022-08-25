import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footmain}>
      <div className={styles.footerContainer}>
        <div>
          <ul className={styles.footerdivfirst}>
            <li> About Us</li>
            <li>Image Usage Policy</li>
            <li>Contact Us</li>
            <li>Editorial Guidelines</li>
            <li> Join Our Medical Board</li>
            <li>Press Room</li>
          </ul>
        </div>

        <div>
          <ul className={styles.footerdivfirst}>
            <li> Advertise With Us</li>
            <li> Privacy Policy</li>
            <li> Terms Of Use</li>
            <li>Affiliate Disclosure</li>
            <li> Cookie Policy</li>
          </ul>
        </div>
        <div>
          <p>Follow us</p>
          <div className={styles.follow}>
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-pinterest-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
          </div>
        </div>
        <div>
          <p> Our Sister Sites</p>
          <ul className={styles.sistercompdiv}>
            <li>MomJunction</li>
            <li> The BridalBox</li>
            <li>Skinkraft</li>
            <li>Vedix</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrightbar}>
        <div className={styles.divp}>
          <p>
            Copyright © 2011 - 2022{" "}
            <span>IncNut Stylecraze Private Limited.</span> All rights reserved.
          </p>
          <p>
            StyleCraze provides content of general nature that is designed for
            informational purposes only. The content is not intended to be a
            substitute for professional medical advice, diagnosis, or treatment.
            Click here for additional information .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
