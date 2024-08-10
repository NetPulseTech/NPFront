import { AddStories, ImagePath } from "../../../../utils/constant";
import Image from "next/image";
import { FC } from "react";

const NewStories: FC = () => {
  return (
    <div className="story-box add-box">
      <div className="bg-size blur-up lazyloaded storySectionAddStories">
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
          <h6>{AddStories}</h6>
        </div>
      </div>
    </div>
  );
};

export default NewStories;
