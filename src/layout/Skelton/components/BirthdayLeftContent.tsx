import { friendSuggestionSliderOption } from "@/Data/SliderOptions";
import { Href } from "../../../utils/constant";
import Slider from "react-slick";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Input } from "reactstrap";

const BirthdayLeftContent = () => {
  return (
    <div className="content-left d-none d-lg-block">
      <div className="profile-box">
        <div className="profile-content">
          <a href={Href} className="image-section">
            <div className="profile-img">
              <div className="bg-loader" />
            </div>
          </a>
          <div className="profile-detail">
            <h2 />
            <h5 />
            <div className="description">
              <p />
              <p />
            </div>
            <div className="counter-stats">
              <span />
            </div>
            <div className="ldr-btn btn" />
          </div>
        </div>
      </div>
      <div className="suggestion-box section-t-space">
        <div className="card-title">
          <h3 />
        </div>
        <div className="suggestion-content ratio_115">
          <Slider
            {...friendSuggestionSliderOption}
            className="slide-2 default-space"
          >
            {dynamicNumber(2).map((index) => (
              <div key={index}>
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
      </div>
      <div className="birthday-section bg-size section-t-space">
        <div className="birthday-top">
          <div className="title">
            <h3 />
            <h6 />
          </div>
        </div>
        <div className="birthday-content">
          <div className="image-section">
            <div className="icon"></div>
            <div className="center-profile"></div>
            <div className="icon"></div>
          </div>
          <div className="details">
            <h3 />
            <h6 />
            <div className="ldr-p">
              <p />
              <p />
            </div>
            <form>
              <Input type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayLeftContent;
