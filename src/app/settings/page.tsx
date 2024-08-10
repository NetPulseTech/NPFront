"use client";
import SettingSection from "@/components/settings/SettingSection";
import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import ThemeCustomizer from "@/layout/CommonLayout/ThemeCustomizer";
import LoadingLoader from "@/layout/LoadingLoader";
import SearchLayoutFooter from "@/layout/SearchLayout/SearchLayoutFooter";
import SubScribeSection from "@/layout/SearchLayout/SubScribeSection";
import React from "react";

const Settings = () => {
  return (
    <>
      <LoadingLoader />
      <CommonLayoutHeader headerClassName="header-relative" />
      <SettingSection />
      <SubScribeSection />
      <SearchLayoutFooter />
      <ThemeCustomizer />
    </>
  );
};

export default Settings;
