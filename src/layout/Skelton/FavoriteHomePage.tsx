import React from "react";
import LoaderHoc from "../../utils/LoaderHoc";
import { LoadingLoaderProps } from "../LayoutTypes";
import { Container } from "reactstrap";
import ConversationPanel from "./common/ConversationPanel";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import PageCover from "./common/PageCover";
import ProfileMenu from "./common/ProfileMenu";
import ProfileBox from "./common/ProfileBox";
import LikePage from "./common/LikePage";
import PostWrapper from "./common/PostWrapper";
import BirthdayReminder from "./common/BirthdayReminder";
import GallerySection from "./common/GallerySection";

const FavoriteHomePage: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body  custom-padding favourite-page-body`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <PageCover />
          <ProfileMenu />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-left">
                <div className="sticky-top">
                  <ProfileBox />
                  <LikePage />
                </div>
              </div>
              <div className="content-center">
                <div className="post-panel">
                  <PostWrapper />
                  <PostWrapper className="section-t-space" />
                </div>
              </div>
              <div className="content-right">
                <div className="sticky-top">
                  <BirthdayReminder />
                  <GallerySection />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(FavoriteHomePage);
