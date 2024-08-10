import { FC } from "react";
import FriendSuggestionDropDown from "./FriendSuggestionDropDown";
import { Href, LikedPages, Pages } from "../../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const LikePageHeader: FC = () => {
  return (
    <div className="card-title">
      <h3>{LikedPages}</h3>
      <h5>18 {Pages}</h5>
      <div className="settings">
        <div className="setting-btn">
          <a href={Href} className="d-flex">
            <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
          </a>
        </div>
        <FriendSuggestionDropDown darkIcon />
      </div>
    </div>
  );
};

export default LikePageHeader;
