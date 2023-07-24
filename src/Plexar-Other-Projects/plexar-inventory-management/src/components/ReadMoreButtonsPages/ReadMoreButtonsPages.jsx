import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import SmartInventoryReportingItemName from "../SmartInventoryReporting/SmartInventoryReporting";
import { HomePageContent } from "../../static/Content";
import { useParams } from "react-router-dom";

const ReadMoreButtonsPages = ({ vol }) => {
  const [pageData, setPageData]= useState([]);
  const { readMorePages } = HomePageContent;
  //   const id = 4;
  // const id = useMyContext()
  // const { value, setValue } = useMyContext();

  // const [idToLoadPage, setidToLoadPage] = useState(value);

  const { id } = useParams();
  // Find the page object that matches the provided id
  useEffect(() => {
    if (id) {
      const filtered = readMorePages.filter((val) => val?.id == id);
      setPageData(filtered);
    }
  }, [id]);

  // if (!page) {
  //   // Handle the case when the page is not found
  //   return <div>Page not found</div>;
  // }

  // const {
  //   heroHeadingWebHomePageTitel,
  //   heroHeadingWeb,
  //   heroHeadingMobilePageTitel,
  //   heroHeadingMobile,
  //   heroParaWeb,
  //   heroParaMobile,
  //   heroLearnMoreButton,
  //   featuresHeadingSectionOne,
  //   featuresParaSectionOne,
  //   readMoreInventoryFeatures,
  //   featuresSectionTwo,
  //   readMoreMannagementFeatures,
  //   contactUsHeading,
  //   contactUsPara,
  //   heroLearnContactUs,
  //   InventoryReportingHeadingBlueLatter,
  //   InventoryReportingHeadingBlackLatter,
  //   InventoryReportingPara,
  //   InventoryReportingItems,
  //   learnMoreInventoryReporting,
  // } = page;

  return (
    <div>
      <Hero
      pageData={pageData}
        // heroHeadingWebHomePageTitel={heroHeadingWebHomePageTitel}
        // heroHeadingWeb={heroHeadingWeb}
        // heroHeadingMobilePageTitel={heroHeadingMobilePageTitel}
        // heroHeadingMobile={heroHeadingMobile}
        // heroParaWeb={heroParaWeb}
        // heroParaMobile={heroParaMobile}
        // heroLearnMoreButton={heroLearnMoreButton}
        // setidToLoadPage={setidToLoadPage}
      />
      <Features
      pageData={pageData}
        // featuresHeadingSectionOne={featuresHeadingSectionOne}
        // featuresParaSectionOne={featuresParaSectionOne}
        // readMoreInventoryFeatures={readMoreInventoryFeatures}
        // featuresSectionTwo={featuresSectionTwo}
        // readMoreMannagementFeatures={readMoreMannagementFeatures}
      />
     <ContactUs
      pageData={pageData}
        // contactUsHeading={contactUsHeading}
        // contactUsPara={contactUsPara}
        // heroLearnContactUs={heroLearnContactUs}
      />
       <SmartInventoryReportingItemName
      pageData={pageData}
      //   InventoryReportingHeadingBlueLatter={
      //     InventoryReportingHeadingBlueLatter
      //   }
      //   InventoryReportingHeadingBlackLatter={
      //     InventoryReportingHeadingBlackLatter
      //   }
      //   InventoryReportingPara={InventoryReportingPara}
      //   InventoryReportingItems={InventoryReportingItems}
      //   learnMoreInventoryReporting={learnMoreInventoryReporting}
      />
    </div>
  );
};

export default ReadMoreButtonsPages;
