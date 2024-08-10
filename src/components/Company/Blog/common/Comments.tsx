import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { ImagePath } from "../../../../utils/constant";
import Image from "next/image";
import { Media } from "reactstrap";
import { Href } from "../../../../utils/constant/index";
interface CommentsInterFace {
  image: number;
  comment: string;
  replay?: boolean;
}
const Comments: React.FC<CommentsInterFace> = ({ comment, image,replay }) => {
  return (
    <Media className={replay?"inner-comment":""}>
      <Image height={60} width={60} src={`${ImagePath}/user-sm/${image}.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
      <Media body>
        <div className="title">
          <div className="comment-user">
            <DynamicFeatherIcon iconName="User" className="iw-13 ih-13" />
            <h6>That Guy</h6>
          </div>
          <div className="comment-date">
            <DynamicFeatherIcon iconName="Clock" className="iw-13 ih-13" />
            <h6> Dec 16, 2014 </h6>
          </div>
        </div>
        <div className="comment-detail">
          <p>{comment}</p>
        </div>
        <div className="reply-btn">
          <a href={Href}>
            <DynamicFeatherIcon iconName="CornerLeftUp" className="iw-15 ih-15"/>
            reply
          </a>
        </div>
      </Media>
    </Media>
  );
};

export default Comments;
