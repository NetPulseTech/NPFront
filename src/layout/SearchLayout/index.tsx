"use client";
import React, { ReactNode } from "react";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import TopSection from "./TopSection";
import SubScribeSection from "./SubScribeSection";
import SearchLayoutFooter from "./SearchLayoutFooter";
import ThemeCustomizer from "../CommonLayout/ThemeCustomizer";
import LoadingLoader from "../LoadingLoader";
interface SearchLayoutInterface {
  children?: ReactNode;
}
const SearchLayout: React.FC<SearchLayoutInterface> = ({ children }) => {
  return (
    <>
      <LoadingLoader/>
      <CommonLayoutHeader headerClassName="no-sticky bg-transparent" />
      <TopSection />
      {children}
      <SubScribeSection />
      <SearchLayoutFooter />
      <ThemeCustomizer />
    </>
  );
};

export default SearchLayout;
