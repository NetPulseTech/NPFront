import CustomImage from "@/Common/CustomImage";
import { ImagePath, OnlineGames } from "../../../utils/constant";
import { Href } from "../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import CommonDropDown from "../../../Common/CommonDropDown";
import { dropDownData } from "@/Data/event";
const GamesCover = () => {
  return (
    <div className="event-cover light-cover">
      <div className="event-img bg-size blur-up lazyloaded">
        <CustomImage
          src={`${ImagePath}/cover/16.jpg`}
          className="img-fluid blur-up bg-img lazyloaded"
          alt="images"
        />
        <div className="event-content">
          <h1>{OnlineGames}</h1>
        </div>
        <div className="cover-img-detail">
          <span>12 dec</span>
          <h3>last added 10 songs</h3>
          <a href={Href}>
            view more <DynamicFeatherIcon iconName="ArrowRight" />
          </a>
        </div>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon
                iconName="RotateCw"
                className="icon icon-dark stroke-width-3 iw-11 ih-11"
              />
            </a>
          </div>
          <div className="setting-btn setting-dropdown">
            <CommonDropDown mainClassName="icon-dark stroke-width-3 icon iw-11 ih-11" mainIcon="Sun" menuList={dropDownData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCover;
