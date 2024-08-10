"use client";
import CreatePost from "@/Common/CreatePost";
import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import GemixStore from "@/components/NewsFeed/Style3/ContentCenter/GemixStore";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import WithUserLayout from "@/layout/WithUserLayout";
import { FC, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

const NewsFeedStyle10: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      document.documentElement.style.setProperty("--theme-color","82, 128, 164");
    }, 3500);

    return () => {
      document.documentElement.style.setProperty("--theme-color","3, 137, 201");
    };
  }, []);

  return (
    <WithUserLayout loaderName="style10">
      <div className="page-center">
        <Container fluid className="px-0">
          <div className="page-content">
            <div className="content-center content-full w-100">
              <Row>
                <Col xl="6">
                  <CreatePost />
                  <div className="overlay-bg" />
                  <div className="post-panel section-t-space">
                    <SufiyaElizaThirdPost fourthPost={7} userImage={8} />
                    <GemixStore />
                    <SufiyaElizaThirdPost fourthPost={10} userImage={8} />
                  </div>
                </Col>
                <Col xl="6">
                  <div className="post-panel">
                    <SufiyaElizaThirdPost fourthPost={8} userImage={10} />
                    <SufiyaElizaFirstPost mainImage={9} userImage={11} />
                    <SufiyaElizaMultiplePost
                      moreImage
                      diffrentImage
                      userImage={12}
                      main={4}
                      second={5}
                      third={6}
                    />
                    <SufiyaElizaSecondPost userImage={1} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </WithUserLayout>
  );
};

export default NewsFeedStyle10;
