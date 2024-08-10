import { FC } from "react";
import ContentLeft from "./ContentLeft";
import ContentCenter from "./ContentCenter";
import ContentRight from "./ContentRight";

const FavoriteHomePageContent: FC = () => {
  return (
    <div className="page-content">
      <ContentLeft />
      <ContentCenter />
      <ContentRight />
    </div>
  );
};

export default FavoriteHomePageContent;
