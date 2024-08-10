import { Followers, Following, Likes } from "../../utils/constant";
import { FC } from "react";

const CounterStats: FC = () => {
  return (
    <div className="counter-stats">
      <ul>
        <li>
          <h3 className="counter-value">546</h3>
          <h5>{Following}</h5>
        </li>
        <li>
          <h3 className="counter-value">26335</h3>
          <h5>{Likes}</h5>
        </li>
        <li>
          <h3 className="counter-value">6845</h3>
          <h5>{Followers}</h5>
        </li>
      </ul>
    </div>
  );
};

export default CounterStats;
