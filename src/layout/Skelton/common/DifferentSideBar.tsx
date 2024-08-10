import { Href } from "../../../utils/constant";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";


const DifferentSideBar = () => {
  return (
    <div className="sidebar-panel panel-lg sidebar-light">
      <div className="user-wrap">
        <div className="profile-img">
          <div className="bg-loader" />
        </div>
        <div className="user-info">
          <h3 />
          <h4 />
        </div>
      </div>
      <ul className="sidebar-icon">
        {dynamicNumber(8).map((number) => (
          <li key={number}>
            <a href={Href}>
              <div className="bar-icon-img" />
              <h4 />
            </a>
          </li>
        ))}
      </ul>
      <div className="main-icon">
        <a href={Href}>
          <div className="bar-icon-img" />
          <h4 />
        </a>
      </div>
    </div>
  );
};

export default DifferentSideBar;
