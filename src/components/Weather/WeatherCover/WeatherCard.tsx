import { FC } from "react";
import CommonHeader from "./Common/CommonHeader";
import Image from "next/image";
import { ImagePath } from "../../../utils/constant";

const WeatherCard: FC = () => {
  const icons = ["❅", "❆", "❅", "❆", "❅", "❆", "❅", "❆", "❅", "❆", "❅", "❆"];

  return (
    <div>
      <div className="weather-section weather-light mt-3">
        <CommonHeader tittle="weather" />
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
          <Image width={66} height={66} src={`${ImagePath}/icon/snow-flaks-blue.png`} className="img-fluid blur-up lazyloaded" alt="snow"/>
        </div>
        <div className="snowflakes">
          {icons.map((data, index) => (
            <div key={index} className="snowflake">
              {data}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
