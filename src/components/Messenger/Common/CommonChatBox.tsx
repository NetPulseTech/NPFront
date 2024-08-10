import { FC, useEffect, useState } from "react";
import { CommonChatBoxInterFace } from "../MessngerType";
import { ImagePath } from "../../../utils/constant";
import CustomImage from "@/Common/CustomImage";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import SvgIconCommon from "@/Common/SvgIconCommon";
import UserGallery from "./UserGallery";
import UserChat from "./UserChat";
import { useRouter } from 'next/navigation';

const CommonChatBox: FC<CommonChatBoxInterFace> = ({ userList,setUserList,setActiveTab }) => {
  const socialMedias = [
    { link: "https://www.facebook.com/", name: "facebook"},
    { link: "https://twitter.com/", name: "twitter" },
    { link: "https://www.whatsapp.com/", name: "whatsapp" },
  ];
  const [first, setfirst] = useState(1);
  useEffect(() => {
    if (userList !== null && userList !== undefined) {
      const userId = userList.id;
      setfirst(userId);
    }
  }, [userList, first, setfirst]);

const router =useRouter()
  return (
    <div className="tab-box">
      <UserChat user={userList} setUserList={setUserList} setActiveTab={setActiveTab} />
      <div className="user-info">
        <div className="back-btn d-lg-none d-block" onClick={()=>router.push("/")}>
          <DynamicFeatherIcon iconName="X" className="icon-theme" />
        </div>
        <div className="user-image bg-size blur-up lazyloaded">
          <CustomImage
            src={`${ImagePath}/user/${first}.jpg`}
            className="img-fluid blur-up lazyload bg-img"
            alt=""
          />
        </div>
        <div className="user-name">
          <h5>{userList?.userName}</h5>
          <h6>london, united kingdom</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            possimus magnam adipisci aspernatur.
          </p>
          <div className="social-btn">
            <ul>
              {socialMedias.map((data, index) => (
                <li className={data.name} key={index}>
                  <a href={data.link} target="_blank">
                    <SvgIconCommon iconName={data.name} />                    
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <UserGallery />
      </div>
    </div>
  );
};

export default CommonChatBox;
