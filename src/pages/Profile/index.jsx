import React from "react";
import "./profile.css";
import Marker from "../../components/Marker";
import Info from "../../components/Info";

function Profile() {
  return (
    <div className="profile__container">
      <div className="profile__inner_container">
        <h1>Profile</h1>
        <div className="profile__info_container">
          <div className="profile__info_card_container">
            <h3 className="profile__info_card_title">Temel Bilgiler</h3>
            <Info topic={"Doğum tarihi"} detail={"16.05.1996"} />
            <Info topic={"İkamet Şehri"} detail={"İzmir"} />
            <Info topic={"Eğitim Durumu"} detail={"İYTE, Kimya Müh."} />
            <Info
              topic={"Tercih Ettiği Rol"}
              detail={"Frontend, Business Analyst"}
            />
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
          <div className="profile__about_container">
            <h3 className="profile__title">
              <Marker color={"#82BBFF"} size={"1.4rem"}>
                About m
              </Marker>
              e
            </h3>
            <div className="profile__description_container">
              <p>
                After graduating from the Chemical Engineering department in
                2019, I combined my passion for music with my curiosity about
                the entrepreneurship and launched the Meet The Music app. During
                this process, in order to improve myself in the field of
                entrepreneurship, I participated in the University4Society
                entrepreneurship program and became a member of the Superstars
                team, and I also attended the "Fundamentals of Entrepreneurship"
                training organized by Draper University
              </p>
              <br />
              <p>
                In the Meet The Music as a co-founder, we founded “MTM Yazılım
                Dijital Hizmetler A.Ş.” by receiving seed investment from
                Demirhan Büyüközcü, one of the founders of V-Count, Onedio and
                Videodan, with Videodan and Onedio he had successfully exited.
                In this period I worked in various areas such as product
                development, growth, finance, user experience, developing and
                marketing. The Company now has $5M of valuation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
