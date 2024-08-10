import { FC, useState } from "react";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { Comment, Href, Reaction, Share, SvgPath } from "../../utils/constant";
import Image from "next/image";
import CommentSection from "./CommentSection";
import ShareModal from "./ShareModal";
import { reactions } from "@/Data/common";

const CommonPostReact: FC = () => {
  const [showReaction, setShowReaction] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <>
      <div className="post-react">
        <ul>
          <li className="react-btn">
            <a className="react-click" href={Href} onClick={() => setShowReaction(!showReaction)}>
              <DynamicFeatherIcon iconName="Smile" className="iw-18 ih-18" />{Reaction}
            </a>
            <div className={`react-box ${showReaction ? "show" : ""}`}>
              <ul>
                {reactions.map((data, index) => (
                  <li key={index} data-title={data.tittle}>
                    <a href={Href}>
                      <Image width={28} height={28} src={`${SvgPath}/emoji/${data.imageName}.svg`} alt="smiles"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="comment-click"  onClick={()=>setShowComment(!showComment)}>
            <a href={Href}>
              <DynamicFeatherIcon iconName="MessageSquare" className="iw-18 ih-18"/>{Comment}
            </a>
          </li>
          <li onClick={toggleModal}>
            <a href={Href} >
              <DynamicFeatherIcon iconName="Share" className="iw-16 ih-16" />{Share}
            </a>
          </li>
        </ul>
      </div>  
      <CommentSection  showComment={showComment} />
      <ShareModal showModal={showModal} toggleModal={toggleModal}/>
    </>
  );
};

export default CommonPostReact;
