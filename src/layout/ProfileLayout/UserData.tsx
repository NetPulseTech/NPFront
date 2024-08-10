import { profileUserData } from "@/Data/Layout";
import { FC } from "react";

const UserData: FC = () => {
  return (
    <div className="counter-stats">
      <ul>
        {profileUserData.map((data, index) => (
          <li key={index}>
            <h3 className="counter-value" data-count={546}>
              {data.value}
            </h3>
            <h5>{data.title}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
