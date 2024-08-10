"use client";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import CommonLayout from "@/layout/CommonLayout";
import { FC } from "react";
import { Container } from "reactstrap";
import ContentLeft from "@/components/NewsFeed/Style1/LeftContent";
import ContentCenter from "@/components/NewsFeed/Style1/ContentCenter";
import BirthdayReminder from "@/components/NewsFeed/Style1/ContentRight/BirthdayReminder";
import Gallery from "@/components/NewsFeed/Style1/ContentRight/Gallery";
import EventsCard from "@/components/NewsFeed/Style1/ContentRight/EventsCard";
import YourGames from "@/components/NewsFeed/Style1/ContentRight/YourGames";
import CenterContent from "@/components/NewsFeed/Style4/CenterContent";

const NewsFeedStyle1: FC = () => {
  return (
    <CommonLayout
      showFullSideBar
      HideConversationPanel
      mainClass="newsfeed-style2"
      loaderName="style4"
    >
      <div className="page-center">
        <StorySection />
        <Container fluid className="section-t-space px-0 layout-default">
          <div className="page-content">
            <ContentLeft />
            <CenterContent />
            <div className="content-right">
              <YourGames />
              <Gallery />
              <div className="sticky-top">
                <EventsCard eventImage={1} />
                <BirthdayReminder mainClass="section-t-space" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default NewsFeedStyle1;
