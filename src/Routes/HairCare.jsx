import HairProductBanner from "./HairProductsBanner.jsx";
import "./HairCare.css";
import Footer from "../Components/Footer"
import Copyright from "../Components/Copyright"
HairProductBanner;
function HairCare() {
  return (
    <>
      {/* <h1>Welcome To Hair Care</h1> */}
      <HairProductBanner />
      {/* Start Page */}
      <div className="haircare_title">
        <p className="haircare_title_head">DANDRUFF</p>
      </div>
      {/* Dandruff Article */}

      <div className="article_start_haircare">
        <p>How To Get Rid Of Dandruff Naturally – 18 Tips And Remedies</p>
        <img
          src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Get-Rid-Of-Dandruff.jpg.webp"
          alt=""
          srcset=""
        />
      </div>
      {/* article body */}
      <div className="article_body_hair">
        <h2 id="about_article">In This Article</h2>
        <div className="list_article_hair">
          
        <li id="What Causes Dandruff?">
          {" "}
          <a href="#What Causes Dandruff?">What Causes Dandruff?</a>{" "}
        </li>
        <li id="How To Get Rid Of Dandruff">
          {" "}
          <a href="#How To Get Rid Of Dandruff">
            How To Get Rid Of Dandruff
          </a>{" "}
        </li>
        <li id="What Are The Best Home Remedies For Dandruff">
          {" "}
          <a href="#What Are The Best Home Remedies For Dandruff">
            What Are The Best Home Remedies For Dandruff
          </a>{" "}
        </li>
        
        </div>
        

        {/* Article Starts */}
        <div className="article_body_hair_desc">
          <h3 id="What Causes Dandruff?">What Causes Dandruff?</h3>
          <p>
            {" "}
            Dandruff is a common, chronic skin condition characterized by flaky
            scalp. The common causes of dandruff include:
          </p>
          <ul>
          <li>
            {" "}
            <strong>Seborrheic Dermatitis:</strong> Seborrheic dermatitis is
            characterized by skin inflammation  redness of the skin, covered
            with flakes or scales (2). This condition usually affects areas rich
            in oil glands, such as the scalp, face, and upper chest.
          </li>
          <li>
            {" "}
            <strong>Malassezia:</strong> Malassezia is a yeast-like fungus that
            can cause infection and skin inflammation (3). This fungus feeds on
            the natural oils of your scalp and makes it dry and flaky,
            increasing the risk of dandruff.usually affects areas rich in oil
            glands, such as the scalp, face, and upper chest.
          </li>
          <li>
            {" "}
            <strong>Dry Scalp:</strong> A dry and dehydrated scalp that lacks
            moisture leads to inflammation, irritation, and itchiness. This
            condition causes flakiness that eventually becomes dandruff
            (4).Typically, these flakes are smaller and less oily than those
            caused by other factors.
          </li>
          </ul>
        </div>


        <div className="article_body_hair_desc">
          <h3 id="How To Get Rid Of Dandruff?">How To Get Rid Of Dandruff</h3>
          <p>
            {" "}
            The silver lining is you can control dandruff by following some measures. Scroll down to know what they are.
          </p>
          <ul>
          <li>
            {" "}
            <strong>Wash Your Hair Regularly:</strong> The accumulation of excess oils, dirt, and dead skin cells on your scalp increases the risk of dandruff. Hence, you should wash your hair regularly to keep it clean and dandruff-free. However, do not use harsh shampoos that might dry out your scalp and worsen the condition.
          </li>
          <li>
            {" "}
            <strong>Switch To Anti-Dandruff Shampoos:</strong>Switching from a regular to anti-dandruff shampoo is the easiest option to treat dandruff. Anti-dandruff shampoos contain salicylic acid, ketoconazole, zinc pyrithione, and selenium sulfide that work against flakiness.
          </li>
          <li>
            {" "}
            <strong>Change Your Diet:</strong> Apoor diet that lacks essential vitamins and minerals can lead to dandruff. A study shows that foods rich in fat and sugar result in more instances of dandruff than a fruit diet(5). Thus, maintain a balanced diet that includes essential nutrients, proteins, and minerals to keep the hair and scalp healthy.
          </li>
          </ul>
        </div>


        <div className="article_body_hair_desc">
          <h3 id="What Are The Best Home Remedies For Dandruff">What Are The Best Home Remedies For Dandruff</h3>
          <p>
            {" "}
            If you are looking for some effective home remedies for dandruff, check out the next section.
          </p>
          <ul>
          <li>
            {" "}
            <strong>Tea Tree Oil</strong> If you are looking for some effective home remedies for dandruff, check out the next section.
          </li>
          <li>
            {" "}
            <strong>Coconut Oil</strong>Coconut oil penetrates the hair shaft due to its low molecular weight and helps reduce protein loss (12). This can help nourish and condition your hair, hydrate your scalp, and prevent dryness, thus reducing the chances of dandruff.
          </li>
          <li>
            {" "}
            <strong> Aloe Vera</strong> Apoor diet that lacks essential vitamins and minerals can lead to dandruff. A study shows that foods rich in fat and sugar result in more instances of dandruff than a fruit diet(5). Thus, maintain a balanced diet that includes essential nutrients, proteins, and minerals to keep the hair and scalp healthy.
          </li>
          </ul>
        </div>
      </div>
      <Footer/>
      <Copyright/>
    </>
  );
}
export default HairCare;
