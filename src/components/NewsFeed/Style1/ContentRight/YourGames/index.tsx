import CustomImage from "@/Common/CustomImage";
import DynamicFeatherIcon from '@/Common/DynamicFeatherIcon';
import { yourGamesSlider } from "@/Data/SliderOptions";
import { ImagePath } from "../../../../../utils/constant";
import { FC } from "react";
import Slider from "react-slick";
import YourGamesHeader from "./YourGamesHeader";

const YourGames: FC = () => {
  const  totalMember =[15,30,25]
  return (
    <div className="suggestion-box section-t-space">
      <YourGamesHeader />
      <div className="suggestion-content ratio_115">
        <Slider className="slide-2 default-space no-arrow"  {...yourGamesSlider}>
          {totalMember.map((data, index) => (
            <div key={index}>
              <div style={{ width: "100%", display: "inline-block" }}>
                <div className="story-box">
                  <div className="adaptive-overlay " />
                  <div className="story-bg bg-size">
                    <CustomImage src={`${ImagePath}/game/${index+1}.jpg`} className="img-fluid bg-img" alt="game"/>
                  </div>
                  <div className="story-content">
                    <h6>josephin water</h6>
                    <span className="player">
                      <DynamicFeatherIcon iconName="User"  className="icon-light iw-10 ih-10" />
                      {data}k
                    </span>
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

export default YourGames;
