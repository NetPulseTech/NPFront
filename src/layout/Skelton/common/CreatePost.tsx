import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../utils/constant";
import { Input } from "reactstrap";

const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="static-section">
        <div className="card-title">
          <h3 />
        </div>
        <div className="search-input input-style icon-right">
          <Input type="text" />
        </div>
      </div>
      <div className="create-bg">
        <div className="bg-post">
          <div className="input-sec">
            <Input type="text" className="enable" />
            <div className="close-icon">
              <a href={Href}>
                <DynamicFeatherIcon iconName="X" className="iw-20 ih-20" />
              </a>
            </div>
          </div>
        </div>
        <div className="gradient-bg"></div>
      </div>
      <ul className="create-btm-option">
        {dynamicNumber(4).map((data) => (<li key={data} />))}
      </ul>
      <div className="post-btn">
        <button className="Disable">post</button>
      </div>
    </div>
  );
};

export default CreatePost;
