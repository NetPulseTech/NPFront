"use client";
import ContentCenter from "@/components/NewsFeed/Style1/ContentCenter";
import EventsCard from "@/components/NewsFeed/Style1/ContentRight/EventsCard";
import Gallery from "@/components/NewsFeed/Style1/ContentRight/Gallery";
import YourGames from "@/components/NewsFeed/Style1/ContentRight/YourGames";
import ContentLeft from "@/components/NewsFeed/Style1/LeftContent";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import CollegeMeetCard from "@/components/profile/CollegeMeetCard";
import CommonLayout from "@/layout/CommonLayout";
import { Container } from "reactstrap";

const newsFeedStyle2 = () => {
  return (
    <CommonLayout mainClass="custom-padding" headerClassName="header-light" sideBarClassName="sidebar-white" loaderName="style1" differentLogo="logo-color.png">
      <div className="page-center">
        <StorySection />
        <Container fluid className="section-t-space px-0 layout-default">
          <div className="page-content">
            <ContentLeft />
            <ContentCenter />
            <div className="content-right">
              <CollegeMeetCard />
              <Gallery />
              <div className="sticky-top">
                <EventsCard eventImage={1} />
                <YourGames />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default newsFeedStyle2;
