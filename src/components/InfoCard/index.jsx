import React, { useContext } from "react";
import Info from "../Info";
import "./infocard.css";
import { AppContext } from "../../context";

function InfoCard() {
  const { appState } = useContext(AppContext);
  const { colors } = appState.theme;
  const { translations } = appState?.locale?.language;

  return (
    <div
      className="info_card_container"
      style={{
        backgroundColor: colors.card,
      }}
    >
      <h3 className="info_card_title">{translations["basic-info"]}</h3>
      <Info topic={translations.birth} detail={"16.05.1996"} />
      <Info topic={translations.location} detail={"İzmir"} />
      <Info topic={translations.education} detail={"İYTE, Kimya Müh."} />
      <Info
        topic={translations.position}
        detail={"Frontend, Business Analyst"}
      />
      <Info
        topic={translations["certificates-coureses"]}
        detail={
          "Full Stack Web Development Workintech, \nThe Mobile App Path with React Native, \nMobile App User Acquisition Course by Tinuiti, \nASO Course by MobileAction, \nFundamentals of Entrepreneurship Draper University"
        }
      />
      <Info
        topic={translations.experience}
        detail={
          "Salty (Co-Founded $6M+ Valuation), \nMTM (Co-Founded $5M+ Valuation)"
        }
      />
    </div>
  );
}

export default InfoCard;
