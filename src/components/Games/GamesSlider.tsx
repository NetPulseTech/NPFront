import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomImage from "../../Common/CustomImage";
import { ImagePath, Play } from "../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../utils/constant/index";
import Slider from "react-slick";
import { musicSlider } from "@/Data/SliderOptions";

const GamesSlider: FC = () => {
  const images = [4,5,6,7,8,9,10,11];
  return (
    <Slider  {...musicSlider} className="music-slider ratio_115 no-arrow default-space">
      {images.map((data, index) => (
        <div key={index}>
          <div>
            <div>
              <div className="story-box">
                <div className="adaptive-overlay" />
                <a className="story-bg bg-size blur-up lazyloaded" href={Href}>
                  <CustomImage src={`${ImagePath}/game/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
                </a>
                <div className="story-content">
                  <h6>josephin water</h6>
                  <span className="player">
                    <DynamicFeatherIcon className="icon-light iw-10 ih-10" iconName="User"/>
                    15k
                  </span>
                </div>
                <a href={Href} className="btn btn-solid play-btn">
                  {Play}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default GamesSlider;
