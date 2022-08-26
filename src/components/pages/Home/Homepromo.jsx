import React from "react";
import styles from "./Home.module.css";
const Homepromo = () => {
  return (
    <div className={styles.homepromomain}>
      <div className={styles.hpchild}>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2017/08/A-Useful-Guide-To-Picking-Sunglasses-For-Your-Face-Shape-2.jpg"
            alt="promoimg1"
            width="100%"
          />
          <p>
            How To Mix And Match Colors In Your Clothes – The Ultimate Color
            Wheel Guide
          </p>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2017/08/How-To-Mix-And-Match-Colors-In-Your-Clothes--The-Ultimate-Color-Wheel-Guide-2.jpg"
            alt="promoimg2"
            width="100%"
          />
          <p>
            How To Mix And Match Colors In Your Clothes – The Ultimate Color
            Wheel Guide
          </p>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2017/08/How-To-Do-Ombre-Nails-Like-A-Pro-Tutorial-With-Pictures-2.jpg"
            alt="promoimg3"
            width="100%"
          />
          <p>
            How To Mix And Match Colors In Your Clothes – The Ultimate Color
            Wheel Guide
          </p>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.custmain}>
          <div className={styles.custom}>FACEBOOK</div>
          <div className={styles.title}>8M Followers</div>
        </div>
        <div className={styles.custmain}>
          <div className={styles.custom1}>PINTEREST </div>
          <div className={styles.title1}>1M Followers</div>
        </div>
        <div className={styles.custmain}>
          <div className={styles.custom2}>INSTAGRAM </div>
          <div className={styles.title2}>760K Followers</div>
        </div>
      </div>
    </div>
  );
};

export default Homepromo;
