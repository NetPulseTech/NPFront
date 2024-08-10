import {  Href, ImagePath,  Weather } from "../../../../utils/constant";
import { FC } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import WeatherDropDown from "./WeatherDropDown";
import Image from "next/image";

const WeatherSection: FC = () => {
  const icons = ["❅", "❆", "❅", "❆", "❅", "❆", "❅", "❆", "❅", "❆", "❅", "❆"];
  return (
    <div className="weather-section section-t-space">
      <div className="card-title light-version">
        <h3>{Weather}</h3>
        <div className="settings">
          <div className="setting-btn light-btn">
            <a href={Href} className="d-flex">
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-light stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
          <WeatherDropDown />
        </div>
      </div>
      <div className="weather-content">
        <div className="top-title">
          <h2>28°C</h2>
          <h5>4.45 pm</h5>
        </div>
        <h5>sunny day</h5>
        <h6>
          21 march 2023 (monday) <span>denmark</span>
        </h6>
      </div>
      <div className="flaks-img">
        <Image width={66} height={66} src={`${ImagePath}/icon/snow-flaks.png`} className="img-fluid blur-up lazyloaded" alt="snow"/>
      </div>
      <div className="snowflakes">
        {icons.map((data, index) => (
          <div key={index} className="snowflake">
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSection;
