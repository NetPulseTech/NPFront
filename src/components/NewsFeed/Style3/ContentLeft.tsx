import UserProFile from "@/Common/UserProFile";
import { FC } from "react";
import BirthdayReminder from "../Style1/ContentRight/BirthdayReminder";
import Gallery from "../Style1/ContentRight/Gallery";
import LikePage from "../Style1/LeftContent/LikePage";
import EventsCard from "../Style1/ContentRight/EventsCard";
import FriendSuggestion from "../Style1/LeftContent/FriendSuggestion";
import WeatherSection from "../Style1/LeftContent/WeatherSection";

const ContentLeft: FC = () => {
  return (
    <div className="content-left">
      <UserProFile />
      <BirthdayReminder />
      <Gallery />
      <LikePage />
      <EventsCard eventImage={1} />
      <FriendSuggestion />
      <WeatherSection />
    </div>
  );
};

export default ContentLeft;
