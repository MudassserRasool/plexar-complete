
import { CashControlIcon, MoneyInfoIcon, MoneyMapingIcon } from "../assets/index";

export const defaultData = [
  {
    id: 1,
    heroHeadingWebHomePageTitel: "Ondel -",
    heroHeadingWeb: "No.1 AI-Powered Accounting Software for Every Business",
    heroHeadingMobilePageTitel: "General ledger",
    heroHeadingMobile: "& bank reconciliation, financial reporting & analysis",
    heroParaWeb:
      "A comprehensive financial management system to track expenses, manage invoices, & process payments. Generate financial reports & gain insights into your business's financial health.",
    heroParaMobile:
      "A comprehensive financial management system to track expenses, manage invoices, & process payments. ",

    heroLearnMoreButton: "/learn-more-finance-mannage/1",
    heroLearnMoreButtonVisibility: "block",

    // Automate process----------------------------------------
    automateProcessHeading: "Automated Invoicing",
    automateProcessPara:
      "Plexaar's Accounting & Finance module automates the invoicing process by generating invoices & sending them to customers automatically. Users can also track payment status & send payment reminders to customers.",
    automateProcessButton: "/learn-more-finance-mannage/2",
    automateProcessButtonVisibility: "block",
    automateProcessItems: [
      {
        icon: `${CashControlIcon}`,
        heading: "The Money Map",
        para: "General ledger & chart of accounts, Accounts payable & receivable, Tax management & compliance.",
      },
      {
        icon: `${MoneyInfoIcon}`,
        heading: "Cash Control",
        para: "Bank reconciliation & cash management, Budgeting & forecasting, Fixed asset management.",
      },
      {
        icon: `${MoneyMapingIcon}`,
        heading: "Know Your Money",
        para: "Financial reporting & analysis, Credit control & collections, Billing & invoicing, Multi-currency.",
      },
    ],

    // contact us component------------------------------------------
    contactUsHeading: "Finance Management",
    contactUsPara:
      "Analyze your financial data with powerful analytics tools, including charts, graphs, and other visualizations. Create budgets for your business & track your progress towards your financial goals. Set up alerts when you're getting close to your budget limits.",
    learnMoreContactUs: "/learn-more-finance-mannage/3",
    learnMoreContactUsVisibility: "block",

    // features component----------------------------------------------
    featuresHeadingSectionOne: "Comprehensive Financial Reports",
    featuresParaSectionOne:
      "Keep track of your business’s financial health by effectively tracking progress, budgeting and analyzing the daily finance reports to reduce the cost.",
    readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
    readMoreFinanceFeaturesVisibility: "block",
    featuresSectionTwo: [
      {
        heading: "Visualize your financial story",
        para: "Analyze your financial data with powerful analytics tools, including charts, graphs, and other visualizations.",
      },
      {
        heading: "Budget like a boss",
        para: "Create budgets for your business and track your progress towards your financial goals.",
      },
      {
        heading: "Don't overspend, get notified",
        para: "You can also set up alerts to notify you when you're getting close to your budget limits.",
      },
    ],
    readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
    readMoreMannagementFeaturesVisibility: "block",
  },
];

