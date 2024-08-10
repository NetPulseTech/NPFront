import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../../../utils/constant";
import { Href } from "../../../../../utils/constant/index";
import { FC } from "react";
import { CommonGalleryImageProps } from "../../Style1Types";

const CommonGalleryImage: FC<CommonGalleryImageProps> = ({ imageName,onClickHandle }) => {
  return (
    <div className="overlay" onClick={onClickHandle}>
      <div className="portfolio-image">
        <a href={Href} className="bg-size blur-up lazyloaded">
          <CustomImage
            src={`${ImagePath}/story/${imageName}.jpg`}
            alt="image"
            className="img-fluid blur-up lazyload bg-img"
          />
        </a>
      </div>
    </div>
  );
};

export default CommonGalleryImage;
