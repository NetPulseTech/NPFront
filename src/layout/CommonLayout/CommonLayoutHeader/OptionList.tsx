import { FC } from "react";
import DarkLight from "./DarkLight";
import HeaderMessage from "./HeaderMessage";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const OptionList: FC = () => {
  return (
    <ul className="option-list">
      <HeaderMessage />
      <DarkLight />
      <Notification />
      <UserProfile />
    </ul>
  );
};

export default OptionList;
