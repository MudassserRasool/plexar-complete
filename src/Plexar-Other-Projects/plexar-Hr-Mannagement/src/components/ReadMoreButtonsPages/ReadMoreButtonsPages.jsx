import React, { useState, useContext, useEffect } from "react";
import Hero from "../Hero/Hero";
import ContactUs from "../ContactUs/ContactUs";
import { HomePageContent } from "../../static/Content";
import { useParams } from "react-router-dom";
import AutomateProcess from "../AutomateProcess/AutomateProcess";
import HrResponsibilities from "../HrResponsibilities/HrResponsibilities";

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
      const filtered = readMorePages.filter((val) => val?.id === id);
      setPageData(filtered);
    }
  }, [id]);

 

  return (
    <div>
      <Hero
      pageData={pageData}
      />
      <AutomateProcess
      pageData={pageData}
      />
       <ContactUs
      pageData={pageData}
      />
      <HrResponsibilities
       pageData={pageData}
      />
    </div>
  );
};

export default ReadMoreButtonsPages;
