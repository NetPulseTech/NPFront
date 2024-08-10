import { FC, useState } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { DetailBoxProps } from "./CommonInterFace";
import { ImagePath, PeopleReactThisPost } from "../utils/constant";
import CustomImage from "./CustomImage";
import { toast } from 'react-toastify';

const DetailBox: FC<DetailBoxProps> = ({ heading, span }) => {
  const [bookMarkActive, setBookMarkActive] = useState(false);
  const numbers = [1, 2, 3];
  return (
    <div className="detail-box">
      <h3>{heading}</h3>
      <h5 className="tag" dangerouslySetInnerHTML={{ __html: span }} />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry's standard dummy text ever since the
        1500s
      </p>
      <div className={`bookmark favorite-btn ${bookMarkActive ? "active" : ""}`}>
        <DynamicFeatherIcon iconName="Bookmark" className="iw-14 ih-14" onClick={() => {setBookMarkActive(!bookMarkActive); toast.success(`${bookMarkActive?"un-":""}bookmark successful`);}   }/>
      </div>
      <div className="people-likes">
        <ul>
          {numbers.map((data, index) => (
            <li key={index} className="popover-cls bg-size blur-up lazyloaded">
              <CustomImage src={`${ImagePath}/user-sm/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="image"/>
            </li>
          ))}
        </ul>
        <h6>+12 {PeopleReactThisPost}</h6>
      </div>
    </div>
  );
};

export default DetailBox;
