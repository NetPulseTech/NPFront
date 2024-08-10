import { Href } from "../../../utils/constant";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";

const AboutProfile = () => {
  return (
    <div className="profile-about sticky-top">
      <div className="card-title">
        <h3 />
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}></a>
          </div>
        </div>
      </div>
      <div className="about-content">
        <ul>
          {dynamicNumber(10).map((index) => (
            <li key={index}>
              <div className="icon"></div>
              <div className="details">
                <h5 />
                <h6 />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-footer">
        <ul>
          <li className="fb"></li>
          <li className="tw"></li>
          <li className="wa"></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProfile;
