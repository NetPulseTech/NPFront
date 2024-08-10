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

const Style4Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body  newsfeed-style2`}>
        <FullSideBar />
        <div className="page-center">
          <StorySection />
          <Container fluid className="section-t-space px-0 layout-default">
            <div className="page-content">
              <div className="content-left">
                <ProfileBox />
                <SuggestionBox />
                <LikePage />
              </div>
              <ContentCenter />
              <div className="content-right">
                <SuggestionBox />
                <div className="sticky-top">
                  <GallerySection />
                  <BirthdayReminder />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default LoaderHoc(Style4Skelton);
