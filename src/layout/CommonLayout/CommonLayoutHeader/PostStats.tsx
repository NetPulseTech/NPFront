import { TotalFriends, TotalPosts } from "../../../utils/constant";
import { FC } from "react";

const PostStats: FC = () => {
  return (
    <div className="post-stats">
      <ul>
        <li>
          <h3>326</h3>
          <span>{TotalPosts}</span>
        </li>
        <li>
          <h3>2456</h3>
          <span>{TotalFriends}</span>
        </li>
      </ul>
    </div>
  );
};

export default PostStats;
