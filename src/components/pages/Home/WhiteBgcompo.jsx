import React from "react";
import styles from "./Home.module.css";
const WhiteBgcompo = ({ data }) => {
  let arr = data;
  return (
    <div className={styles.whiteBgcompo}>
      <div className={styles.whiteBggrid}>
        <p>{arr.title}</p>
        <div className={styles.bigimghead}>
          <div className={styles.manimg}>
            <img src={arr.bigimg} alt="grid img 1" />
          </div>

          <div className={styles.manimgheaddata}>
            <h2>{arr.biimgtexthead}</h2>
            <p>{arr.biimgtextp}</p>
            <span>{arr.biimgtextspan}</span>
          </div>
        </div>
        <div className={styles.flex3img}>
          <div className={styles.flex3imgChild}>
            <img src={arr.img1} alt="imges-grids-m" />{" "}
            <div className={styles.img3escription}>
              <h3 className={styles.h3head}>{arr.ing1head}</h3>
              <span>{arr.ing1p}</span>
            </div>
          </div>

          <div className={styles.flex3imgChild}>
            <img src={arr.img2} alt="imges-grids-m" />{" "}
            <div className={styles.img3escription}>
              <h3 className={styles.h3head}>{arr.ing2head}</h3>
              <span>{arr.ing2p}</span>
            </div>
          </div>
          <div className={styles.flex3imgChild}>
            <img src={arr.img3} alt="imges-grids-m" />{" "}
            <div className={styles.img3escription}>
              <h3 className={styles.h3head}>{arr.ing3head}</h3>
              <span>{arr.ing3p}</span>
            </div>
          </div>
        </div>
        <div className={styles.iteam6}>Read more</div>
      </div>
    </div>
  );
};

export default WhiteBgcompo;
