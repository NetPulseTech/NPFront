import { hobbiesAndInterestData } from "@/Data/Favorite";
import { FC } from "react";

const Hobbies: FC = () => {
  return (
    <div className="about-profile section-b-space">
      <div className="card-title">
        <h3></h3>
      </div>
      <ul className="about-list">
        {hobbiesAndInterestData.map((_, index) => (
          <li key={index}>
            <h5 className="title"></h5>
            <h6 className="content"></h6>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Hobbies;
