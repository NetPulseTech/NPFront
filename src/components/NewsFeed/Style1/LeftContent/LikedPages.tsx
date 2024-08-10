import { FC } from "react";
import LikePage from "./LikePage";
import WeatherSection from "./WeatherSection";

const LikedPages: FC = () => {
  return (
    <div className="sticky-top">
      <LikePage />
      <WeatherSection />
    </div>
  );
};

export default LikedPages;
