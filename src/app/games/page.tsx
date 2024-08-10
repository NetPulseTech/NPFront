"use client";
import SvgIconCommon from "@/Common/SvgIconCommon";
import { gameSlider } from "@/Data/SliderOptions";
import GamesFilter from "@/components/Games/GamesFilter";
import GamesSlider from "@/components/Games/GamesSlider";
import GamesCover from "@/components/Games/GamsCover";
import TopGames from "@/components/Games/TopGames";
import EventsCard from "@/components/NewsFeed/Style1/ContentRight/EventsCard";
import CommonLayout from "@/layout/CommonLayout";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";

const Games = () => {
  const images = [3, 2, 1, 3, 2, 1];
  return (
    <CommonLayout mainClass="game-page custom-padding" loaderName="gameSkelton">
      <div className="page-center">
        <GamesCover />
        <div className="event-category music-slider-section section-t-space">
          <div className=" event-title">
            <div className="icon">
              <SvgIconCommon iconName="game-controller" className="fill-white iw-20 ih-20" />
            </div>
            <div className="content">
              <h3>popular in your friends</h3>
            </div>
          </div>
          <Col xs="10" className="suggestion-box">
            <GamesSlider />
          </Col>
        </div>
        <Container fluid className="section-b-space section-t-space px-0">
          <Row>
            <Col xl="6">
              <TopGames />
            </Col>
            <Col xl="6">
              <div className="event-section overflow-hidden">
                <Slider {...gameSlider} className="event_category no-arrow default-space">
                  {images.map((data, index) => (
                    <div key={index}>
                      <EventsCard eventImage={data} />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="filter-section section-b-space">
          <GamesFilter />
        </div>
      </div>
    </CommonLayout>
  );
};

export default Games;
