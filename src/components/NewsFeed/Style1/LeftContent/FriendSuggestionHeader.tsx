import { FriendSuggestion, Href } from "../../../../utils/constant";
import { FC } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import FriendSuggestionDropDown from "./FriendSuggestionDropDown";

const FriendSuggestionHeader: FC = () => {
  return (
    <div className="card-title">
      <h3>{FriendSuggestion}</h3>
      <div className="settings">
        <div className="setting-btn">
          <a href={Href} className="d-flex">
            <DynamicFeatherIcon iconName="RotateCw" className="icon icon-theme stroke-width-3 iw-11 ih-11"/>
          </a>
        </div>
        <FriendSuggestionDropDown />
      </div>
    </div>
  );
};

export default FriendSuggestionHeader;
