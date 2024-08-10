import { FC } from "react";
import LikePageHeader from "./LikePageHeader";
import LikePageListContent from "./LikePageListContent";

const LikePage: FC = () => {
  return (
    <div className="page-list section-t-space">
      <LikePageHeader />
      <LikePageListContent />
    </div>
  );
};

export default LikePage;
