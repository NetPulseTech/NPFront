import { AddStory, ImagePath, YourStory } from "../../utils/constant";
import Image from "next/image";
import React, { FC } from "react";
import { Media } from "reactstrap";
import CustomImage from "../CustomImage";

const AddStoryNew: FC = () => {
  return (
    <div className="add-story">
      <h4 className="story-title">{YourStory}</h4>
      <Media className="list-media">
        <div className="story-img">
          <div className="user-img bg-size blur-up lazyloaded">
            <CustomImage src={`${ImagePath}/story-bg.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
          </div>
          <div className="add-icon">
            <div className="icon">
              <Image
                width={10}
                height={12}
                src={`${ImagePath}/icon/plus.png`}
                className="img-fluid blur-up lazyloaded"
                alt="plus"
              />
            </div>
          </div>
        </div>
        <Media body>
          <h5>{AddStory}</h5>
          <h6>share your photos or video</h6>
        </Media>
      </Media>
    </div>
  );
};

export default AddStoryNew;
