import { Href } from "../../../utils/constant";

const ProfileBox = () => {
  return (
    <div className="profile-box">
      <div className="profile-content">
        <a href={Href} className="image-section">
          <div className="profile-img">
            <div className="bg-loader" />
          </div>
        </a>
        <div className="profile-detail">
          <h2 />
          <h5 />
          <div className="description">
            <p />
            <p />
          </div>
          <div className="counter-stats">
            <span />
          </div>
          <div className="ldr-btn btn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
