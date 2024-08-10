import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import Slider from "react-slick";
import { storySliderOption } from "@/Data/SliderOptions";

const StorySection = () => {
  return (
    <div className="story-section ratio_115">
      <Slider {...storySliderOption(8)} className="slide-8 no-arrow default-space">
        {dynamicNumber(8).map((data) => (
          <div key={data}>
            <div>
              <div style={{ width: "100%", display: "inline-block" }}>
                <div className="story-box">
                  <div className="story-bg bg-size"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StorySection;
