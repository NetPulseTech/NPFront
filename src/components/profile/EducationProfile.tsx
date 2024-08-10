import { educationWorkData } from "@/Data/profile";
import { EducationWork } from "../../utils/constant";
import { Href } from "../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const EducationProfile: React.FC = () => {
  return (
    <div className="about-profile section-b-space">
      <div className="card-title">
        <h3>{EducationWork}</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon className="icon icon-dark stroke-width-3 iw-11 ih-11" iconName="Edit2"/>
            </a>
          </div>
        </div>
      </div>
      <ul className="about-list">
        {educationWorkData.map((data, index) => (
          <li key={index}>
            <h5 className="title">{data.title}</h5>
            <h6 className="content">{data.details}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationProfile;
