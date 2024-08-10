import { musicSlider } from "@/Data/SliderOptions";
import Slider from "react-slick";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";

const MusicSlider = () => {
  return (
    <div className="event-category music-slider-section section-t-space">
      <div className="event-title">
        <div className="content">
          <h3 />
          <h6 />
        </div>
      </div>
      <div className="col-10 suggestion-box">
        <Slider
          className="music-slider ratio_115 no-arrow default-space "
          {...musicSlider}
        >
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
      </div>
    </div>
  );
};

export default MusicSlider;
