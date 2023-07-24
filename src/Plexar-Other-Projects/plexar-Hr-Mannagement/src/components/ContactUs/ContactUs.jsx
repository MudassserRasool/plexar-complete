import React from "react";
import "./ContactUs.css";
import { ContactUsAnimation } from "..//../assets/index";
import { Link } from "react-router-dom";
const ContactUs = ({pageData}) => {
  return (
    <div className="coustomContactUsBg px-2 px-md-0">
      <div className="">
        <div className="container">
          <div className="d-md-flex align-items-center">
            {/* start left side-------------------------------- */}
            <div className="col-md-5">
              <img
                src={ContactUsAnimation}
                alt="file not loaded"
                className="markitingImageAligenment img-fluid"
                // width={585}
                // height={515}
              />
            </div>
            {/* end left side-------------------------------- */}
            {/* start right side-------------------------------- */}
            <div className="col-md-6 ms-auto">
              <h1 className="contactUsHeadingMainPage">
                {pageData.length > 0 && pageData[0]?.contactUsHeading}
              </h1>
              <p className="contactUsPara">
               {pageData.length > 0 && pageData[0]?.contactUsPara}
              </p>

              <div className="d-flex justify-content-md-start justify-content-around buttonsRowContactUs">
                <div className="contactUsButtonBox">
                  <p className="contactUsButtonText">Contact Us</p>
                </div>
                <Link className={`text-decoration-none d-${pageData.length > 0 && pageData[0]?.learnMoreContactUsVisibility}`} to={`${pageData.length > 0 && pageData[0]?.learnMoreContactUs}`} onClick={() => window.scrollTo(0, 0)}>
                  <div className="learnButtonBox ms-2">
                    <p className="text-center pt-2 learnButtonCoustomText">
                      Learn More
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* end right side-------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
