import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import ActivityFeed from "./common/ActivityFeed";
import BirthdayReminder from "./common/BirthdayReminder";
import ContentCenter from "./common/ContentCenter";
import ConversationPanel from "./common/ConversationPanel";
import GallerySection from "./common/GallerySection";
import LikePage from "./common/LikePage";
import ProfileBox from "./common/ProfileBox";
import ProfileTopCommon from "./common/ProfileTopCommon";
import SuggestionBox from "./common/SuggestionBox";

const ProfileTimeLine: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container
        fluid
        className={`custom-padding newsfeed-style page-body profile-page`}
      >
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <ProfileTopCommon />
          <Container fluid className="section-t-space px-0 layout-default">
            <div className="page-content">
              <div className="content-left">
                <ProfileBox />
                <SuggestionBox />
                <div className="sticky-top d-xl-block d-none">
                  <LikePage />
                </div>
              </div>
              <ContentCenter />
              <div className="content-right d-xl-block d-none">
                <BirthdayReminder />
                <GallerySection />
                <ActivityFeed />
              </div>
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(ProfileTimeLine);
