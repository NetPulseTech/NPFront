import { FC } from "react";
import CustomImage from "@/Common/CustomImage";
import { ImagePath, upcomingBirthday } from "../../utils/constant";
import CommonDropDown from "@/Common/CommonDropDown";
import { dropDownData } from "../../Data/event/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../utils/constant/index";

const BirthDayCover: FC = () => {
  return (
    <div className="event-cover light-cover">
      <div className="event-img bg-size blur-up lazyloaded">
        <CustomImage src={`${ImagePath}/cover/6.jpg`} className="img-fluid blur-up lazyload bg-img" alt="image"/>
        <div className="event-content">
          <h1 className="celebration-txt">{upcomingBirthday}</h1>
        </div>
        <div className="cover-img-detail">
          <span>12 dec</span>
          <h3>Wish Birthday to your friend</h3>
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
          <div className="setting-btn  setting-dropdown">
            <CommonDropDown
              mainClassName="icon-dark stroke-width-3 icon iw-11 ih-11"
              mainIcon="Sun"
              menuList={dropDownData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthDayCover;
