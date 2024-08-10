import { Col } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import MainImage from "./MainImage";
import BlogDetails from "./BlogDetails";
import DetailPart from "./DetailPart";
import BlogComment from "./BlogComment";
import LeaveComment from "./LeaveComment";

const DetailBlog: React.FC = () => {
  return (
    <Col lg="9" className="order-lg-1">
      <div className="blog-single-detail">
        <MainImage />
        <BlogDetails/>
        <DetailPart/>
        <BlogComment/>
        <LeaveComment/>
      </div>
    </Col>
  );
};

export default DetailBlog;
