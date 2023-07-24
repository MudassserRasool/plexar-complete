import React from "react";
import "./Footer.css";
import { PlexaarFooterLogo } from "..//../assets/index";
const Footer = () => {
  return (
    <div className="footerSection">
      {/*Start web version---------------------------------- */}
      <div className="container d-none d-md-block">
        <div className="d-grid d-md-flex align-items-center footerContentSetting">
          {/* start first item------------------- */}
          <div className="d-grid w-25">
            <img src={PlexaarFooterLogo} alt="" width={205} height="{105}" />
            <p className="footerLogoDownText">
              Empower Your Business with Modern ERP System - Your Ultimate
              Business Companion.
            </p>
          </div>
          {/* end first item------------------- */}

          {/* start first Links item ------------------- */}
          <div className="d-grid gap-4 w-25 linksSectionOne">
            <h1 className="footerLinkHeading">Useful link</h1>
            <a href="/about" className="footerLinkItem">
              About
            </a>
            <a href="/services" className="footerLinkItem">
              Services
            </a>
            <a href="/works" className="footerLinkItem">
              Works
            </a>
            <a href="/team" className="footerLinkItem">
              Team
            </a>
          </div>
          {/* end first Links item------------------- */}

          {/* start second Links item ------------------- */}
          <div className="d-grid gap-4 w-25 linksSectionTwo">
            <h1 className="footerLinkHeading">Document</h1>
            <a href="/portfolio" className="footerLinkItem">
              Portfolio
            </a>
            <a href="/terms" className="footerLinkItem">
              Term of use
            </a>
            <a href="/privacy" className="footerLinkItem">
              Privacy and policy
            </a>
            <a href="/faq" className="footerLinkItem">
              FAQ
            </a>
          </div>
          {/* end second Links item------------------- */}

          {/* start third Links item ------------------- */}
          <div className=" gap-4 w-25 linksSectionThree">
            <h1 className="footerLinkHeadingAdress">Address</h1>
            <p className="footerLinkItemAdress">
              <p className="footerLinkItem">Plexaar,</p>
              <p className="footerLinkItem">34 sweet street,</p>
              <p className="footerLinkItem">london,UK</p>
            </p>
            <p className="footerLinkItem">+6282637849485</p>
            <p className="footerLinkItem">Info@plexaar.net</p>
          </div>
          {/* end third Links item------------------- */}
        </div>

        <hr className="coustomHrTagStyle" />
      </div>
      {/*End web version---------------------------------- */}

      {/* Start mobile version-------------------------------- */}
<div className="container d-md-none pt-2">
  <div className="d-flex justify-content-between">
    <p className="footerTextPrivacyAndTerm">Trems & Condition</p>
    <p className="footerTextPrivacyAndTerm">Privacy</p>
  </div>
  <div className="d-flex justify-content-center mt-3">
    <p className="footerTextCpyRightUseage">© 2021 Plexaar. All Rights Reserved.</p>
  </div>
</div>
      {/* End mobile version-------------------------------- */}
    </div>
  );
};

export default Footer;
