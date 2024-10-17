import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";
import "./Kontakt.css";

class Kontakt extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="om-main">
        <Header theme={theme} />
        <Greeting
          theme={theme}
          showButton={false}
          greetingText={
            "SecureByDesign er lavet ud fra ideen om at alle skal kunne føle sig trygge når de bruger en virksomheds platforme"
          }
        />

        <div className="om">
          <div className="om-heading-div">
            <div className="om-heading-text-div">
              <h3 className="om-heading-sub-text">Hvad er SecureByDesign?</h3>
              <p className="om-header-detail-text">
                SecureByDesign er skabt ud fra ideén om at alle skal kunne føle
                sig trygge i at bevæge sig på en virksomheds platform og dele
                deres data. Med flere års erfaring inden for design og udvikling
                af identity and access management system, kan vi hos
                SecureByDesign hjælpe jeres virksomhed med at gøre jeres
                platforme mere sikre.
              </p>
            </div>
          </div>
          <div className="om-heading-div">
            <h3 className="kontakt-heading-sub-text">Kontakt os</h3>
            <div className="kontakt-heading-div">
              <div className="om-heading-img-div">
                <img
                  alt="SecureByDesign logo"
                  src={require("../../assets/images/mail.svg")}
                ></img>
              </div>
              <div className="kontakt-heading-text-div">
                <p className="om-header-detail-text">
                  securebydesign@outlook.com
                </p>
              </div>
            </div>
            <div className="kontakt-heading-div">
              <div className="om-heading-img-div">
                <img
                  alt="SecureByDesign logo"
                  src={require("../../assets/images/phone.svg")}
                ></img>
              </div>
              <div className="kontakt-heading-text-div">
                <p className="om-header-detail-text">
                  +45 27849008 (Efter 15.00)
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Kontakt;
