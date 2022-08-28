import "./AboutUs.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      {/* <h1>Welcome to About Us</h1> */}
      <div className="aboutus_body">
        <nav>
          <ul>
            <li>
              {" "}
              <a className="current" href="#About us">About Us</a>
            </li>
            <li>
              {" "}
              <a  className="current" href="#Our Review Board">Our Review Board</a>
            </li>
            <li>
              {" "}
              <a  className="current" href="#Editorial Policies">Editorial Policies</a>
            </li>
            <li>
              {" "}
              <a className="current" href="#Our Team">Our Team</a>
            </li>
            <li>
              {" "}
              <a className="current" href="#Contact Us">Contact Us</a>
            </li>
          </ul>
        </nav>

        <main>
          <div id="About us">
            {" "}
            <h2>
              Empower and inspire women of today to lead healthier and happier
              lives
            </h2>{" "}
            <p>
              StyleCraze is a global women's platform that aims to answer one
              question: what do women want? From health and wellness to
              lifestyle and beauty – we provide answers to women in all spheres
              to celebrate their unique needs and individuality. Our goal is to
              empower women from all walks of life and various intersections of
              identity to lead healthier and happier lives. We have a highly
              engaged audience of 25 million (and counting!) across all
              platforms. We focus on Health & Wellness, Skin Care, Hair Care,
              Makeup, Hairstyles, Fashion, Relationships, and more. Whether it
              is advice from a trusted expert or a DIY tutorial, we have it all
              covered.
            </p>
          </div>
          <div id="Our Review Board">
            {" "}
            <h2>Our Review Board</h2>{" "}
            <p>
              StyleCraze’s review board consists of a team of board-certified
              doctors, registered dietitians and nutritionists, dermatologists,
              and beauty and wellness experts who ensure that our articles are
              medically and factually accurate, evidence-based, current,
              relevant, and reader-centric. These highly experienced
              professionals not only verify the content but also add their
              unique perspectives based on their diverse experience and
              backgrounds in research and applied clinical practice. Know more
              about our medical review board and expert panel.
            </p>
          </div>
          <div id="Editorial Policies">
            {" "}
            <h2>Editorial Policies</h2>{" "}
            <p>
              StyleCraze’s review board consists of a team of board-certified
              doctors, registered dietitians and nutritionists, dermatologists,
              and beauty and wellness experts who ensure that our articles are
              medically and factually accurate, evidence-based, current,
              relevant, and reader-centric. These highly experienced
              professionals not only verify the content but also add their
              unique perspectives based on their diverse experience and
              backgrounds in research and applied clinical practice. Know more
              about our medical review board and expert panel.
            </p>
          </div>
          <div id="Our Team">
            {" "}
            <h2>Our Team</h2>{" "}
            <p>
            The editorial team is responsible for managing all of the content on our website. Our experienced and certified editors and writers are specialists in their areas of coverage and break down complex information in a clear, easy-to-understand format.Know more about our editorial and management teams.
            </p>
              </div>
          <div id="Contact Us">
            {" "}
            <h2>Contact Us</h2>{" "}
            <p>
              We highly value your feedback/queries/suggestions. You can send
              them to support@stylecraze.com or contact us here.
              <div>
                <strong>Our Mailing Address:</strong>
                IncNut Stylecraze Private Limited, G-3 (Ground Floor), Modern
                Profound Tech Park, Whitefields, Kondapur, Hyderabad - 500081,
                Telangana
              </div>
            </p>
          </div>
        </main>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}
export default AboutUs;
