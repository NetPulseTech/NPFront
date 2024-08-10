import React from "react";
import LoaderHoc from "../../utils/LoaderHoc";
import { LoadingLoaderProps } from "../LayoutTypes";
import { Container } from "reactstrap";
import ConversationPanel from "./common/ConversationPanel";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import EventCover from "./components/EventCover";
import MusicSlider from "./components/MusicSlider";
import BottomSection from "./components/BottomSection";
import WeatherSection from "./components/WeatherSection";

const WeatherSkelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body custom-padding weather-page`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <EventCover />
          <WeatherSection/>
          
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(WeatherSkelton);
