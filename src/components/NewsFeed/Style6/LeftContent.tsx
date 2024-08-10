import UserProFile from "@/Common/UserProFile";
import FriendSuggestion from "../Style1/LeftContent/FriendSuggestion";
import LikePage from "../Style1/LeftContent/LikePage";
import WeatherSection from "../Style1/LeftContent/WeatherSection";

const LeftContent = ({padding}:{padding?:boolean}) => {
  return (
    <div className={`content-left ${!padding ?"p-0":""}`}>
      <UserProFile />
      <FriendSuggestion />
      <div className="sticky-top">
      <LikePage />
      <WeatherSection />
    </div>
    </div>
  );
};

export default LeftContent;
