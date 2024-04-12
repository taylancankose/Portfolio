import React from "react";
import Info from "../Info";
import "./infocard.css";

function InfoCard() {
  return (
    <div className="info_card_container">
      <h3 className="info_card_title">Temel Bilgiler</h3>
      <Info topic={"Doğum tarihi"} detail={"16.05.1996"} />
      <Info topic={"İkamet Şehri"} detail={"İzmir"} />
      <Info topic={"Eğitim Durumu"} detail={"İYTE, Kimya Müh."} />
      <Info topic={"Tercih Ettiği Rol"} detail={"Frontend, Business Analyst"} />
      <Info
        topic={"Sertifikalar & Eğitimler"}
        detail={
          "Full Stack Web Development Workintech, \nThe Mobile App Path with React Native, \nMobile App User Acquisition Course by Tinuiti, \nASO Course by MobileAction, \nFundamentals of Entrepreneurship Draper University"
        }
      />
      <Info
        topic={"Tecrübeler"}
        detail={
          "Salty (Co-Founded $6M+ Valuation), \nMTM (Co-Founded $5M+ Valuation)"
        }
      />
    </div>
  );
}

export default InfoCard;
