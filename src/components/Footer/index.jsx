import React from "react";
import "./footer.css";
import Marker from "../Marker";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__inner_container">
        <div>
          <h2>
            Let’s
            <Marker color={"#82BBFF"} size={"2rem"}>
              {" "}
              work together
            </Marker>{" "}
            on your next product.
          </h2>
        </div>
        <div className="footer__link_container">
          <ul>
            <li>
              <a
                href=""
                style={{
                  color: "#1769FF",
                }}
              >
                Github
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "#1769FF",
                }}
                href=""
              >
                LinkedIn
              </a>{" "}
            </li>
            <li>
              <a
                style={{
                  color: "#AF0C48",
                }}
                href=""
              >
                Email
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
