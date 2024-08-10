import { friendSuggestionSliderOption } from "@/Data/SliderOptions";
import { dynamicNumber } from "@/utils/DynamicNumberArray";
import Slider from "react-slick";

const SuggestionBox = () => {
  return (
    <div className="suggestion-box section-t-space">
      <div className="card-title">
        <h3 />
      </div>
      <div className="suggestion-content ratio_115">
        <Slider {...friendSuggestionSliderOption} className="slide-2 no-arrow default-space">
          {dynamicNumber(2).map((data) => (
            <div key={data}>
              <div>
                <div>
                  <div className="story-box">
                    <div className="story-bg bg-size"></div>
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

export default SuggestionBox;
