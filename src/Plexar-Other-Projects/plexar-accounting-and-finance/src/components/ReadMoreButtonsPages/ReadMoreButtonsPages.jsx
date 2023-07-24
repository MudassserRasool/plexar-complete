import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import { HomePageContent } from "../../static/Content";
import { useParams } from "react-router-dom";
import AutomateProcess from "../AutomateProcess/AutomateProcess";

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
      <Features
      pageData={pageData}
      
      />
    
      
    </div>
  );
};

export default ReadMoreButtonsPages;
