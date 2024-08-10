import { Comment, Share, SvgPath } from "../utils/constant";
import Image from "next/image";
import { FC } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const CommonLikePanel: FC = () => {
  const emojisNames = ["040", 113, "027", "033"];
  return (
    <div className="like-panel">
      <div className="left-emoji">
        <ul>
          {emojisNames.map((data, index) => (
            <li key={index}>
              <Image width={20} height={20} src={`${SvgPath}/emoji/${data}.svg`} alt="smile"/>
            </li>
          ))}
        </ul>
        <h6>+75</h6>
      </div>
      <div className="right-stats">
        <ul>
          <li>
            <h5>
              <DynamicFeatherIcon iconName="MessageSquare" className="iw-16 ih-16"/>
              <span>4565</span> {Comment}
            </h5>
          </li>
          <li>
            <h5>
              <DynamicFeatherIcon iconName="Share" className="iw-16 ih-16" />
              <span>985</span>{Share}
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommonLikePanel;
