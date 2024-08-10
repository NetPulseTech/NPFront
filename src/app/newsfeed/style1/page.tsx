"use client";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import CommonLayout from "@/layout/CommonLayout";
import { FC } from "react";
import { Container } from "reactstrap";
import ContentLeft from "@/components/NewsFeed/Style1/LeftContent";
import ContentCenter from "@/components/NewsFeed/Style1/ContentCenter";
import ContentRight from "@/components/NewsFeed/Style1/ContentRight";

const NewsFeedStyle1: FC = () => {
  return (
    <CommonLayout mainClass="custom-padding" loaderName="style1"> 
      <div className="page-center">
        <StorySection storyShow={8} />
        <Container fluid className="section-t-space px-0 layout-default">
          <div className="page-content">
            <ContentLeft />
            <ContentCenter />
            <ContentRight />
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default NewsFeedStyle1;
