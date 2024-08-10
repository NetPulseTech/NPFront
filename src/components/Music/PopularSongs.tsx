import CommonDropDown from "@/Common/CommonDropDown";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import {dropDownData,favoritePlayListDropDown,popularSongsList} from "@/Data/music";
import { PopularSongsHeading } from "../../utils/constant";
import { FC } from "react";
import { Media } from "reactstrap";
import { Href } from '../../utils/constant/index';

const PopularSongs: FC = () => {
  return (
    <div className="playlist-sec">
      <div className="card-title">
        <h3>{PopularSongsHeading}</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href} className="d-flex">
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark iw-11 ih-11 stroke-width-3"/>
            </a>
          </div>
          <div className="setting-btn  setting-dropdown">
            <CommonDropDown mainClassName="icon-dark stroke-width-3 iw-12 ih-12" mainIcon="Sun" menuList={favoritePlayListDropDown}/>
          </div>
        </div>
      </div>
      <div className="popular-song-sec">
        <ul>
          {popularSongsList.map((data, index) => (
            <li key={index}>
              <Media>
                <div className="icon-play">
                  <DynamicFeatherIcon iconName="Play" className="icon-theme iw-18 ih-18"/>
                </div>
                <Media body> <h5>{data.name}</h5> <h6>{data.author}</h6></Media>
              </Media>
              <div className="setting-btn setting-dropdown no-bg">
                <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                  <CommonDropDown mainClassName="icon icon-font-color iw-14" mainIcon="MoreHorizontal" menuList={dropDownData}/>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularSongs;
