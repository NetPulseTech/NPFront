export const companyNavData = [
  { navigate: "/newsfeed/style1", title: "Home" },
  { navigate: "/company/about", title: "features" },
  { navigate: "/company/careers", title: "testimonial" },
  { navigate: "/company/blog", title: "download" },
  { navigate: "/company/faq", title: "contact" },
  { navigate: "/auth/login", title: "login" },
];

export const companyFeaturesList = [
  {
    imageName: "man",
    detail: "1.5M active user",
    paragraph:
      " We Provide Clean and better interface for easy to use application.",
  },
  {
    imageName: "customer",
    detail: "4.8/5 Ratings",
    paragraph:
      " We design this very much properly, Easy and simple to understand.",
  },
  {
    imageName: "web-page",
    detail: "100K Pages",
    paragraph:
      "  Fully responsive design for user, quick and easy to operate in  device.",
  },
];

interface CompanyCareerInterFace {
  details: string;
  heading: string;
  icon: "Globe" | "Book" | "Coffee" | "Activity" | "Calendar" | "Heart";
}
export const companyCareerDetailsData: CompanyCareerInterFace[] = [
  {
    heading: "work from anywhere",
    details:
      "We are a 100% distributed team. you can work from corner of the world ",
    icon: "Globe",
  },
  {
    heading: "get your learn on",
    details:
      " learn and grow, company offers courses, training, books, conferance.",
    icon: "Book",
  },
  {
    heading: "Perk up",
    details:
      " Monthly coffee budget so you’re not just loitering at coffee shops.",
    icon: "Coffee",
  },
  {
    heading: "gym & gaming",
    details: " company has gym & gaming zone to stay fit and refresh",
    icon: "Activity",
  },
  {
    heading: "family leave",
    details: "3 months paid maternity/paternity leave & 20 holiday for a year.",
    icon: "Calendar",
  },
  {
    heading: "Stay healthy",
    details: " Generous medical and dental for both you and your dependents.",
    icon: "Heart",
  },
];

export const jobResponsibilities = [
  "Perform valid and reliable market research SWOT analysis",
  "Utilize online market research and catalog findings to databases",
  "Devise and evaluate methods for collecting data (Surveys, Questionnaires, Opinion Polls)",
  "Formulate a plan and present it to senior management or a client",
  "Interpret data, formulate reports and make recommendations ",
  "Gather and analyze statistical data using modern and traditional methods to collect it",
  "Design specific research methods such as questionnaires",
  "Remain fully informed on market trends, other parties researches and implement best practices ",
];
