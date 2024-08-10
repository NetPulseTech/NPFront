import CreatePost from "@/Common/CreatePost";
import React, { FC } from "react";
import { Col, Row } from "reactstrap";
import SufiyaElizaThirdPost from "../Style1/ContentCenter/SufiyaElizaThirdPost";
import GemixStore from "../Style3/ContentCenter/GemixStore";
import SufiyaElizaFirstPost from "../Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaMultiplePost from "../Style3/ContentCenter/SufiyaElizaMultiplePost";
import SufiyaElizaSecondPost from "../Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaMapPost from "./SufiyaElizaMapPost";

const CenterContent: FC = () => {
  return (
    <div className="content-center content-full">
      <Row>
        <Col xl="6">
          <CreatePost />
          <div className="overlay-bg" />
          <div className="post-panel section-t-space">
            <SufiyaElizaThirdPost fourthPost={29} userImage={14} />
            <GemixStore />
            <SufiyaElizaThirdPost fourthPost={2} userImage={1} />
          </div>
        </Col>
        <Col xl="6">
          <div className="post-panel">
            <SufiyaElizaMapPost />
            <SufiyaElizaFirstPost mainImage={3} userImage={1}  className="section-t-space" />
            <SufiyaElizaMultiplePost moreImage main={4} second={5} third={6} />
            <SufiyaElizaSecondPost userImage={1} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CenterContent;
