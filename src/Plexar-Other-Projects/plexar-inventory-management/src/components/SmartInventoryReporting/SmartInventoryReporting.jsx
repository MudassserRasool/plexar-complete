import React from "react";
import "./SmartInventoryReporting.css";
import {
  AiBookingIcon,
  AiPowerAutomationIcon,
  AiScheduler,
  AnimatedStatisticsMobileImage,
} from "../../assets/index";
import { Link } from "react-router-dom";

const smartInventoryReportingItemName = ({pageData}) => {
  return (
    <div className="smartInventoryReportingSectionMarginTop px-2 px-md-0">
      <div className="smartInventoryReportingItemNameSystemContainer container">
        <div className="d-md-flex justify-content-between align-items-center">
          {/* start left text section---------------------------- */}
          <div className="col-md-5">
            <h1 className="smartInventoryReportingSystemHeading">
              <span className="smartInventoryReportingHeadingLatter">{pageData.length > 0 && pageData[0]?.InventoryReportingHeadingBlueLatter}</span> {pageData.length > 0 && pageData[0]?.InventoryReportingHeadingBlackLatter}
            </h1>
            <p className="smartInventoryReportingPara">
              {pageData.length > 0 && pageData[0]?.InventoryReportingPara}
            </p>
            {/* start ai powered items-------------------- */}
            <div className="d-grid reportMannagmentItemsGrid">
              {/* start ai powered item-------------------- */}
              
              {
                pageData.length > 0 && pageData[0]?.InventoryReportingItems.map((mapedItemsData, index)=>(
                  <div className="d-flex gap-4 reportMannagmentItemsTopMargin" key={index}>
                  <img src={mapedItemsData.icon} alt="not found" className="reportMannagmentItemIcon" />
                  <div>
                    <h1 className="smartInventoryReportingItemName">{mapedItemsData.heading}</h1>
                    <p className="smartInventoryReportingDescription">
                      {mapedItemsData.para}
                    </p>
                  </div>
                </div>
                ))
              }
             
              {/* end ai powered item-------------------- */}
              <div className="d-flex justify-content-center  justify-content-md-start">
                <Link
                  className={`text-decoration-none d-${pageData.length > 0 && pageData[0]?.learnMoreInventoryReportingVisibility}`}
                  to={`${pageData.length > 0 && pageData[0]?.learnMoreInventoryReporting}/5`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="learnButtonButtonBoxForsmartInventoryReportingItems ">
                    <p className="text-center  learnButtonCoustomTextInventoryReporting">
                      Learn More
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* end ai powered items-------------------- */}
          </div>
          {/* end left text section---------------------------- */}

          {/* start right text section---------------------------- */}
          <div className="col-md-5 InventoryReportingItemsImgae">
            <img
              src={AnimatedStatisticsMobileImage}
              alt=""
              width={531}
              height={480}
              className="img-fluid"
            />
          </div>
          {/* end right text section---------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default smartInventoryReportingItemName;
