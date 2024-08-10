const ProfileTopCommon = () => {
  return (
    <>
      <div className="profile-cover bg-size">
        <div className="profile-box d-lg-block d-none">
          <div className="profile-content">
            <div className="image-section">
              <div className="profile-img">
                <div className="bg-loader" />
              </div>
            </div>
            <div className="profile-detail">
              <h2 />
              <h5 />
              <div className="counter-stats">
                <div className="counter-stats">
                  <span />
                </div>
              </div>
              <div className="ldr-btn btn" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none d-block">
        <div className="profile-box">
          <div className="profile-content">
            <div className="image-section">
              <div className="profile-img">
                <div className="bg-loader" />
              </div>
            </div>
            <div className="profile-detail">
              <h2 />
              <h5 />
              <div className="counter-stats">
                <span />
              </div>
              <div className="ldr-btn btn" />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-menu section-t-space">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="d-xl-none d-inline-block"></li>
        </ul>
        <ul className="right-menu d-xl-flex d-none">
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default ProfileTopCommon;
