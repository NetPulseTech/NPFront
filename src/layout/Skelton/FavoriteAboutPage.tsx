import React from "react";
import { Col, Container, Row } from "reactstrap";
import LoaderHoc from "../../utils/LoaderHoc";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import { LoadingLoaderProps } from "../LayoutTypes";
import Hobbies from "./Hobbies";
import ConversationPanel from "./common/ConversationPanel";
import PageCover from "./common/PageCover";
import ProfileBox from "./common/ProfileBox";
import ProfileMenu from "./common/ProfileMenu";

const FavoriteAboutPage: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body  custom-padding favourite-page-body`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <PageCover />
          <ProfileMenu />
          <Container fluid className="section-t-space px-0">
            <Row>
              <Col xl="4">
                <div className="sticky-top">
                  <ProfileBox />
                </div>
              </Col>
              <Col xl="8">
              <Hobbies/>
              </Col>
            </Row>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(FavoriteAboutPage);
