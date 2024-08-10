"use client";
import ActiveUsers from "@/components/Company/Home/ActiveUsers";
import Blogs from "@/components/Company/Home/Blogs";
import CompanyHomeSection from "@/components/Company/Home/CompanyHome";
import ExploreApp from "@/components/Company/Home/ExploreApp";
import FeatureSection from "@/components/Company/Home/FeatureSection";
import GetInTouchSection from "@/components/Company/Home/GetInTouchSection";
import CompanyHeader from "@/components/Company/Home/Header";
import RegisterSection from "@/components/Company/Home/RegisterSection";
import TapTop from "@/components/Company/Home/TapTop";
import Testimonial from "@/components/Company/Home/Testimonial";
import ThemeCustomizer from "@/layout/CommonLayout/ThemeCustomizer";
import LoadingLoader from "@/layout/LoadingLoader";
import SearchLayoutFooter from "@/layout/SearchLayout/SearchLayoutFooter";
import { useEffect } from "react";

const CompanyHome = () => {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);
  return (
    <>
      <LoadingLoader />
      <CompanyHeader />
      <CompanyHomeSection />
      <FeatureSection />
      <RegisterSection />
      <GetInTouchSection />
      <ActiveUsers />
      <Testimonial />
      <Blogs />
      <ExploreApp />
      <SearchLayoutFooter diffrentImage animation  />
      <TapTop />
      <ThemeCustomizer />
    </>
  );
};

export default CompanyHome;

