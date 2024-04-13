import React, { useContext } from "react";
import "./footer.css";
import Marker from "../Marker";
import { ThemeContext } from "../../context/theme";
import { LocaleContext } from "../../context/locale";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const { lng } = useContext(LocaleContext);
  const { translations } = lng.language;
  return (
    <div
      className="footer__container"
      style={{
        backgroundColor: colors.bgColor,
      }}
    >
      <div className="footer__inner_container">
        <div>
          <h2
            style={{
              color: colors.gray0,
            }}
          >
            {translations["lets"]}
            <Marker color={colors.blue} size={"2rem"}>
              {" "}
              {translations["work-together"]}
            </Marker>{" "}
            {translations["next-product"]}
          </h2>
        </div>
        <div className="footer__link_container">
          <ul>
            <li>
              <a
                href="https://github.com/taylancankose"
                target="_blank"
                style={{
                  color: colors.darkBlue,
                }}
              >
                Github
              </a>
            </li>
            <li>
              <a
                style={{
                  color: colors.darkBlue,
                }}
                href="https://www.linkedin.com/in/taylancankose/"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
            </li>
            <li>
              <a
                style={{
                  color: colors.red,
                }}
                href="mailto:taylancankose@gmail.com"
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
