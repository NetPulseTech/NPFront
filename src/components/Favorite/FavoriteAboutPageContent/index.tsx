"use client";
import React, { FC } from "react";
import { Col, Row } from "reactstrap";
import AboutCard from "../Home/ContentLeft/AboutCard";
import HobbiesAndInterest from "./HobbiesAndInterest";

const FavoriteAboutPageContent: FC = () => {
  return (
    <Row>
      <Col xl="4">
        <div className="sticky-top">
          <AboutCard />
        </div>
      </Col>
      <Col xl="8">
        <HobbiesAndInterest />
      </Col>
    </Row>
  );
};

export default FavoriteAboutPageContent;
