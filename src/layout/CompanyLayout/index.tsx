import React from "react";
import { CompanyLayoutInterFace } from "../LayoutTypes";
import LoadingLoader from "../LoadingLoader";
import CompanyHeader from "./CompanyHeader";
import CompanyHomeSection from "./CompanyHomeSection";
import SubScribeSection from "../SearchLayout/SubScribeSection";
import SearchLayoutFooter from "../SearchLayout/SearchLayoutFooter";
import ThemeCustomizer from "../CommonLayout/ThemeCustomizer";
import TapTop from "@/components/Company/Home/TapTop";

const CompanyLayout: React.FC<CompanyLayoutInterFace> = ({ children,title }) => {
  return (
    <>
      <LoadingLoader />
      <CompanyHeader/>
      <CompanyHomeSection title={title}/>
      {children}
      <SubScribeSection />
      <SearchLayoutFooter />
      <TapTop />
      <ThemeCustomizer />
    </>
  );
};

export default CompanyLayout;
