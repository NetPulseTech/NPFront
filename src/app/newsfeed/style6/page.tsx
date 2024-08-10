"use client";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import { FC } from "react";
import { Col, Container, Row } from "reactstrap";
import HorizontalSidebar from "@/layout/HorizontalSidebar";
import ConversationPanel from "@/layout/CommonLayout/ConversationPanel";
import LeftContent from "@/components/NewsFeed/Style6/LeftContent";
import CreatePost from "@/Common/CreatePost";
import GemixStore from "@/components/NewsFeed/Style3/ContentCenter/GemixStore";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import SufiyaElizaMapPost from "@/components/NewsFeed/Style5/SufiyaElizaMapPost";
import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";

const NewsFeedStyle6: FC = () => {
  return (
    <>
      <HorizontalSidebar loaderName="style6">
        <Container fluid className="page-body  custom-padding newsfeed-style3">
          <div className="page-content content-sidebar m-0">
            <LeftContent />
          </div>
          <div className="page-center">
            <StorySection storyShow={6} />
            <Container fluid className="section-t-space px-0">
              <div className="page-content">
                <div className="content-center content-full">
                  <Row>
                    <Col xl="6">
                      <CreatePost />
                      <div className="overlay-bg" />
                      <div className="post-panel section-t-space">
                        <SufiyaElizaMultiplePost moreImage main={4} second={5}  third={6} />
                        <GemixStore />
                        <SufiyaElizaThirdPost fourthPost={2} userImage={1} />
                      </div>
                    </Col>
                    <Col xl="6">
                      <div className="post-panel">
                        <SufiyaElizaMapPost />
                        <SufiyaElizaFirstPost mainImage={3} userImage={1} className="section-t-space"/>
                        <SufiyaElizaThirdPost userImage={1} iframeLink="https://giphy.com/embed/LMQb9Rpm7mZOVsOI5R"/>
                        <SufiyaElizaSecondPost userImage={1} />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </div>
          <ConversationPanel sidebarClassName=" " />
        </Container>
      </HorizontalSidebar>
    </>
  );
};

export default NewsFeedStyle6;
