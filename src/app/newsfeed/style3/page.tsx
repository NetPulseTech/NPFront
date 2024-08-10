"use client";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import CommonLayout from "@/layout/CommonLayout";
import { FC, useEffect } from "react";
import { Container } from "reactstrap";
import ContentCenter from "@/components/NewsFeed/Style3/ContentCenter";
import ContentLeft from "@/components/NewsFeed/Style3/ContentLeft";

const NewsFeedStyle3: FC = () => {
   useEffect(() => {
    setTimeout(() => {
document.documentElement.style.setProperty("--theme-color", "59, 89, 153");
document.documentElement.style.setProperty("--theme-light", "240,243, 249");
    }, 3500);

   return () => {
      document.documentElement.style.setProperty("--theme-color","3, 137, 201");
      document.documentElement.style.setProperty("--theme-light","237, 247, 251");
   };
   }, []);
  return (
    <CommonLayout showFullSideBar mainClass="newsfeed-style1 style-3-bg" loaderName="style3">
      <div className="page-center">
        <StorySection storyShow={6} />
        <Container fluid className="section-t-space px-0">
          <div className="page-content">
            <ContentCenter/>
            <ContentLeft/>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default NewsFeedStyle3;
