import { Href, Post, WorldWideTrends } from "../../utils/constant";
import DynamicFeatherIcon from "../../Common/DynamicFeatherIcon";
import CommonDropDown from "@/Common/CommonDropDown";
import { worldWideTrendData, activityFeedData } from "@/Data/profile";

const WorldWideTrend: React.FC = () => {
  return (
    <div className="hashtag-list section-t-space">
      <div className="card-title">
        <h3>{WorldWideTrends}</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href} className="d-flex">
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-theme stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
          <div className="setting-btn setting-dropdown">
            <CommonDropDown mainClassName="icon-dark stroke-width-3 icon iw-11 ih-11" mainIcon="Sun" menuList={activityFeedData}/>
          </div>
        </div>
      </div>
      <div className="hashtag-content">
        <ul>
          {worldWideTrendData.map((data, index) => (
            <li key={index}>
              <a href={Href}>
                <h5>#{data.name}</h5>
              </a>
              <h6>
                <DynamicFeatherIcon iconName="Mail" className="iw-11 ih-11" />{data.post}k {Post}
              </h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorldWideTrend;
