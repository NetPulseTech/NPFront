import { useDispatch, useSelector } from "react-redux";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { handleNextPost } from "@/redux-toolkit/reducers/ShowMorePostSlice";

interface ShowMorePostIcon {
  value: "style1"|"style3"|"style4" |"style7"|"style12" |"favouriteHome";
  dataLength: number;
}
const ShowMorePostIcon = ({ value, dataLength }: ShowMorePostIcon) => {
  const dispatch = useDispatch<AppDispatch>();
  const level = useSelector((state: RootState) => state.ShowMorePostSlice);

  return (
    <div
      className={`post-loader ${level[value].includes(dataLength - 1) ? "no-more" : ""}`}
      onClick={() => dispatch(handleNextPost(value))}
    >
      <div className="loader-icon">
        <DynamicFeatherIcon iconName="RotateCcw" className="icon-theme iw-25 ih-25"/>
      </div>
      <div className="no-more-text">
        <p>no more post</p>
      </div>
    </div>
  );
};

export default ShowMorePostIcon;
