import React from "react";
import { Container } from "reactstrap";
import LoaderHoc from "../../utils/LoaderHoc";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import { LoadingLoaderProps } from "../LayoutTypes";
import ConversationPanel from "./common/ConversationPanel";
import GallerySkelton from "./common/GallerySkelton";
import PageCover from "./common/PageCover";
import ProfileMenu from "./common/ProfileMenu";

const FavoriteGallery: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className="custom-padding favourite-page-body page-body">
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <PageCover />
          <ProfileMenu />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-center w-100">
                <GallerySkelton />
              </div>
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(FavoriteGallery);
