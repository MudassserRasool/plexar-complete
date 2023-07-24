import React, {useState} from "react";
import Style from "./HrResponsibilities.module.css";
import { HrResponsibilitiesGirlImage } from "../../assets/index";
import { Link } from "react-router-dom";

const HrResponsibilities = ({ pageData }) => {
    // const [isSelected, setIsSelected] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);

  return (
    <div>
      <div className="">
        <div className="d-flex flex-column flex-md-row">
          {/* start image section-------------------------------------------- */}
          <div className="col-md-6">
            <img
              src={HrResponsibilitiesGirlImage}
              alt="hr girl is not loaded"
              className={`img-fluid bg-primary ${Style.hrGirlImage}`}
            />
          </div>
          {/* end image section-------------------------------------------- */}

          {/* start text section--------------------------------------------------- */}

          <div className="col-md-6 pe-md-4 mt-4">
            <div className="container-md">
              <h1 className={Style.sectionHeading}>
                {pageData.length > 0 && pageData[0]?.hrResponsibilitiesHeading}
              </h1>
              <p className={Style.sectionDiscription}>
                {pageData.length > 0 &&
                  pageData[0]?.hrResponsibilitiesDiscription}
              </p>
              <div className="d-flex flex-column flex-md-row flex-md-wrap  gap-2 mt-4">
                {/* start first card------------------------------------------------- */}
                {pageData.length > 0 &&
                  pageData[0]?.hrResponsibilitiesCards.map((mapedData) => (
                    <div className={`${Style.cardBody} ${selectedCardId === mapedData.id ? Style.selectedCard : ''}`} onClick={() => setSelectedCardId(mapedData.id)}>
                      <div className={Style.cardInnerBox}></div>
                      <h1 className={Style.cardInnerHeading}>
                        {mapedData.heading}
                      </h1>
                      <p className={Style.cardInnerDiscription}>
                        {mapedData.para}
                      </p>
                    </div>
                  ))}

                {/* end first card------------------------------------------------- */}
              </div>
              <Link
                to={`${
                  pageData.length > 0 &&
                  pageData[0]?.learnMoreHrResponsibilities
                }`}
                className={`pb-4 text-decoration-none d-${
                  pageData.length > 0 &&
                  pageData[0]?.learnMoreHrResponsibilitiesVisibility
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className={Style.learnButtonBoxMannagement}>
                  <p className={Style.learnButtonCoustomText}>Learn More</p>
                </div>
              </Link>
            </div>
          </div>

          {/* end text section--------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default HrResponsibilities;
