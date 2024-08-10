import { FC } from "react";
import CommonHeader from "./WeatherCover/Common/CommonHeader";
import { weatherForCastData } from "@/Data/Weather";

const ForecastTable: FC = () => {
  return (
    <div className="forecast-table section-b-space">
      <CommonHeader tittle="Today" />
      <div className="table-sec theme-scrollbar table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">date</th>
              <th scope="col">temp</th>
              <th scope="col">desc.</th>
              <th scope="col">humidity</th>
              <th scope="col">percip.</th>
            </tr>
          </thead>
          <tbody>
            {weatherForCastData.map((data, index) => (
              <tr key={index}>
                <td className="date">
                  <h5>
                    thu <span>18/06</span>
                  </h5>
                </td>
                <td className="temp">
                  {data.icon}
                  <span>33º / 28º</span>
                </td>
                <td className="desc">{data.detail}</td>
                <td>79%</td>
                <td>20%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastTable;
