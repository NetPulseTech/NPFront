import CustomImage from "@/Common/CustomImage";
import { Href, ImagePath } from "../../../../../utils/constant";
import React, { FC } from "react";
interface MultipleImageInterFace {
  image: number;
  moreImage?: boolean;
}
const MultipleImage: FC<MultipleImageInterFace> = ({ image, moreImage }) => {
  return (
    <div className={`overlay ${moreImage ?"image-plus":""}`}>
      <div className="portfolio-image">
        <a href={Href}>
          <CustomImage
            src={`${ImagePath}/post/${image}.jpg`}
            alt=""
            className="img-fluid blur-up lazyload bg-img"
          />
          {moreImage && <span>+20</span>}
        </a>
      </div>
    </div>
  );
};

export default MultipleImage;
