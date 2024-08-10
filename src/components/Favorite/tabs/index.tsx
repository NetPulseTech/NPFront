import CommonLayout from "@/layout/CommonLayout";
import PageCover from "../Home/PageCover";
import {Col,Container,Input,Nav,NavItem,TabContent,TabPane} from "reactstrap";
import { Href } from "../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { useState } from "react";
import ContentLeft from "../Home/ContentLeft";
import ContentCenter from "../Home/ContentCenter";
import ContentRight from "../Home/ContentRight";
import AboutCard from "../Home/ContentLeft/AboutCard";
import HobbiesAndInterest from "../FavoriteAboutPageContent/HobbiesAndInterest";
import CommonGalleryPhotos from "@/Common/CommonGalleryPhotos";
import { favouritePageTabs } from "@/Data/Favorite";
import ReviewsTabs from "./ReviewsTabs";

const FavouriteTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <CommonLayout mainClass="favourite-page-body  custom-padding " loaderName="favoriteHomePage">
      <div className="page-center">
        <PageCover />
        <div className="profile-menu section-t-space">
          <Nav tabs>
            {favouritePageTabs.map((data, index) => (
              <NavItem key={index}>
                <a href={Href} className={activeTab === index + 1 ? "active" : ""} onClick={() => setActiveTab(index + 1)}>
                  <DynamicFeatherIcon iconName={data.icon} className="iw-14 ih-14"/>
                  <h6>{data.name}</h6>
                </a>
              </NavItem>
            ))}
          </Nav>
          <ul className="right-menu d-xl-flex d-none">
            <li>
              <div className="search-bar input-style icon-left search-inmenu">
                <DynamicFeatherIcon iconName="Search" className="iw-16 ih-16 icon icon-theme"/>
                <Input type="text" placeholder="search here..." />
              </div>
            </li>
          </ul>
        </div>
        <TabContent className="layout-default" activeTab={activeTab}>
          <TabPane tabId={1} className="section-t-space px-0">
            <Container fluid>
              <div className="page-content">
                <ContentLeft />
                <ContentCenter />
                <ContentRight />
              </div>
            </Container>
          </TabPane>
          <TabPane tabId={2} className="section-t-space px-0">
            <Container fluid>
              <div className="page-content">
                <Col xl="4" className="content-left">
                  <div className="sticky-top">
                    <AboutCard />
                  </div>
                </Col>
                <Col xl="8" className="content-center">
                  <HobbiesAndInterest />
                </Col>
              </div>
            </Container>
          </TabPane>
          <TabPane tabId={3} className="section-t-space px-0">
            <ReviewsTabs/>
          </TabPane>
          <TabPane tabId={4} className="section-t-space px-0">
            <Container fluid>
              <div className="page-content">
                <div className="content-center w-100">
                  <CommonGalleryPhotos />
                </div>
              </div>
            </Container>
          </TabPane>
        </TabContent>
      </div>
    </CommonLayout>
  );
};

export default FavouriteTabs;
