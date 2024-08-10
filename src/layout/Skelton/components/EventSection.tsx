import { eventSlider } from "@/Data/SliderOptions";
import React from "react";
import Slider from "react-slick";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Href } from "../../../utils/constant";

const EventSection = () => {
  return (
    <div className="event-section">
      <Slider
        className="event_category no-arrow default-space slick-initialized slick-slider"
        {...eventSlider}
      >
        {dynamicNumber(2).map((data) => (
          <div key={data}>
            <div>
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventSection;
