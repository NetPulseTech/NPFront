import React, { FC } from "react";
import HeadingTittleCommon from "./common/HeadingTittleCommon";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from "@/Data/Favorite";
import { Href } from '../../../utils/constant/index';

const ReviewStateMent: FC = () => {
  return (
    <div className="review-bottom">
      <div className="review-statement pb-3 section-b-space">
        <HeadingTittleCommon title="Review Statement" />
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="pie"
          height={275}
        />
      </div>
      <div className="recommend-sec">
        <h3>Would you recommend Dance Acadamy?</h3>
        <div className="recommend-btn">
          <a href={Href} className="btn btn-solid">
            yes
          </a>
          <a href={Href} className="btn btn-outline">
            no
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewStateMent;
