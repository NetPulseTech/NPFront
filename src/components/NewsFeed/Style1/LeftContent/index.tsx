import UserProFile from "@/Common/UserProFile";
import { FC } from "react";
import FriendSuggestion from "./FriendSuggestion";
import LikedPages from "./LikedPages";

const ContentLeft: FC = () => {
  return (
    <div className="content-left">
      <UserProFile />
      <FriendSuggestion />
      <LikedPages />
    </div>
  );
};

export default ContentLeft;
