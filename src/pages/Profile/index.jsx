import React, { useContext } from "react";
import "./profile.css";
import Marker from "../../components/Marker";
import InfoCard from "../../components/InfoCard";
import { ThemeContext } from "../../context/theme";
import { LocaleContext } from "../../context/locale";

function Profile() {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const { lng } = useContext(LocaleContext);
  const { translations } = lng.language;
  return (
    <div
      className="profile__container"
      style={{
        backgroundColor: colors.gray90,
      }}
    >
      <div className="profile__inner_container">
        <h1
          style={{
            color: colors.gray0,
          }}
        >
          {translations.profile}
        </h1>
        <div className="profile__info_container">
          <InfoCard />
          <div className="profile__about_container">
            <h3
              className="profile__title"
              style={{
                color: colors.gray0,
              }}
            >
              <Marker color={"#82BBFF"} size={"1.4rem"}>
                {translations["about-me"]}
              </Marker>
            </h3>
            <div className="profile__description_container">
              <p
                style={{
                  color: colors.gray0,
                }}
              >
                {translations["about-me-first"]}
              </p>
              <br />
              <p
                style={{
                  color: colors.gray0,
                }}
              >
                {translations["about-me-second"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
