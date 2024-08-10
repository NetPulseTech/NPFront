import { gameSlider } from "@/Data/SliderOptions";
import { Href } from "../../../utils/constant";
import { dynamicNumber } from "@/utils/DynamicNumberArray";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Media, Row } from "reactstrap";

const GameSkeltonSection = () => {
  return (
    <Container fluid className="section-b-space section-t-space px-0">
      <Row className="page-content ">
        <Col xs="6" className="content-center">
          <div className="playlist-sec">
            <div className="card-title">
              <h3 />
              <div className="settings">
                <div className="setting-btn" />
              </div>
            </div>
            <div className="table-sec">
              <table className="table">
                <tbody>
                  {dynamicNumber(6).map((index) => (
                    <tr key={index}>
                      <td>
                        <Media>
                          <div className="img-sec" />
                          <Media body>
                            <h5 />
                          </Media>
                        </Media>
                      </td>
                      <td>
                        <h5 />
                      </td>
                      <td>
                        <h6 />
                      </td>
                      <td>
                        <h5 />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col xs="6" className="content-center">
          <div className="event-section overflow-hidden">
            <Slider
              {...gameSlider}
              className="event_category no-arrow default-space"
            >
              {dynamicNumber(2).map((index) => (
                <div key={index}>
                  <div style={{ width: "100%", display: "inline-block" }}>
                    <div className="event-box section-t-space ratio2_3">
                      <div className="image-section bg-size">
                        <div className="card-title">
                          <h3 />
                          <div className="settings">
                            <div className="setting-btn">
                              <a href={Href} className="d-flex"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="event-content">
                        <h3 />
                        <h6 />
                        <div className="description">
                          <p />
                          <p />
                        </div>
                        <div className="bottom-part">
                          <div className="ldr-btn btn" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GameSkeltonSection;
