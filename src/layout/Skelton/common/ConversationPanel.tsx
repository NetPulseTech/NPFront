import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Input, Media } from "reactstrap";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";

const ConversationPanel = () => {
  return (
    <div className="conversation-panel xl-light">
      <div className="panel-header">
        <h2 />
        <h5 />
      </div>
      <div className="search-bar">
        <div className="lg-search">
          <Input type="text" />
        </div>
        <div className="xs-search">
          <div className="icon-search">
            <DynamicFeatherIcon iconName="Search" className="icon-dark iw-16" />
          </div>
        </div>
      </div>
      <div className="friend-section">
        <div className="header-section">
          <h5 />
          <div className="down-arrow"></div>
        </div>
        <div className="friend-list collapse show">
          <ul>
            {dynamicNumber(2).map((index) => (
              <li key={index} className={`friend-box user${index}`}>
                <Media>
                  <a className="user-img"></a>
                  <Media body>
                    <h5 className="user-name" />
                    <h6 />
                  </Media>
                </Media>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="friend-section">
        <div className="header-section">
          <h5 />
          <div className="down-arrow"></div>
        </div>
        <div className="friend-list collapse show">
          <ul>
            {dynamicNumber(5).map((index) => (
              <li key={index} className={`friend-box user${index + 2}`}>
                <Media>
                  <a className="user-img"></a>
                  <Media body>
                    <h5 className="user-name" />
                    <h6 />
                  </Media>
                </Media>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConversationPanel;
