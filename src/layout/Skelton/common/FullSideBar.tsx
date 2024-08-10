import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Href } from "../../../utils/constant/index";

const FullSideBar = () => {
  return (
    <div className="sidebar-panel panel-lg">
      <div className="main-icon">
        <a href="#">
          <div className="bar-icon-img" />
          <h4 />
        </a>
      </div>
      <ul className="sidebar-icon">
        {dynamicNumber(11).map((data) => (
          <li key={data}>
            <a href={Href}>
              <div className="bar-icon-img" />
              <h4 />
            </a>
          </li>
        ))}
      </ul>
      <div className="main-icon">
        <a href="#">
          <div className="bar-icon-img" />
          <h4 />
        </a>
      </div>
    </div>
  );
};

export default FullSideBar;
