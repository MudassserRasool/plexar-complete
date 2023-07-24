import {
  AiScheduler,
  AiPowerAutomationIcon,
  AiBookingIcon,
} from "../assets/index";

export const defaultData = [
  {
    id: 1,
    heroHeadingWebHomePageTitel: "Stockpro -",
    heroHeadingWeb: "Make Inventory Management Smarter with AI Technology",
    heroHeadingMobilePageTitel: "Monitor,",
    heroHeadingMobile: "Smarter Inventory Management with AI Technology",
    heroParaWeb:
      "Ready to manage your inventory levels & tracking stock movements in real time. You can create purchase orders, manage supplier information, & generate reports on inventory levels, usage, & costs.",
    heroParaMobile:
      "Create purchase orders, manage supplier information, & generate reports on inventory levels, usage, & costs.",

    heroLearnMoreButton: "/learn-more-stock/1",
    heroLearnMoreButtonVisibility: "block",

    // features component----------------------------------------------
    featuresHeadingSectionOne: "Real-time Inventory Tracking",
    featuresParaSectionOne:
      "Plexaar's Inventory Management module helps users track inventory levels in real time, ensuring they never run out of stock. Users can also set alerts for low stock levels & automate reordering processes.",
    readMoreInventoryFeatures: "/learn-more-stock/2",
    readMoreInventoryFeaturesVisibility: "block",
    featuresSectionTwo: [
      {
        heading: "Stock control & replenishment",
        para: "Keep stock in check & reorder efficiently by simplifying your purchase process.",
      },
      {
        heading: "Purchase & Sales management",
        para: "Streamline your sales process & never miss a beat. Optimize your warehouse organization & location tracking.",
      },
      {
        heading: "Barcode scanning & RFID tracking",
        para: "Scan & track inventory with ease using advanced technology of serial number tracking Inventory forecasting",
      },
    ],
    readMoreMannagementFeatures: "/learn-more-stock",
    readMoreMannagementFeaturesVisibility: "block",

    // contact us component------------------------------------------
    contactUsHeading: "Batch & Serial Number Tracking",
    contactUsPara:
      " The best supporting batch & serial number tracking, helping businesses to track products movement & location accurately with lot & batch tracking, inventory costing & valuation, reorder point & safety stock, and much more.",
    heroLearnContactUs: "/learn-more-stock/4",
    heroLearnContactUsVisibility: "block",
    // smartInventoryReporting---------------------------
    InventoryReportingHeadingBlueLatter: "Inventory",
    InventoryReportingHeadingBlackLatter: "Reports",
    InventoryReportingPara:
      "Helping generate inventory reports, including stock levels, inventory valuation, & inventory turnover.",
    InventoryReportingItems: [
      {
        icon: `${AiScheduler}`,
        heading: "Smart Decisions",
        para: "Helping generate inventory reports, including stock levels, inventory valuation, & inventory turnover.",
      },
      {
        icon: `${AiPowerAutomationIcon}`,
        heading: "Informed Management",
        para: "The reports & ABC analysis help users make informed decisions about their inventory management.",
      },
      {
        icon: `${AiBookingIcon}`,
        heading: "Kit Control",
        para: "Kitting & assembly management, inventory optimization, integration with shipping & fulfillment.",
      },
    ],
    learnMoreInventoryReporting: "/learn-more-stock",
    learnMoreInventoryReportingVisibility: "block",
  },

];

