import { ActivityFeed, ImagePath, Photo } from "../../utils/constant";
import { Href } from "../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import CommonDropDown from "@/Common/CommonDropDown";
import { activityFeedData, activityFeedList } from "@/Data/profile";
import CustomImage from "@/Common/CustomImage";
import { Media } from "reactstrap";

const ActivityFeeds: React.FC = () => {
  return (
    <div className="activity-list section-t-space">
      <div className="card-title">
        <h3>{ActivityFeed}</h3>
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
      <div className="activity-content">
        <ul>
          {activityFeedList.map((data, index) => (
            <li key={index}>
              <Media>
                <div className="img-part bg-size blur-up lazyloaded">
                  <CustomImage src={`${ImagePath}/user-sm/${index + 1}.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
                </div>
                <Media body>
                  <h4>
                    {data.title}<span>{data.spanText}</span> {Photo}
                  </h4>
                  <h6>{data.time}</h6>
                </Media>
              </Media>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityFeeds;
