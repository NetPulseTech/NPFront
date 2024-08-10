import { musicSlider } from "@/Data/SliderOptions";
import Slider from "react-slick";
import { Col, Container } from "reactstrap";
import { dynamicNumber } from "../../utils/DynamicNumberArray";
import LoaderHoc from "../../utils/LoaderHoc";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import { LoadingLoaderProps } from "../LayoutTypes";
import ConversationPanel from "./common/ConversationPanel";
import GameSkeltonSection from "./components/GameSkeltonSection";

const GameSkelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body custom-padding game-page`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <div className="event-cover light-cover">
            <div className="event-img"></div>
          </div>
          <div className="event-category music-slider-section section-t-space">
            <div className=" event-title">
              <div className="content">
                <h3 />
                <h6 />
              </div>
            </div>
            <Col xs="10" className="suggestion-box">
              <Slider {...musicSlider} className="music-slider ratio_115 no-arrow default-space">
                {dynamicNumber(6).map((index) => (
                  <div key={index}>
                    <div>
                      <div style={{ width: "100%", display: "inline-block" }}>
                        <div className="story-box">
                          <div className="story-bg bg-size" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </div>
          <GameSkeltonSection />
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(GameSkelton);
