import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import FullSideBar from "./common/FullSideBar";
import StorySection from "./common/StorySection";
import ProfileBox from "./common/ProfileBox";
import LikePage from "./common/LikePage";
import ContentCenter from "./common/ContentCenter";
import SuggestionBox from "./common/SuggestionBox";
import GallerySection from "./common/GallerySection";
import BirthdayReminder from "./common/BirthdayReminder";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import ConversationPanel from "./common/ConversationPanel";

const Style12Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`custom-padding newsfeed-style page-body`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <StorySection />
          <Container fluid className="section-t-space px-0 layout-default">
            <div className="page-content">
              <div className="content-left">
                <ProfileBox />
                <SuggestionBox />
                <div className="sticky-top">
                  <LikePage />
                </div>
              </div>
              <ContentCenter />
              <div className="content-right">
                <BirthdayReminder />
                <GallerySection />
                <div className="sticky-top">
                  <SuggestionBox />
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

export default LoaderHoc(Style12Skelton);
