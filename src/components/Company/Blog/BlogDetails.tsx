import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../utils/constant/index";

const BlogDetails: React.FC = () => {
  return (
    <div className="blog-details">
      <div className="detail">
        <h6>
          <DynamicFeatherIcon iconName="User" className="iw-15 ih-15" />
          page turner
        </h6>
        <h6>
          <DynamicFeatherIcon iconName="Clock" className="iw-15 ih-15" />
          20 June, 2023
        </h6>
      </div>
      <a href={Href}>
        <h2>increase your netpulse followers - post, like, comments</h2>
      </a>
    </div>
  );
};

export default BlogDetails;
