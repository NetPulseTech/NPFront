import { FC } from "react";
import SideBar from "./SideBar";
import { Href, ImagePath, LikedPages, Pages } from "../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import FriendSuggestionDropDown from "@/components/NewsFeed/Style1/LeftContent/FriendSuggestionDropDown";
import { likePageListContentData } from "@/Data/NewsFeed";
import { Media } from "reactstrap";
import CustomImage from '@/Common/CustomImage';

const PanelSideBar: FC = () => {
  return (
    <div className="panel-sidebar">
      <div className="sticky-cls">
        <SideBar />
        <div className="page-list section-t-space">
          <div className="card-title">
            <h3>{LikedPages}</h3>
            <div className="settings">
              <div className="setting-btn">
                <a href={Href} className="d-flex">
                  <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
                </a>
              </div>
              <FriendSuggestionDropDown darkIcon />
            </div>
          </div>
          <div className="list-content">
            <ul>
              {likePageListContentData.map((data, index) => (
                <li key={index}>
                  <Media>
                    <div className="img-part bg-size blur-up lazyloaded">
                      <CustomImage src={`${ImagePath}/pages-logo/${index+1}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="image"/>
                    </div>
                    <Media body>
                      <h4>{data.tittle}</h4>
                      <h6>{data.type}</h6>
                    </Media>
                  </Media>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelSideBar;
