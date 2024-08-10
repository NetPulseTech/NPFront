import { FC } from "react";
import CustomImage from "@/Common/CustomImage";
import { ImagePath, SvgPath, WeatherForCast } from "../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import CommonDropDown from "../../../Common/CommonDropDown";
import { dropDownData, weatherCoverData } from "../../../Data/Weather/index";
import Image from "next/image";
import { Media } from "reactstrap";
import { Href } from '../../../utils/constant/index';

const WeatherCover: FC = () => {
  return (
    <div className="event-cover bg-theme">
      <div className="event-img bg-size blur-up lazyloaded">
        <CustomImage src={`${ImagePath}/weather.jpg`} className="img-fluid blur-up lazyload bg-img" alt="image"/>
        <div className="event-content">
          <h1>{WeatherForCast}</h1>
        </div>
        <div className="cover-img-detail">
          <span>12 dec, 2023</span>
          <h3>London, United kingdom</h3>
        </div>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
          <div className="setting-btn setting-dropdown">
            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
              <CommonDropDown mainIcon="Sun" mainClassName="icon-dark stroke-width-3 icon iw-11 ih-11" menuList={dropDownData}/>
            </div>
          </div>
        </div>
      </div>
      <div className="event-timeline weather-timeline">
        <div className="timeline-title">
          <Media>
            <img src={`${ImagePath}/icon/event.png`} className="img-fluid blur-up lazyloaded" alt=""/>
            <Media body>
              <h4>hourly forecast</h4>
            </Media>
          </Media>
        </div>
        <ul className="timeline-content theme-scrollbar">
          {weatherCoverData.map((data, index) => (
            <li key={index}>
              <Image src={`${SvgPath}/weather/001lighticons-${data.imageName}.svg`} alt="image" width={60} height={60}/>
              <h4>{data.temperature}º</h4>
              <h6>{data.time}.00 AM</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherCover;
