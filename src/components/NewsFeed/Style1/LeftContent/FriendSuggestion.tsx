import { FC } from "react";
import FriendSuggestionHeader from "./FriendSuggestionHeader";
import { ActiveNow, ImagePath } from "../../../../utils/constant";
import { friendSuggestionSlider } from "@/Data/NewsFeed";
import { FriendSuggestionInterFace } from "../Style1Types";
import Slider from "react-slick";
import { friendSuggestionSliderOption } from "@/Data/SliderOptions";

const FriendSuggestion: FC<FriendSuggestionInterFace> = ({ mainClassName }) => {
  return (
    <div
      className={`suggestion-box section-t-space ${
        mainClassName ? mainClassName : ""
      }`}
    >
      <FriendSuggestionHeader />
      <div className="suggestion-content ratio_115">
        <Slider {...friendSuggestionSliderOption} className="slide-2 default-space">
          {friendSuggestionSlider.map((data, index) => (
            <div key={index}>
              <div className="story-box">
                <div className={`adaptive-overlay ${data.className}-overlay`} />
                <div
                  className="story-bg bg-size"
                  style={{
                    backgroundImage: `url("${ImagePath}/story/${data.image}.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                />
                <div className="story-content">
                  <h6>josephin water</h6>
                  <span>{ActiveNow}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FriendSuggestion;
