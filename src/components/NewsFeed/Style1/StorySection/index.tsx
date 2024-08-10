"use client";
import { FC } from "react";
import NewStories from "./NewStories";
import CommonStoryBox from "./common/CommonStoryBox";
import { overlayName } from "@/Data/NewsFeed";
import { storySliderOption } from "@/Data/SliderOptions";
import Slider from "react-slick";
import { StorySectionProps } from "../Style1Types";

const StorySection: FC<StorySectionProps> = ({storyShow=8}) => {
  return (
    <div className="story-section ratio_115">
      <Slider {...storySliderOption(storyShow)} className="slide-8 no-arrow default-space">
        <div>
          <NewStories />
        </div>
        {overlayName.map((data, index) => (
          <div key={index}>
            <CommonStoryBox key={index} image={data.image} color={data.color} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StorySection;
