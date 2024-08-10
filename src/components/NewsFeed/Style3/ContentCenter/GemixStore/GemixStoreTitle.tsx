import CommonDropDown from "@/Common/CommonDropDown";
import CustomImage from "@/Common/CustomImage";
import { gemixStoreDroDown } from "@/Data/NewsFeed";
import { ImagePath } from "../../../../../utils/constant";
import { FC } from "react";
import { Media } from "reactstrap";

const GemixStoreTitle: FC = () => {
  return (
    <div className="post-title">
      <div className="profile">
        <Media>
          <a className="popover-cls user-img bg-size blur-up lazyloaded">
            <CustomImage src={`${ImagePath}/logo/1.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
          </a>
          <Media body>
            <h5>Gemix Store - Online Shopping App</h5>
            <h6>2 mins ago</h6>
          </Media>
        </Media>
      </div>
      <div className="setting-btn ms-auto setting-dropdown no-bg">
        <CommonDropDown mainClassName="icon icon-font-color iw-14" mainIcon="MoreHorizontal" menuList={gemixStoreDroDown}/>
      </div>
    </div>
  );
};

export default GemixStoreTitle;