export const HomePageContent = {
  // read more pages------------------------------------------------------------------------------------------
  readMorePages: [
    {
      id: 1,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Track Stock Levels",
      heroHeadingMobilePageTitel: "Monitor,",
      heroHeadingMobile: "Track Stock Levels",
      heroParaWeb:
        "Monitor and manage inventory quantities effectively. With real-time visibility into stock levels, users can ensure optimal inventory levels, avoid stockouts, and efficiently fulfill customer demands.",
      heroParaMobile:
        "Ensure optimal inventory levels, avoid stockouts, and efficiently fulfill customer demands",

      heroLearnMoreButton: "/learn-more-stock/6",
      heroLearnMoreButtonVisibility: "block",

      // features component----------------------------------------------
      featuresHeadingSectionOne: "Stock Movement Tracking",
      featuresParaSectionOne:
        "Track the movement of stock within the warehouse, including incoming shipments, transfers between locations, & outgoing orders.",
      readMoreInventoryFeatures: "/learn-more-stock/7",
      readMoreInventoryFeaturesVisibility: "block",
      featuresSectionTwo: [
        {
          heading: "Stock History and Audit Trail",
          para: "Maintain a detailed history of stock changes and movements, providing a comprehensive audit trail for better traceability.",
        },
        {
          heading: "Serial Number Tracking",
          para: "Assign and track unique serial numbers to individual products, facilitating product identification, & warranty management.",
        },
        {
          heading: "Stock Reconciliation",
          para: "Conduct regular stock reconciliation to compare physical stock counts with recorded quantities, identifying and addressing discrepancies to maintain accurate inventory records.",
        },
      ],
      readMoreMannagementFeatures: "/read-more-mannagment-features",
      readMoreMannagementFeaturesVisibility: "none",

      // contact us component------------------------------------------
      contactUsHeading: "Stock Forecasting",
      contactUsPara:
        " Utilize historical data and predictive analytics to forecast future stock requirements, enabling proactive planning, optimizing inventory levels, & avoiding overstocking.",
      heroLearnContactUs: "/learn-more-contact-us",
      heroLearnContactUsVisibility: "none",

      // smartInventoryReporting---------------------------
      InventoryReportingHeadingBlueLatter: "Stock Status and",
      InventoryReportingHeadingBlackLatter: "Availability",
      InventoryReportingPara:
        "Instantly check the availability and status of each item in stock, providing accurate information to sales teams and ensuring accurate order fulfillment.",
      InventoryReportingItems: [
        {
          icon: `${AiScheduler}`,
          heading: "POS Integration",
          para: "Integrate stock level tracking with other systems, such as point-of-sale (POS) or online stores, for seamless inventory management and accurate stock updates across all channels.",
        },
        {
          icon: `${AiPowerAutomationIcon}`,
          heading: "Informed Management",
          para: "The reports & ABC analysis help users make informed decisions about their inventory management.",
        },
       
      ],
      learnMoreInventoryReporting: "/learn-more-inventory-reporting",
      learnMoreInventoryReportingVisibility: "none",
    },
    {
      id: 2,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Import or Export Inventory",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Import or Export Inventory",
      heroParaWeb:
        "Efficiently import or export inventory data in bulk, saving time and reducing manual data entry. With this feature, users can seamlessly manage inventory updates and maintain accurate records.",
      heroParaMobile:
        "Import or export inventory data in bulk, manage inventory updates and maintain accurate records.",

      heroLearnMoreButton: "/learn-more-stock",
      heroLearnMoreButtonVisibility: "none",
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Data Mapping",
      featuresParaSectionOne:
        "Map imported or exported data fields to match the software's inventory structure, ensuring accurate data transfer and compatibility.",
      readMoreInventoryFeatures: "/read-more-inventory-features",
      readMoreInventoryFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Data Validation",
          para: "Validate imported or exported data to identify and rectify errors or inconsistencies, maintaining data integrity and accuracy.",
        },
        {
          heading: "Bulk Update",
          para: "Update inventory quantities, prices, or other attributes in bulk through the import or export functionality, simplifying mass updates and reducing manual effort.",
        },
        {
          heading: "CSV/Excel Support",
          para: "Import or export inventory data in common file formats like CSV or Excel, providing flexibility and compatibility with various software applications.",
        },
      ],
      readMoreMannagementFeatures: "/read-more-mannagment-features",
      readMoreMannagementFeaturesVisibility: "none",

      // contact us component------------------------------------------
      contactUsHeading: "Automated Import/Export",
      contactUsPara:
        "Schedule recurring imports or exports to automate inventory data synchronization, reducing manual intervention and ensuring up-to-date information.",
      heroLearnContactUs: "/learn-more-contact-us",
      heroLearnContactUsVisibility: "none",

      // smartInventoryReporting---------------------------
      InventoryReportingHeadingBlueLatter: "Mapping ",
      InventoryReportingHeadingBlackLatter: "Templates",
      InventoryReportingPara:
        "Create and save mapping templates to streamline future import or export processes, saving time and ensuring consistency in data transfer.",
      InventoryReportingItems: [
        {
          icon: `${AiScheduler}`,
          heading: "Data Transformation",
          para: "Perform data transformations or calculations during the import or export process, enabling data manipulation to fit specific requirements or formats.",
        },
        {
          icon: `${AiPowerAutomationIcon}`,
          heading: "Customizable Data Filters",
          para: "Apply filters during the import or export process to selectively include or exclude specific inventory data based on predefined criteria, refining data management.",
        },
        {
          icon: `${AiBookingIcon}`,
          heading: "Data Sync",
          para: "Sync inventory data in real-time between Stockpro and external systems, ensuring accurate and up-to-date inventory information across platforms.",
        },
      ],
      learnMoreInventoryReporting: "/learn-more-inventory-reporting",
      learnMoreInventoryReportingVisibility: "none",
    },
    {
      id: 3,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "View Stock on Hand",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "View Stock on Hand",
      heroParaWeb:
        "Get real-time visibility into the current stock levels of the inventory items. By providing accurate and up-to-date information, this feature enables efficient inventory management & accurate order fulfillment.",
      heroParaMobile:
        "Get real-time visibility into the current stock levels of the inventory items with up-to-date information.",

      heroLearnMoreButton: "/learn-more-stock",
      heroLearnMoreButtonVisibility: "none",

      // features component----------------------------------------------
      featuresHeadingSectionOne: "Stock Quantity Display",
      featuresParaSectionOne:
        "Display the available quantity of each inventory item, ensuring users have instant access to the exact stock levels at any given time.",
      readMoreInventoryFeatures: "/read-more-inventory-features",
      readMoreInventoryFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Location-Based Stock View",
          para: "View stock on hand across different warehouse locations or storage areas, facilitating efficient inventory tracking.",
        },
        {
          heading: "Stock Status Indicators",
          para: "Use visual indicators to represent stock availability, such as low stock or out-of-stock alerts, enabling quick identification of items.",
        },
        {
          heading: "Product-Specific Details",
          para: "Provides detailed information about each item, including SKU, description, pricing, and other attributes for accurate stock assessment.",
        },
      ],
      readMoreMannagementFeatures: "/read-more-mannagment-features",
      readMoreMannagementFeaturesVisibility: "none",

      // contact us component------------------------------------------
      contactUsHeading: "Stock History",
      contactUsPara:
        "Access the history of stock movements, including incoming shipments, outgoing orders, and adjustments, providing a historical record of stock changes for reference and analysis.",
      heroLearnContactUs: "learn-more-contact-us",

      // smartInventoryReporting---------------------------
      InventoryReportingHeadingBlueLatter: "Stock Allocation ",
      InventoryReportingHeadingBlackLatter: "Tracking",
      InventoryReportingPara:
        "Track allocated stock for specific orders, ensuring that stock quantities are reserved and accounted for, avoiding overselling and maintaining accurate stock. ",
      InventoryReportingItems: [
        {
          icon: `${AiScheduler}`,
          heading: "Barcode Scanning & Labeling",
          para: "By leveraging barcode technology, businesses can streamline data entry, improve accuracy, and expedite inventory operations.",
        },
        {
          icon: `${AiPowerAutomationIcon}`,
          heading: "Quick Product Identification",
          para: "Scan barcode labels to identify and retrieve product information instantly, eliminating manual search & reducing errors.",
        },
        {
          icon: `${AiBookingIcon}`,
          heading: "Barcode Tracking",
          para: "Scan barcodes to track stock movements, including receiving, picking, packing, and shipping, ensuring accurate inventory records.",
        },
      ],
      learnMoreInventoryReporting: "/learn-more-inventory-reporting",
      learnMoreInventoryReportingVisibility: "none",
    },
    {
      id: 4,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Barcode Generator",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Barcode Generator",
      heroParaWeb:
        "Generate barcode labels in bulk for multiple products, streamlining the labeling process and saving time in manually creating labels one by one.",
      heroParaMobile:
        "Generate barcode labels in bulk for multiple products & save time in manually creating labels.",

      heroLearnMoreButton: "/learn-more-stock",
      heroLearnMoreButtonVisibility: "none",
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Customizable Label Formats",
      featuresParaSectionOne:
        "Create custom label formats with specific information, such as product name, SKU, price, and other attributes, tailoring labels to meet unique business requirements.",
      readMoreInventoryFeatures: "/read-more-inventory-features",
      readMoreInventoryFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Barcode Compatibility",
          para: "Support a wide range of barcode formats, including UPC, EAN, Code 39, Code 128, and more, ensuring compatibility with various industry standards.",
        },
        {
          heading: "Mobile Barcode Scanning",
          para: "Utilize mobile devices equipped with barcode scanning capabilities to scan labels, enabling flexibility and mobility in inventory management.",
        },
        {
          heading: "Add Items to Invoices",
          para: "You can easily select and add the desired products to invoices, ensuring accurate & efficient invoicing for seamless order fulfillment.",
        },
      ],
      readMoreMannagementFeatures: "/read-more-mannagment-features",
      readMoreMannagementFeaturesVisibility: "none",

      // contact us component------------------------------------------
      contactUsHeading: "Product Search and Selection",
      contactUsPara:
        "Quickly search and select products from the inventory database, enabling users to easily locate and add the desired items to invoices.",
      heroLearnContactUs: "/learn-more-contact-us",
      heroLearnContactUsVisibility: "none",

      // smartInventoryReporting---------------------------
      InventoryReportingHeadingBlueLatter: "Quantity and ",
      InventoryReportingHeadingBlackLatter: "Pricing Configuration",
      InventoryReportingPara:
        "Set the quantity and pricing for each item within the invoice, allowing for flexible customization based on pricing agreements.",
      InventoryReportingItems: [
        {
          icon: `${AiScheduler}`,
          heading: "Multiple Unit of Measure",
          para: "Support multiple units of measure for products, facilitating the various units (e.g., pieces, boxes, kilograms) on the same invoice.",
        },
        {
          icon: `${AiPowerAutomationIcon}`,
          heading: "Discounts and Promotions",
          para: "Apply discounts, promotions, or special pricing arrangements to individual items or the overall invoice.",
        },
        {
          icon: `${AiBookingIcon}`,
          heading: "Tax Calculation",
          para: "Automatically calculate taxes based on predefined tax rules and rates, ensuring accurate tax amounts are included in the invoice total.",
        },
      ],
      learnMoreInventoryReporting: "/learn-more-inventory-reporting",
      learnMoreInventoryReportingVisibility: "none",
    },
    {
      id: 5,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Item Descriptions & Notes",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Item Descriptions & Notes",
      heroParaWeb:
        "Add item descriptions or notes to provide additional information or instructions to customers, enhancing clarity and communication within the invoice.",
      heroParaMobile:
        "Add item descriptions or notes to provide additional information or instructions to customers.",

      heroLearnMoreButton: "/learn-more-stock",
      heroLearnMoreButtonVisibility: "none",

      // features component----------------------------------------------
      featuresHeadingSectionOne: "Reorder Point Calculation",
      featuresParaSectionOne:
        "Determine the optimal stock level at which to reorder items, ensuring that inventory is replenished in a timely manner to avoid stockouts.",
      readMoreInventoryFeatures: "/read-more-inventory-features",
      readMoreInventoryFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Lead Time Consideration",
          para: "Account for lead time, in the calculation to ensure that new stock arrives before existing stock runs out.",
        },
        {
          heading: "Sales Velocity Analysis",
          para: "Analyze historical sales data to determine the average rate, allowing for accurate reorder point based on demand patterns.",
        },
        {
          heading: "Safety Stock Adjustment",
          para: "Factor in safety stock, an additional quantity of stock held as a buffer, to account for unexpected demand fluctuations, delays, or supply chain disruptions.",
        },
      ],
      readMoreMannagementFeatures: "/read-more-mannagment-features",
      readMoreMannagementFeaturesVisibility: "none",

      // contact us component------------------------------------------
      contactUsHeading: "Demand Forecasting Integration",
      contactUsPara:
        "Integrate with demand forecasting tools or algorithms to predict future demand trends and incorporate them into the reorder point calculation.",
      heroLearnContactUs: "/learn-more-contact-us",
      heroLearnContactUsVisibility: "none",

      // smartInventoryReporting---------------------------
      InventoryReportingHeadingBlueLatter: "Order Quantities",
      InventoryReportingHeadingBlackLatter: "Optimization",
      InventoryReportingPara:
        "Optimize order quantities by considering factors such as supplier constraints, batch sizes, and economic order quantities (EOQ) to minimize costs.",
      InventoryReportingItems: [
        {
          icon: `${AiScheduler}`,
          heading: "Automatic Reorder Alerts",
          para: "Set up automatic notifications or alerts to trigger when inventory levels reach or fall below the calculated reorder point.",
        },
        {
          icon: `${AiPowerAutomationIcon}`,
          heading: "Connect Ecommerce Platforms",
          para: "Integrate inventory management system with various ecommerce platforms, enabling seamless synchronization of product information & stock levels.",
        },
        // {
        //   icon: `${AiBookingIcon}`,
        //   heading: "Kit Control",
        //   para: "Kitting & assembly management, inventory optimization, integration with shipping & fulfillment.",
        // },
      ],
      learnMoreInventoryReporting: "/learn-more-inventory-reporting",
      learnMoreInventoryReportingVisibility: "none",
    },
    {
      id: 6,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Multi-channel Inventory Sync",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Multi-channel Inventory Sync",
      heroParaWeb:
        "Ensure accurate and real-time inventory synchronization between the inventory management system and multiple ecommerce platforms, preventing overselling and optimizing stock availability.",
      heroParaMobile:
        "Ensure accurate and real-time inventory synchronization with multiple ecommerce platforms.",
  
      heroLearnMoreButton: "/learn-more-stock",
      heroLearnMoreButtonVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Product Listing Management",
      featuresParaSectionOne:
        "Manage product listings directly from the inventory management software, enabling centralized control over product information, pricing, descriptions, and images across different ecommerce platforms.",
      readMoreInventoryFeatures: "/read-more-inventory-features",
      readMoreInventoryFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Order Sync and Fulfillment",
          para: "Automatically sync orders from ecommerce platforms into the inventory system, enabling efficient order processing.",
        },
        {
          heading: "Stock Level Updates",
          para: "Continuously update stock levels based on actual inventory availability, maintaining accurate product listings.",
        },
        {
          heading: "Pricing and Promotions Sync",
          para: "Sync pricing changes, discounts, or promotions, ensuring consistent pricing and promotional strategies for better customer experience.",
        },
      ],
      readMoreMannagementFeatures: "/read-more-mannagment-features",
      readMoreMannagementFeaturesVisibility: "none",
  
      // contact us component------------------------------------------
      contactUsHeading: "Channel-specific Rules and Settings",
      contactUsPara:
        "Configure channel-specific rules, such as shipping methods, tax settings, or currency conversions, to cater to the unique requirements of each ecommerce platform, enhancing operational flexibility and customization.",
      heroLearnContactUs: "/learn-more-contact-us",
      heroLearnContactUsVisibility: "none",
  
      // smartInventoryReporting---------------------------
      InventoryReportingHeadingBlueLatter: "Supplier & Warehouse ",
      InventoryReportingHeadingBlackLatter: "Management",
      InventoryReportingPara:
        "Get efficient management of suppliers and warehouses, enabling businesses to streamline procurement processes, maintain strong supplier relationships, and optimize inventory storage and organization.",
      InventoryReportingItems: [
        {
          icon: `${AiScheduler}`,
          heading: "Supplier Database",
          para: "Maintain a centralized database of suppliers, including contact information, pricing agreements, lead times, and performance metrics.",
        },
        {
          icon: `${AiPowerAutomationIcon}`,
          heading: "Purchase Order Management",
          para: "Create, track, and manage purchase orders, efficiently place orders, receive goods, & maintain accurate records of transactions.",
        },
        {
          icon: `${AiBookingIcon}`,
          heading: "Supplier Performance Tracking",
          para: "Monitor & evaluate supplier performance based on factors such as delivery timeliness, product quality, & responsiveness.",
        },
      ],
      learnMoreInventoryReporting: "/learn-more-inventory-reporting",
      learnMoreInventoryReportingVisibility: "none",
    },
    {
      id: 7,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Warehouse Organization",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Warehouse Organization",
      heroParaWeb:
        "Organize and categorize inventory within warehouses using intuitive labeling systems, bin locations, or barcodes, enhancing inventory visibility, accuracy, and efficient picking and packing processes.",
      heroParaMobile:
        "Categorize inventory within warehouses using intuitive labeling systems, bin locations, or barcodes",
  
      heroLearnMoreButton: "/learn-more-stock",
      heroLearnMoreButtonVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Receiving and Inspection",
      featuresParaSectionOne:
        "Streamline the receiving and inspection process by capturing key information such as quantities received, quality checks, and discrepancies, ensuring accurate inventory updates and prompt resolution of issues with suppliers.",
      readMoreInventoryFeatures: "/read-more-inventory-features",
      readMoreInventoryFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Inventory Allocation",
          para: "Allocate inventory to specific warehouses or storage areas based on demand patterns or geographical considerations.",
        },
        {
          heading: "Dead Stock Identification",
          para: "Allowing for proactive management to minimize holding costs, optimize space utilization, and improve overall inventory turnover.",
        },
        {
          heading: "Stagnant Stock Reporting",
          para: "Generate reports that highlight inventory items with low sales or no activity within a specified time period, providing insights into stagnant stock items.",
        },
      ],
      readMoreMannagementFeatures: "/read-more-mannagment-features",
      readMoreMannagementFeaturesVisibility: "none",
  
      // contact us component------------------------------------------
      contactUsHeading: "Aging Analysis",
      contactUsPara:
        "Analyze the age of inventory to identify items that have been in stock for an extended period, helping businesses focus on older items that are more likely to become dead stock.",
      heroLearnContactUs: "/learn-more-contact-us",
      heroLearnContactUsVisibility: "none",
  
      // smartInventoryReporting---------------------------
      InventoryReportingHeadingBlueLatter: "Inventory Value ",
      InventoryReportingHeadingBlackLatter: "Assessment",
      InventoryReportingPara:
        "Calculating the value tied up in stagnant inventory, enabling make informed decisions regarding liquidation or clearance strategies.",
      InventoryReportingItems: [
        {
          icon: `${AiScheduler}`,
          heading: "Disposal or Liquidation Options",
          para: "Selling through discount channels, donating, or scrapping, to recover some value and free up storage space.",
        },
        {
          icon: `${AiPowerAutomationIcon}`,
          heading: "Demand Forecasting Adjustments",
          para: "Adjust demand forecasting algorithms or models to exclude dead stock items from future projections.",
        },

      ],
      learnMoreInventoryReporting: "/learn-more-inventory-reporting",
      learnMoreInventoryReportingVisibility: "none",
    },
  ],
};
