import { FC } from "react";
import CreatePage from "./CreatePage";
import Gallery from "@/components/NewsFeed/Style1/ContentRight/Gallery";
import EventCard from "./EventCard";

const ContentRight: FC = () => {
  return (
    <div className="content-right">
      <div className="sticky-top">
        <CreatePage />
        <Gallery />
        <EventCard />
      </div>
    </div>
  );
};

export default ContentRight;
