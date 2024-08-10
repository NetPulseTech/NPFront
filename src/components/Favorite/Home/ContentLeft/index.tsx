import React, { FC } from "react";
import AboutCard from "./AboutCard";
import LikePage from "@/components/NewsFeed/Style1/LeftContent/LikePage";

const ContentLeft: FC = () => {
  return (
    <div className="content-left">
      <div className="sticky-top">
        <AboutCard />
        <LikePage />
      </div>
    </div>
  );
};

export default ContentLeft;
