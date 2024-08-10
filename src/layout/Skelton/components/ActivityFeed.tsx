import { Href } from "../../../utils/constant";
import React from "react";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Media } from "reactstrap";

const ActivityFeed = () => {
  return (
    <div className="activity-list actitvity-page">
      <div className="card-title">
        <h3 />
        <div className="settings">
          <div className="setting-btn">
            <a href={Href} className="d-flex"></a>
          </div>
        </div>
      </div>
      <div className="activity-content">
        <div className="activity-title">
          <h4 />
        </div>
        <ul>
          {dynamicNumber(5).map((index) => (
            <li key={index}>
              <Media>
                <div className="img-part"> </div>
                <Media body>
                  <h4 />
                  <h6 />
                </Media>
              </Media>
            </li>
          ))}
        </ul>
        <div className="activity-title">
          <h4 />
        </div>
        <ul>
          {dynamicNumber(2).map((index) => (
            <li key={index}>
              <Media>
                <div className="img-part"> </div>
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
