import { FC } from "react";
import BirthdayReminder from "./BirthdayReminder";
import Gallery from "./Gallery";
import EventsCard from "./EventsCard";
import YourGames from "./YourGames";

const ContentRight: FC = () => {
  return (
    <div className="content-right">
      <BirthdayReminder />
      <Gallery />
      <div className="sticky-top">
        <EventsCard eventImage={1} />
        <YourGames />
      </div>
    </div>
  );
};

export default ContentRight;
