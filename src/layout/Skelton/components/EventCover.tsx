import React from "react";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Media } from "reactstrap";

const EventCover = () => {
  return (
    <div className="event-cover bg-theme">
      <div className="event-img"></div>
      <div className="event-timeline">
        <div className="timeline-title">
          <Media>
            <Media body>
              <h4 />
              <h6 />
            </Media>
          </Media>
        </div>
        <ul className="timeline-content theme-scrollbar">
          {dynamicNumber(6).map((data) => (
            <li key={data}>
              <h4 />
              <h6 />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCover;
