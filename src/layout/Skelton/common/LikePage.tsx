import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Media } from "reactstrap";

const LikePage = () => {
  return (
    <div className="page-list section-t-space">
      <div className="card-title">
        <h3 />
      </div>
      <div className="list-content">
        <ul>
          {dynamicNumber(5).map((data) => (
            <li key={data}>
              <Media>
                <div className="img-part"></div>
                <Media body>
                  <h4 />
                  <h6 />
                </Media>
              </Media>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LikePage;
