import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Media } from "reactstrap";

const BottomSection = () => {
  return (
    <div className="container-fluid section-t-space px-0">
      <div className="page-content">
        <div className="content-left">
          <div className="player-box">
            <div className="card-title">
              <h3 />
              <div className="settings">
                <div className="setting-btn" />
              </div>
            </div>
            <div className="main-wrapper">
              <div className="song-wrapper">
                <div className="song-thumb-wrapper"></div>
                <div className="song-info">
                  <h2 />
                  <h6 />
                </div>
              </div>
              <div className="volume-wrapper" />
            </div>
          </div>
        </div>
        <div className="content-center">
          <div className="playlist-sec">
            <div className="card-title">
              <h3 />
              <div className="settings">
                <div className="setting-btn" />
              </div>
            </div>
            <div className="table-sec">
              <table className="table">
                <tbody>
                  {dynamicNumber(6).map((index) => (
                    <tr key={index}>
                      <td>
                        <Media>
                          <div className="img-sec" />
                          <Media body>
                            <h5 />
                          </Media>
                        </Media>
                      </td>
                      <td>
                        <h5 />
                      </td>
                      <td>
                        <h6 />
                      </td>
                      <td>
                        <h5 />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="playlist-sec">
            <div className="card-title">
              <h3 />
              <div className="settings">
                <div className="setting-btn" />
              </div>
            </div>
            <div className="popular-song-sec">
              <ul>
                {dynamicNumber(6).map((index) => (
                  <li key={index}>
                    <Media>
                      <div className="icon-play" />
                      <Media body>
                        <h5 />
                        <h6 />
                      </Media>
                    </Media>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
