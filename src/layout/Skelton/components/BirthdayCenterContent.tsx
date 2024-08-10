import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Media } from "reactstrap";
import { Href } from "../../../utils/constant";

const BirthdayCenterContent = () => {
  return (
    <div className="content-center">
      <div className="friend-list-box birthday-list section-b-space">
        <div className="card-title">
          <h3 />
        </div>
        <div className="container-fluid">
          <div className="friend-list friend-page-list">
            <ul>
              {dynamicNumber(3).map((index) => (
                <li key={index}>
                  <div className="friend-box">
                    <Media>
                      <a href={Href} className="user-img"></a>
                      <Media body>
                        <h5 className="user-name" />
                        <h6 />
                      </Media>
                    </Media>
                    <div className="ldr-btn btn" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="friend-list-box birthday-list section-b-space">
        <div className="card-title">
          <h3 />
        </div>
        <div className="container-fluid">
          <div className="friend-list friend-page-list">
            <ul>
              {dynamicNumber(2).map((index) => (
                <li key={index}>
                  <div className="friend-box">
                    <Media>
                      <a href={Href} className="user-img"></a>
                      <Media body>
                        <h5 className="user-name" />
                        <h6 />
                      </Media>
                    </Media>
                    <div className="ldr-btn btn" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="friend-list-box birthday-list section-b-space">
        <div className="card-title">
          <h3 />
        </div>
        <div className="container-fluid">
          <div className="friend-list friend-page-list">
            <ul>
              {dynamicNumber(5).map((index) => (
                <li key={index}>
                  <div className="friend-box">
                    <Media>
                      <a href={Href} className="user-img"></a>
                      <Media body>
                        <h5 className="user-name" />
                        <h6 />
                      </Media>
                    </Media>
                    <div className="ldr-btn btn" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCenterContent;
