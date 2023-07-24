import React, { useEffect, useState } from "react";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import SmartInventoryReporting from "../SmartInventoryReporting/SmartInventoryReporting";
import Hero from "../Hero/Hero";
import { HomePageContent, defaultData } from "../../static/Content";
import { useParams } from "react-router-dom";


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
      <Features
        pageData={pageData}
      />
      <ContactUs
      pageData={pageData}
      />
      <SmartInventoryReporting
      pageData={pageData}
      />
    </div>
  );
};

export default Home;
