import { About, Href, IntroMySelf } from "../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import SvgIconCommon from "@/Common/SvgIconCommon";
import { aboutContentData, socialMediaDetail } from "@/Data/profile";

const ProfileAbout: React.FC = () => {
  return (
    <div className="profile-about sticky-top">
      <div className="card-title">
        <h3>{About}</h3>
        <h5>{IntroMySelf}</h5>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon iconName="Edit2" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
        </div>
      </div>
      <div className="about-content">
        <ul>
          {aboutContentData.map((data, index) => (
            <li key={index}>
              <div className="icon">
                {data.icon ? (
                  <DynamicFeatherIcon iconName={data.icon} className="iw-18 ih-18"/>
                ) : (
                  <SvgIconCommon iconName={data.iconName ? data.iconName : ""} className="iw-18 ih-18"/>
                )}
              </div>
              <div className="details">
                <h5>{data.heading}</h5>
                <h6>{data.details}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-footer">
        <ul>
          {socialMediaDetail.map((data, index) => (
            <li className={data.className} key={index}>
              <a href={Href}>
                <SvgIconCommon iconName={data.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileAbout;