export const HomePageContent = {
  // read more pages------------------------------------------------------------------------------------------
  readMorePages: [
    {
      id: 1,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "General Ledger Management",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "General Ledger Management",
      heroParaWeb:
        "Manage your financial records with Ondel's General Ledger Management system. Stay organized, track transactions, and gain valuable insights into your company's financial health.",
      heroParaMobile:
        "Stay organized, track transactions, and gain valuable insights into your company's financial health.",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/6",
      heroLearnMoreButtonVisibility: "block",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Transaction Tracking",
      automateProcessPara:
        "Record and track all financial transactions in one central location, ensuring accuracy and transparency.",
      automateProcessButton: "/learn-more-finance-mannage/7",
      automateProcessButtonVisibility: "block",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Journal Entries",
          para: "Easily create and manage journal entries to document various financial activities and maintain an accurate record.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Account Balances",
          para: "Keep track of account balances in real-time, ensuring a clear overview of your financial standing.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Chart of Accounts",
          para: "Customize and organize your chart of accounts to align with your specific business needs and reporting requirements.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Account Reconciliation",
      contactUsPara:
        "Improve the process of reconciling accounts, ensuring accuracy and identifying discrepancies.",
      learnMoreContactUs: "/learn-more-finance-mannage/8",
      learnMoreContactUsVisibility: "block",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Financial Reporting",
      featuresParaSectionOne:
        "Generate comprehensive financial reports, including balance sheets, income statements, and cash flow statements, to analyze your company's financial performance.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/9",
      readMoreFinanceFeaturesVisibility: "block",
      featuresSectionTwo: [
        {
          heading: "Audit Trail",
          para: "Maintain a detailed audit trail of all financial transactions, providing transparency and compliance with regulatory standards.",
        },
        {
          heading: "Intercompany Transactions",
          para: "Manage transactions between multiple entities or subsidiaries within your organization, ensuring accurate intercompany accounting.",
        },
        {
          heading: "Closing & Year-End Processes",
          para: "Simplify the closing and year-end processes with automated workflows, reducing manual effort and improving efficiency.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
    {
      id: 2,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Integration with Other Modules",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Integration with Other Modules",
      heroParaWeb:
        "Integrate General Ledger Management with other accounting modules, such as accounts payable and accounts receivable, for a comprehensive financial management solution.",
      heroParaMobile:
        "Integrate with other accounting modules, such as accounts payable and accounts receivable.",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Accounts Receivable & Payable",
      automateProcessPara:
        "Manage your business's cash flow effortlessly. Spruce up your invoicing, track payments, and stay on top of your financial transactions.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Invoicing Automation",
          para: "Create and send professional invoices to your customers with ease, reducing manual effort and improving efficiency.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Aging Reports",
          para: "Gain insights into the status of your receivables and payables with aging reports, helping you identify outstanding balances and take necessary actions.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Customer Statements",
          para: "Generate detailed statements for your customers, providing them with a clear overview of their outstanding balances and payment history.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Payment Reminders",
      contactUsPara:
        "Automate payment reminders to customers, reducing late payments and improving collection rates.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Vendor Management",
      featuresParaSectionOne:
        "Reform your payables by managing vendor information, tracking payment due dates, and ensuring timely payments.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Purchase Orders",
          para: "Create and manage purchase orders to track expenses, improve accuracy, and streamline the procurement process.",
        },
        {
          heading: "Expense Tracking",
          para: "Record and track business expenses, ensuring accurate financial reporting and expense management.",
        },
        {
          heading: "Payment Integration",
          para: "Integrate with payment gateways to facilitate online payments from customers, offering convenience and improving cash flow.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
    {
      id: 3,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Cash Flow Analysis",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Cash Flow Analysis",
      heroParaWeb:
        "Analyze your receivables and payables data to gain insights into your cash flow patterns and make informed financial decisions.",
      heroParaMobile:
        "Analyze your receivables and payables data to gain insights into your cash flow patterns.",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Bank Reconciliation",
      automateProcessPara:
        "Reconcile your financial records with Ondel's Bank Reconciliation system effortlessly. Keep your accounts in sync, identify discrepancies, and ensure accurate financial reporting.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Automated Matching",
          para: "Automatically match your bank transactions with your accounting records, saving time and ensuring accuracy.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Statement Import",
          para: "Easily import bank statements into the software, streamlining the reconciliation process and reducing manual data entry.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Discrepancy Detection",
          para: "Identify and resolve discrepancies between your bank statements and accounting records, ensuring accurate financial reporting.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Clearing and Adjustments",
      contactUsPara:
        "Efficiently clear and adjust transactions, ensuring your books reflect the correct balances and improving reconciliation accuracy.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Bank Statement Reconciliation",
      featuresParaSectionOne:
        "Reconcile your bank statements with ease, ensuring that your records align with your actual bank balances.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Error Resolution",
          para: "Quickly identify and rectify errors or missing transactions, maintaining accurate financial records.",
        },
        {
          heading: "Reconciliation Reports",
          para: "Generate comprehensive reports that provide a clear overview of the reconciliation process, helping you track progress and ensure completeness.",
        },
        {
          heading: "Multiple Account Support",
          para: "Reconcile multiple bank accounts simultaneously, simplifying the reconciliation process for businesses with complex financial structures.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
    {
      id: 4,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Integration with Bank Feeds",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Integration with Bank Feeds",
      heroParaWeb:
        "Optimally connect with bank feeds to automatically import transactions, improving efficiency and accuracy in the reconciliation process.",
      heroParaMobile:
        "Connect with bank feeds to import transactions, improving accuracy in the reconciliation process.",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Cash Flow Management",
      automateProcessPara:
        "Take control of your business's financial health with Cash Flow Management. Monitor, analyze, and optimize your cash flow for improved financial stability.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Cash Flow Tracking",
          para: "Gain real-time visibility into your cash inflows and outflows, helping you understand and manage your business's liquidity.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Receivables and Payables Management",
          para: "Effectively manage your receivables and payables to optimize cash flow, minimize delays, and improve collections.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Expense Monitoring",
          para: "Track and analyze your business expenses to identify areas where cost savings can be made and optimize cash flow.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Cash Flow Projections",
      contactUsPara:
        "Generate detailed cash flow projections to assess future cash availability and make informed financial decisions.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Cash Flow Analysis",
      featuresParaSectionOne:
        "Analyze your cash flow patterns, identify trends, and pinpoint areas for improvement or potential risks.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Working Capital Optimization",
          para: "Optimize your working capital by efficiently managing inventory levels, accounts receivable, and accounts payable.",
        },
        {
          heading: "Cash Flow Reporting",
          para: "Generate comprehensive cash flow reports that provide insights into your cash position and help in financial analysis.",
        },
        {
          heading: "Integration with Financial Accounts",
          para: "Coherently integrate with your bank accounts and financial institutions for modernized cash flow management.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
    {
      id: 5,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Tax Management",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Tax Management",
      heroParaWeb:
        "Make your tax processes smooth and stay compliant with Ondel's Tax Management system. Readily manage taxes, reduce errors, and update your tax filing.",
      heroParaMobile:
        "Make your tax processes smooth and stay compliant with Ondel's Tax Management system. ",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Tax Calculation & Tracking",
      automateProcessPara:
        "Automate tax calculations and track tax liabilities accurately, eliminating manual errors and saving time.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Tax Filing Assistance",
          para: "Receive guidance and support in preparing and filing tax returns, ensuring compliance with tax regulations and deadlines.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Tax Deductions and Credits",
          para: `Organize and store tax-related documents securely, making tax audits and inquiries hassle-free.
          Multi-Jurisdiction Support: Handle taxes for different jurisdictions and regions, ensuring compliance with specific tax laws and regulations.`,
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Tax Remittance Tracking",
          para: "Track tax payments and remittances, avoiding penalties and late fees for timely and accurate tax submissions.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Tax Reporting and Analytics",
      contactUsPara:
        "Generate comprehensive tax reports and gain insights into your tax obligations, aiding in financial planning and analysis.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Compliance Monitoring",
      featuresParaSectionOne:
        "Stay updated with tax law changes and regulations, ensuring ongoing compliance and minimizing the risk of penalties.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Integration with Tax Software",
          para: "Comprehensively integrate with external tax software for well-defined data transfer and enhanced tax management capabilities.",
        },
        {
          heading: "Audit Support",
          para: "Facilitate tax audits by maintaining organized records, providing necessary documentation, and ensuring accuracy in tax filings.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },

    // sub pages of the 1st sub page (General Ledger Management)------------------------------------------------------------------------------
    {
      id: 6,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Payroll Processing",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Payroll Processing",
      heroParaWeb:
        "Manage your employees' salaries and ensure accurate and timely payroll with Payroll Processing. Upgrade your payroll processes and eliminate manual calculations.",
      heroParaMobile:
        "Manage your employees' salaries and ensure accurate and timely payroll with Payroll Processing. ",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Automated Payroll Calculations",
      automateProcessPara:
        "Automate payroll calculations based on employee hours, rates, and deductions, reducing errors and saving time.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Direct Deposit",
          para: "Facilitate direct deposit payments to employees' bank accounts, simplifying the payroll distribution process.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Payroll Scheduling",
          para: "Set up recurring payroll schedules to ensure timely payment to employees, improving employee satisfaction.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Deductions and Benefits Management",
          para: "Manage employee deductions, benefits, and allowances, accurately reflecting them in payroll calculations.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "PTO & Leave Tracking",
      contactUsPara:
        "Track employee paid time off (PTO), leaves, and absences for accurate payroll calculation and leave management.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Payroll Reporting",
      featuresParaSectionOne:
        "Generate comprehensive payroll reports for record-keeping, auditing, and financial analysis purposes.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Tax Forms Preparation",
          para: "Prepare and generate necessary tax forms, such as W-2s and 1099s, ensuring compliance with tax reporting requirements.",
        },
        {
          heading: "Payroll Compliance",
          para: "Stay updated with payroll regulations and laws, ensuring compliance with labor and wage regulations.",
        },
        {
          heading: "Integration with Time & Attendance Systems",
          para: "Systematically integrate with time and attendance systems to streamline payroll calculations based on employee attendance records.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
    {
      id: 7,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Compliance & Regulatory Reporting",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Compliance & Regulatory Reporting",
      heroParaWeb:
        "Stay compliant and make more efficient the reporting processes. Get the details of compliance, mitigate risks, and ensure accurate regulatory reporting.",
      heroParaMobile:
        "Get the details of compliance, mitigate risks, and ensure accurate regulatory reporting.",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Regulatory Reporting Templates",
      automateProcessPara:
        "Access pre-built templates for various regulatory reports, ensuring adherence to reporting requirements.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Data Validation and Accuracy",
          para: "Validate data for accuracy and completeness, reducing errors in regulatory reporting.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Compliance Monitoring and Alerts",
          para: "Monitor compliance with regulatory requirements and receive alerts for any potential non-compliance issues.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Regulatory Filings and Submissions",
          para: `Prepare and submit regulatory reports and filings in a timely and accurate manner.
          Data Integration and Consolidation: Integrate data from various sources and consolidate information for seamless regulatory reporting.
          `,
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Record Keeping and Retention",
      contactUsPara:
        "Maintain organized records and ensure proper retention of regulatory documentation for compliance purposes.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Regulatory Change Management",
      featuresParaSectionOne:
        "Stay updated with regulatory changes and adapt reporting processes accordingly to ensure ongoing compliance.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Workflow Automation",
          para: "Automate workflows for regulatory reporting, improving efficiency and reducing manual efforts.",
        },
        {
          heading: "Collaboration and Approval Workflow",
          para: "Facilitate collaboration and implement approval workflows for regulatory reporting processes.",
        },
        {
          heading: "Fixed Assets Management",
          para: "Efficiently track and manage your organization's fixed assets. Handle your asset management with ease, optimize depreciation, and enhance financial control.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
    {
      id: 8,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Asset Tracking and Inventory",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Asset Tracking and Inventory",
      heroParaWeb:
        "Track and manage your organization's fixed assets, ensuring accurate records and preventing loss or misplacement.",
      heroParaMobile:
        "Track and manage your organization's fixed assets, ensuring accurate records and preventing loss or misplacement.",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Depreciation Calculation",
      automateProcessPara:
        "Automate depreciation calculations based on predefined methods, simplifying financial reporting and compliance.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Maintenance Scheduling and Tracking",
          para: "Schedule and track asset maintenance activities to ensure optimal performance and prolong asset lifespan.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Asset Valuation and Appraisal",
          para: "Evaluate and appraise the value of fixed assets periodically, providing accurate financial insights.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Asset Disposal and Retirement",
          para: "Manage the disposal or retirement of fixed assets, adhering to regulatory and accounting requirements.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Asset Categories and Classification",
      contactUsPara:
        "Maintain a comprehensive asset history and audit trail, enabling accurate asset tracking and accountability.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Asset Insurance and Warranty Tracking",
      featuresParaSectionOne:
        "Monitor insurance coverage and warranty details for fixed assets, ensuring proper risk management.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Lease Management",
          para: "Track leased assets, monitor lease terms, and manage lease contracts, optimizing financial control.",
        },
        {
          heading: "Budgeting & Forecasting",
          para: "Effectively plan and analyze your organization's financial performance with Ondel's Budgeting & Forecasting feature. Contemporize your budget creation, monitor variances, and make informed decisions.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
    {
      id: 9,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Dynamic Budget Creation",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Dynamic Budget Creation",
      heroParaWeb:
        "Create comprehensive budgets based on historical data, projections, and business goals, ensuring accurate financial planning.",
      heroParaMobile:
        "Create comprehensive budgets based on historical data, projections, and business goals.",
  
      heroLearnMoreButton: "/learn-more-finance-mannage/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Forecasting and Predictive Analytics",
      automateProcessPara:
        "Utilize forecasting techniques and predictive analytics to project future financial performance and identify trends.",
      automateProcessButton: "/learn-more-finance-mannage/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Scenario Analysis",
          para: `Conduct "what-if" scenarios to assess the impact of different financial variables and optimize budgeting strategies.`,
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Collaborative Budgeting",
          para: "Facilitate collaboration among team members during the budgeting process, improving accuracy and stakeholder engagement.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Revenue Forecasting",
          para: "Forecast revenue based on market trends, historical data, and sales projections, improving financial accuracy.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Automated Reporting",
      contactUsPara:
        "Generate comprehensive budget reports and financial statements automatically, saving time and improving data accuracy.",
      learnMoreContactUs: "/learn-more-finance-mannage/3",
      learnMoreContactUsVisibility: "none",
  
      // features component----------------------------------------------
      featuresHeadingSectionOne: "Budget Approval Workflow",
      featuresParaSectionOne:
        "Implement an approval workflow for budget submissions, ensuring accountability and adherence to financial guidelines.",
      readMoreFinanceFeatures: "/learn-more-finance-mannage/4",
      readMoreFinanceFeaturesVisibility: "none",
      featuresSectionTwo: [
        {
          heading: "Tax Forms Preparation",
          para: "Prepare and generate necessary tax forms, such as W-2s and 1099s, ensuring compliance with tax reporting requirements.",
        },
        {
          heading: "Payroll Compliance",
          para: "Stay updated with payroll regulations and laws, ensuring compliance with labor and wage regulations.",
        },
        {
          heading: "Integration with Time & Attendance Systems",
          para: "Systematically integrate with time and attendance systems to streamline payroll calculations based on employee attendance records.",
        },
      ],
      readMoreMannagementFeatures: "/learn-more-finance-mannage/5",
      readMoreMannagementFeaturesVisibility: "none",
    },
  ],
};
