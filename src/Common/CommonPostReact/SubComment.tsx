import { FC } from "react";
import { Media } from "reactstrap";
import { Href, ImagePath, Like, Replay, Translate } from "../../utils/constant";
import { SubCommentProps } from "../CommonInterFace";
import CustomImage from "../CustomImage";
import HoverMessage from "../HoverMessage";

const SubComment: FC<SubCommentProps> = ({ image,id }) => {
  return (
    <Media>
      <a href={Href} className="user-img popover-cls bg-size blur-up lazyloaded" id={id}>
        <CustomImage src={`${ImagePath}/user-sm/${image}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
      </a>
      <HoverMessage placement={"right"} target={id} name={"sufiya elija"} imagePath={`user-sm/${image}.jpg`} />
      <Media body>
        <a href={Href}>
          <h5>sufiya elija</h5>
        </a>  
        <p>Thank You So Much ❤❤</p>
        <ul className="comment-option">
          <li><a href={Href}>{Like}</a></li>
          <li><a href={Href}>{Replay}</a></li>
          <li><a href={Href}>{Translate}</a></li>
        </ul>
      </Media>
      <div className="comment-time">
        <h6>50 mins ago</h6>
      </div>
    </Media>
  );
};

export default SubComment;
