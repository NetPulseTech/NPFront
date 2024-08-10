import { eventCategory } from "@/Data/SliderOptions";
import { dynamicNumber } from "@/utils/DynamicNumberArray";
import Slider from "react-slick";
import { Col } from "reactstrap";

const EventCategory = () => {
  return (
    <div className="event-category section-t-space">
      <div className=" event-title">
        <div className="content">
          <h3 />
          <h6 />
        </div>
      </div>
      <Col xs="10" className="suggestion-box">
        <Slider
          className="default-space event-slider ratio_115 no-arrow"
          {...eventCategory}
        >
          {dynamicNumber(3).map((index) => (
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
  );
};

export default EventCategory;
