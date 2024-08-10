import { Href } from "../../../utils/constant";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Media } from "reactstrap";

const ActivityFeed = () => {
  return (
    <div className="activity-list section-t-space">
      <div className="card-title">
        <h3 />
        <div className="settings">
          <div className="setting-btn">
            <a href={Href} className="d-flex"></a>
          </div>
        </div>
      </div>
      <div className="activity-content">
        <ul>
          {dynamicNumber(5).map((index) => (
            <li key={index}>
              <Media>
                <div className="img-part"></div>
                <Media body>
                  <h4 />
                  <h6 />
                </Media>
              </Media>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityFeed;
