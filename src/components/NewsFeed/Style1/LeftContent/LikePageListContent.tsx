import { likePageListContentData } from "@/Data/NewsFeed";
import { ImagePath } from "../../../../utils/constant";
import { FC, useState } from "react";
import { Media } from "reactstrap";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { LikePageInterFace } from "../Style1Types";

const LikePageListContent: FC = () => {
  const [listContent, setListContent] = useState(likePageListContentData);
  const handleActiveStar = (data:LikePageInterFace) => {
    if (data.active) {
        const withOutActiveTempData =likePageListContentData.map((item)=> item.member === data.member ?{...item,active:false}:item )     
        setListContent(withOutActiveTempData)
    }else{
        const withActiveTempData =likePageListContentData.map((item)=> item.member === data.member ?{...item,active:true}:item )     
        setListContent(withActiveTempData)
    }
  };
  return (
    <div className="list-content">
      <ul>
        {listContent.map((data, index) => (
          <li key={index}>
            <Media>
              <div className="img-part bg-size blur-up lazyloaded" style={{ backgroundImage: `url("${ImagePath}/pages-logo/${index + 1}.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", display: "block",}}/>
              <Media body>
                <h4>{data.tittle}</h4>
                <h6>{data.type}
                  <span>
                    <DynamicFeatherIcon iconName="User" className="icon-font-color iw-13 ih-13"/>
                    {data.member}k
                  </span>
                </h6>
              </Media>
            </Media>
            <div className={`favorite-btn ${data.active ? "active" : ""} `} onClick={() => handleActiveStar(data)}>
              <DynamicFeatherIcon iconName="Star" className="icon-dark iw-14 ih-14"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikePageListContent;
