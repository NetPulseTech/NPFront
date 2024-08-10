import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { ActivityFeeds, ImagePath, LoadMore } from "../../utils/constant";
import { Href } from "../../utils/constant/index";
import CommonDropDown from "@/Common/CommonDropDown";
import { activityFeedDropDown, activityFeedsData } from "@/Data/profile";
import { Fragment } from "react";
import CustomImage from "@/Common/CustomImage";
import { Media } from "reactstrap";

const ActivityFeed: React.FC = () => {
  return (
    <div className="activity-list actitvity-page">
      <div className="card-title">
        <h3>{ActivityFeeds}</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href} className="d-flex">
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-theme stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
          <div className="setting-btn setting-dropdown">
            <CommonDropDown mainClassName="icon-dark stroke-width-3 icon iw-11 ih-11" mainIcon="Sun" menuList={activityFeedDropDown}/>
          </div>
        </div>
      </div>
      <div className="activity-content">
        {activityFeedsData.map((data, index) => (
          <Fragment key={index}>
            <div className="activity-title">
              <h4>{data.day}</h4>
            </div>
            <ul>
              {data.children.map((item, i) => (
                <li key={i}>
                  <Media>
                    <div className="img-part bg-size blur-up lazyloaded">
                      <CustomImage src={`${ImagePath}/user-sm/${i + 1}.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
                    </div>
                    <Media body>
                      <h4>
                        {item.title} <span>{item.spanText}</span> photo
                      </h4>
                      <h6>{item.time}</h6>
                    </Media>
                  </Media>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
        <div className="load-more">
          <a href={Href} className="btn btn-solid">
            {LoadMore}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
