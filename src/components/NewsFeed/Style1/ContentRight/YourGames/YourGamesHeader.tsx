import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Games, Href, YourGames } from "../../../../../utils/constant";
import { FC } from "react";
import FriendSuggestionDropDown from "../../LeftContent/FriendSuggestionDropDown";

const YourGamesHeader: FC = () => {
  return (
    <div className="card-title">
      <h3>{YourGames}</h3>
      <h5>24 {Games}</h5>
      <div className="settings">
        <div className="setting-btn">
          <a href={Href} className="d-flex">
            <DynamicFeatherIcon
              iconName="RotateCw"
              className="icon icon-theme stroke-width-3 iw-11 ih-11"
            />
          </a>
        </div>
        <FriendSuggestionDropDown />
      </div>
    </div>
  );
};

export default YourGamesHeader;
