import React from "react";
import "./Features.css";
import {
  CalendexWorkingImage,
  FeaturesOrderTextArrowIcon,
  MannagementGroupWorkingImgae,
} from "..//../assets/index";
import { Link } from "react-router-dom";

const Features = ({ pageData }) => {
  //  ({featuresHeadingSectionOne, featuresParaSectionOne,readMoreInventoryFeatures, featuresSectionTwo, readMoreMannagementFeatures}
  return (
    <div className="featuresMargin px-2 p-md-0">
      <div className="container">
        {/* start upper row------------------------- */}
        <div className="d-md-flex flex-row-reverse align-items-center justify-content-between">
          <div className="col-md-7">
            <img src={CalendexWorkingImage} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <h1 className="plexarFeatureHeading">
              {pageData.length > 0 && pageData[0]?.featuresHeadingSectionOne}
            </h1>
            <p className="plexarFeatureParagraph">{pageData.length > 0 && pageData[0]?.featuresParaSectionOne}</p>

            {/* stat read more and contact us button---------------------- */}
            <div className={`d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0 `}>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`${pageData.length > 0 && pageData[0]?.readMoreFinanceFeatures}`}
                
                className={`text-decoration-none d-${pageData.length > 0 && pageData[0]?.readMoreFinanceFeaturesVisibility}`}
              >
                <div className="btnReadMoreBoxCoustom">
                  <p className="btnReadMoreTextCoustom">Read more</p>
                </div>
              </Link>
              <div className="d-grid">
                <div className="d-flex align-items-center gap-2">
                  <p className="pt-3 orderSimilarText">Contact Us</p>
                  <img
                    src={FeaturesOrderTextArrowIcon}
                    alt="arrow not load"
                    width={18}
                    height={12}
                  />
                </div>
              </div>
            </div>
            {/* end read more and contact us button---------------------- */}
          </div>
        </div>
        {/* end upper row------------------------- */}

        {/* start Lower row------------------------- */}
        <div className="d-md-flex  align-items-center justify-content-between mt-4 gap-3 gap-md-0 pt-4 pt-md-0">
          <div className="col-md-7">
            <img
              src={MannagementGroupWorkingImgae}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            {pageData.length > 0 && pageData[0]?.featuresSectionTwo.map((mapedData, index) => (
              <div>
                <h1 className="groupWorkingHeading">{mapedData.heading}</h1>
                <p className="groupWorkingPara">{mapedData.para}</p>
              </div>
            ))}

            {/* start read more and contact us button---------------------- */}
            <div className="d-flex align-items-center justify-content-around justify-content-sm-start gap-4 mt-4 mt-md-0">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`${pageData.length > 0 && pageData[0]?.readMoreMannagementFeatures}`}
                className={`text-decoration-none d-${pageData.length > 0 && pageData[0]?.readMoreMannagementFeaturesVisibility}`}
              >
                <div className="btnReadMoreBoxCoustom">
                  <p className="btnReadMoreTextCoustom">Read more</p>
                </div>
              </Link>

              <div className="d-grid">
                <div className="d-flex align-items-center gap-2">
                  <p className="pt-3 orderSimilarText">Contact Us</p>
                  <img
                    src={FeaturesOrderTextArrowIcon}
                    alt="arrow not load"
                    width={18}
                    height={12}
                  />
                </div>
              </div>
            </div>
            {/* end read more and contact us button---------------------- */}
          </div>
        </div>
        {/* end Lower row------------------------- */}
      </div>
    </div>
  );
};

export default Features;
