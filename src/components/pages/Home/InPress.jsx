import React from "react";
import styles from "./Home.module.css";
const InPress = () => {
  return (
    <div className={styles.inpressmain}>
      <div className={styles.inphead}>IN PRESS</div>
      <div className={styles.inpcontaint}>
        <div>
          <img
            src={
              "https://cdn2.stylecraze.com/wp-content/uploads/2021/06/itv-logo-1-300x41.png.webp"
            }
            alt=""
          />
          <p>#WearYourColor & reclaim the beauty narrative: Lotus</p>
        </div>
        <div>
          <img
            src={
              "https://cdn2.stylecraze.com/wp-content/uploads/2021/09/Hindu-300x71.png.webp"
            }
            alt=""
          />
          <p>IncNut Digital raises $4 million in Series-A round</p>
        </div>{" "}
        <div>
          <img
            src={
              "https://cdn2.stylecraze.com/wp-content/uploads/2021/06/BW-logo-300x38.png.webp"
            }
            alt=""
          />
          <p>HerHQ Media, India’s First Ad Revenue Generation Platform</p>
        </div>
      </div>
    </div>
  );
};

export default InPress;
