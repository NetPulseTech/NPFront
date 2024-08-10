import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../utils/constant/index";
import FavoriteTable from "./FavoriteTable";
import CommonDropDown from "@/Common/CommonDropDown";
import { favoritePlayListDropDown } from "@/Data/music";

const FavoritePlaylist = () => {
  return (
    <div className="playlist-sec">
      <div className="card-title">
        <h3>favourite playlist</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href} className="d-flex">
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark iw-11 ih-11 stroke-width-3"/>
            </a>
          </div>
          <div className="setting-btn setting-dropdown">
            <CommonDropDown mainClassName="icon-dark stroke-width-3 iw-12 ih-12" mainIcon="Sun" menuList={favoritePlayListDropDown}/>
          </div>
        </div>
      </div>
      <div className="table-sec table-responsive theme-scrollbar">
        <FavoriteTable />
      </div>
    </div>
  );
};

export default FavoritePlaylist;
