import React, { FC, useState } from "react";
import { Href, ImagePath } from "../../../../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import Image from "next/image";
import CommonVideoModal from "@/Common/Modals/CommonVideoModal";
import { PostDetailInterFace } from "../../../Style1Types";

const PostImage: FC<PostDetailInterFace> = ({mainImage}) => {
  const [showModal, setShowModal] = useState(false)
  const modalToggle = ()=>setShowModal(!showModal)
  return (
    <div className="img-wrapper">
      <Image
        height={225}
        width={385}
        src={`${ImagePath}/post/${mainImage}.jpg`}
        className="img-fluid blur-up lazyloaded"
        alt="image"
      />
      <div className="controler">
        <a href={Href} className="play"  onClick={modalToggle}>
          <DynamicFeatherIcon iconName="PlayCircle" className="iw-50 ih-50" />
        </a>
        <CommonVideoModal modal={showModal} toggle={modalToggle}/>
        <div className="duration">
          <h6>06:20</h6>
        </div>
        <a href={Href} className="volume">
          <DynamicFeatherIcon iconName="Volume2" className="iw-14 ih-14" />
        </a>
      </div>
    </div>
  );
};

export default PostImage;
