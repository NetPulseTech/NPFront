import { userMessageData } from "@/Data/Layout";
import { Href, ImagePath } from "../../../utils/constant";
import Image from "next/image";
import { Media } from "reactstrap";

const UserMessage = () => {
  return (
    <div className="dropdown-content">
      <ul className="friend-list">
        {userMessageData.map((data, index) => (
          <li key={index}>
            <a href={Href}>
              <Media>
                <Image width={40} height={40} src={`${ImagePath}/user-sm/${index + 1}.jpg`} alt="user"/>
                <Media body>
                  <div>
                    <h5 className="mt-0">{data.name}</h5>
                    <h6>{data.message}</h6>
                  </div>
                </Media>
              </Media>
              {data.status && (
                <div className="active-status">
                  <span className={data.status} />
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMessage;
