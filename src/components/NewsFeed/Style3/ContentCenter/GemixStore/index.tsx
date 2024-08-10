import { Media } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { Discount, ImagePath, storeHeading, storeSpan } from "../../../../../utils/constant";
import CommonDropDown from "@/Common/CommonDropDown";
import { gemixStoreDroDown } from "@/Data/NewsFeed";
import GemixStoreTitle from "./GemixStoreTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../../utils/constant/index";
import StoreProducts from "./StoreProducts";
import DetailBox from "@/Common/DetailBox";
import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";

const GemixStore = () => {
  return (
    <div className="post-wrapper col-grid-box section-t-space d-block">
      <GemixStoreTitle />
      <div className="post-details">
        <StoreProducts />
        <DetailBox heading={storeHeading} span={storeSpan} />
        <CommonLikePanel />
        <CommonPostReact />
      </div>
    </div>
  );
};

export default GemixStore;
