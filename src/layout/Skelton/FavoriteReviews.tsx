import React from "react";
import { Container } from "reactstrap";
import LoaderHoc from "../../utils/LoaderHoc";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import { LoadingLoaderProps } from "../LayoutTypes";
import ReviewsLeft from "./ReviewsLeft";
import ConversationPanel from "./common/ConversationPanel";
import PageCover from "./common/PageCover";
import PostWrapper from "./common/PostWrapper";
import ProfileMenu from "./common/ProfileMenu";

const FavoriteReviews: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body  section-t-space px-0`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <PageCover />
          <ProfileMenu />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <ReviewsLeft />
              <div className="content-center col-8">
                <div className="profile-menu section-b-space ms-0 me-0">
                  <ul>
                    <li> </li>
                    <li />
                  </ul>
                </div>
                <div className="post-panel">
                  <PostWrapper />
                  <PostWrapper className="section-t-space" />
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

export default LoaderHoc(FavoriteReviews);
