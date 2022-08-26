import React from "react";
import styles from "./Home.module.css";
const PinkbBgcompo = ({ data }) => {
  // console.log(data);
  return (
    <div className={styles.pinkmain}>
      <div className={styles.pinkchild}>
        <p>{data.title}</p>
        <div className={styles.pinkfirst}>
          <img src={data.img1} alt="img11" />
          <div className={styles.pinkimg1desc}>
            <p>{data.img1head}</p>
            <p>{data.img1p}</p>
            <span>{data.img1span}</span>
          </div>
        </div>
        <div className={styles.pinksecond}></div>
        <div className={styles.pinkthird}></div>
      </div>
      <div className={styles.pinkbtmdiv}>
        <div className={styles.pinkbtmchildren}>
          <img src={data.img2} alt="small img2" />
          <div>
            <p>{data.img2head}</p>
          </div>
        </div>
        <div className={styles.pinkbtmchildren}>
          <img src={data.img3} alt="small img2" />
          <div>
            <p className={styles.head2pinpp}>{data.img3head}</p>
            <span>{data.img3span} </span>
          </div>
        </div>
      </div>
      <div className={styles.learnmore}>Read More</div>
    </div>
  );
};

export default PinkbBgcompo;
