import { notificationList } from "@/Data/Layout";
import { Href, ImagePath } from "../../../utils/constant/index";
import { Media } from "reactstrap";
import Image from "next/image";
import { NotificationListsProps } from "@/layout/LayoutTypes";
import { FC } from "react";


const NotificationLists: FC<NotificationListsProps> = ({setShowNotification,}) => {
  return (
    <>
      {notificationList.map((data, index) => (
        <li key={index} onClick={() => setShowNotification(false)}>
          <a href={Href}>
            <Media>
              <Image src={`${ImagePath}/user-sm/${data.image}.jpg`} alt="user" width={40} height={40}/>
              <Media body>
                <div>
                  <h5 className="mt-0">
                    <span>{data.name}</span>{data.message}
                  </h5>
                  <h6>{data.time}</h6>
                </div>
              </Media>
            </Media>
          </a>
        </li>
      ))}
    </>
  );
};

export default NotificationLists;
