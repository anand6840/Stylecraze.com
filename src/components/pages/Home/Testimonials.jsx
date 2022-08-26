import React from "react";
import styles from "./Home.module.css";
const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <p>TESTIMONIALS</p>
      <div className={styles.testimonialschild}>
        <div className={styles.testichildsindivdls}>
          <h2>Gayatri Gogoi</h2>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/gayathri-goigoi.png.webp"
            alt="Gayatri"
          />
          <p>
            “As an introvert in her early 20s, I have always found it hard to
            break the ice or to continue conversations. The witty yet
            well-researched content of this website has helped me express myself
            better in various situations. I keep coming back to StyleCraze for
            more such interesting reads.”
          </p>
        </div>
        <div className={styles.testichildsindivdls}>
          <h2>Priya Dikshit</h2>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/priya-dixit-1.png.webp"
            alt="Priya Dikshit"
          />
          <p>
            “ I tend to gravitate towards home remedies to resolve various skin
            and hair issues, and StyleCraze has a wonderful repository of
            at-home solutions. Excellent work! ”
          </p>
        </div>
        <div className={styles.testichildsindivdls}>
          <h2>Priya Thawani</h2>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/pia-thawani.png.webp"
            alt="Priya Thawani<"
          />
          <p>
            “StyleCraze is my guilty pleasure. I love this website and follow
            the diet and weight loss articles. I have always struggled with
            weight management, but the tips and information on all the latest
            diet and fitness trends have helped me stay in shape!”
          </p>
        </div>
        <div className={styles.testichildsindivdls}>
          <h2>Renuka Thakur</h2>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/renuka-thakur.png.webp"
            alt="Renuka Thakur"
          />
          <p>
            “StyleCraze is my go-to site for updates on makeup and fashion. From
            lipstick reviews to outfit ideas, it has it all!”
          </p>
        </div>
        <div className={styles.testichildsindivdls}>
          <h2>Ananya Kataria</h2>
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/ananya-kataria.png.webp"
            alt="Ananya Kataria"
          />
          <p>
            “I had damaged hair and wanted to get to the root cause of my
            hair-related issues. That was the time I came across StyleCraze –
            they not only suggest thoroughly researched solutions but also why
            and how to go about it. Thank you for being my hair savior!”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
