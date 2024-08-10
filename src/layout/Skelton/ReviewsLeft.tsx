import React from "react";
import { dynamicNumber } from "../../utils/DynamicNumberArray";

const ReviewsLeft = () => {
  return (
    <div className="content-left col-4 order-1 res-full-width">
      <div className="sticky-top">
        <div className="review-counter section-b-space">
          <div className="card-title">
            <h3 />
            <div className="settings">
              <div className="setting-btn" />
            </div>
          </div>
          <div className="review-content">
            <h2 />
            <h4 />
            <div className="ratings mt-1" />
            <div className="review-part">
              <ul>
                {dynamicNumber(5).map((data) => (
                  <li key={data}>
                    <h5 />
                    <div className="progress" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="review-bottom">
          <div className="recommend-sec">
            <h3 />
            <div className="recommend-btn">
              <div className="btn ldr-btn" />
              <div className="btn ldr-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsLeft;
