import { FC, useState } from "react";
import CommonHeader from "./common/CommonHeader";
import { Collapse, Media } from "reactstrap";
import { ImagePath } from "../../../utils/constant";
import CustomImage from "@/Common/CustomImage";

const RecentChats: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  let datas = [
    "Josephin Water",
    "Petey Cruiser",
    "Anna Sthesia",
    "Paul Molive",
    "Anna Mull",
  ];
  return (
    <div className="friend-section">
      <CommonHeader isOpen={isOpen} setIsOpen={setIsOpen} heading="Recent Chats"/>
      <Collapse isOpen={isOpen} className="friend-list">
        <ul>
          {datas.map((data, index) => (
            <li key={index} className={`friend-box user${index + 3}`}>
              <Media>
                <a className={`popover-cls user-img bg-size blur-up lazyloaded`}>
                  <CustomImage
                    src={`${ImagePath}/user-sm/${index + 3}.jpg`}
                    className="img-fluid blur-up lazyload bg-img"
                    alt="user"
                  />
                  <span className="available-stats" />
                </a>
                <Media body>
                  <h5 className="user-name">{data}</h5>
                  <h6>alabma, USA</h6>
                </Media>
              </Media>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default RecentChats;
