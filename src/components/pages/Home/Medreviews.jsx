import React from "react";
import styles from "./Home.module.css";
const Medreviews = () => {
  return (
    <div className={styles.medreviews}>
      <p>MEDICAL REVIEWERS</p>
      <div className={styles.medreviewchild}>
        <div>
          <img
            src="https://www.stylecraze.com/static-content/aboutus/Vindhya.jpg"
            alt="dr.img"
          />
          <div>
            <h2>Dr. Vindhya L Veerula</h2>
            <p>MD, FAAD</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Dr-Perpetua-Neo-DClinPsy-UCL-MPhil-1.jpg.webp"
            alt="dr.img"
          />
          <div>
            <h2>Dr Perpetua Neo</h2>
            <p>DClinPsy, MPhil</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Dr-Jill-Carnahan.jpg.webp"
            alt="dr.img"
          />
          <div>
            <h2>Dr. Jill Carnahan</h2>
            <p>MD, ABFM, ABIHM, IFMCP</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Alexandra-Dusenberry-MS-RDN.jpg.webp"
            alt="dr.img"
          />
          <div>
            <h2>Alexandra Dusenberry</h2>
            <p> MS, RDN</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Mollie-Meldahl.jpg.webp"
            alt="dr.img"
          />
          <div>
            <h2>Mollie Meldahl</h2>
            <p> RD, LD, CPT</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/Dr.-Kendall-R.-Roehl.jpg.webp"
            alt="dr.img"
          />
          <div>
            <h2>Dr. Kendall R. Roehl</h2>
            <p>MD, FACS</p>
          </div>
        </div>
      </div>
      <p className={styles.meddisccl}>
        Our team of 80+ doctors, nutritionists, dermatologists, and wellness
        professionals reviews all our articles for medical and factual accuracy.
      </p>
      <button>MEET THE TEAM</button>
    </div>
  );
};

export default Medreviews;
