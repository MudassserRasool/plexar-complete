import React, { useEffect, useState } from "react";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";
import { HomePageContent, defaultData } from "../../static/Content";
import { useParams } from "react-router-dom";
import AutomateProcess from "../AutomateProcess/AutomateProcess";
import HrResponsibilities from "../HrResponsibilities/HrResponsibilities";


const Home = () => {
  const [pageData, setPageData] = useState([]);
  const { id } = useParams();
  const { readMorePages } = HomePageContent;

  // Find the page object that matches the provided id
  useEffect(() => {
    if (id) {
      const filtered = readMorePages.filter((val) => val?.id === id);
      setPageData(filtered);
    } else {
      setPageData(defaultData);
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

export default Home;
