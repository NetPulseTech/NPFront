import CustomImage from "@/Common/CustomImage";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { ImagePath } from "../../../utils/constant";

const MainImage: React.FC = () => {
  return (
    <div className="top-image bg-size blur-up lazyloaded">
      <CustomImage
        src={`${ImagePath}/blog/1.jpg`}
        alt=""
        className="img-fluid blur-up lazyload bg-img"
      />
      <div className="blog-label">
        <h6>
          <DynamicFeatherIcon iconName="Heart" className="iw-13 ih-13" />
          10
        </h6>
        <h6>
          <DynamicFeatherIcon
            iconName="MessageCircle"
            className="iw-14 ih-14"
          />
          5
        </h6>
      </div>
    </div>
  );
};

export default MainImage;
