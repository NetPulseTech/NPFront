import { hobbiesAndInterest } from "@/Data/profile";
import { HobbiesInterest, Href } from "../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const HobbiesProfile: React.FC = () => {
  return (
    <div className="about-profile section-b-space">
      <div className="card-title">
        <h3>{HobbiesInterest}</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon iconName="Edit2" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
        </div>
      </div>
      <ul className="about-list">
        {hobbiesAndInterest.map((data, index) => (
          <li key={index}>
            <h5 className="title">{data.title}</h5>
            <h6 className="content"> {data.details}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HobbiesProfile;
