import { FC } from "react";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../../utils/constant";
import { Href } from '../../../../utils/constant/index';
interface GameCardInterFace {
  data: {
    image: number;
    type:string
  };
}
const GameCard: FC<GameCardInterFace> = ({ data }) => {
  return (
    <div className={`element-item ${data.type?data.type:""}`} >
      <div className="game-box">
        <div className="img-sec bg-size blur-up lazyloaded">
          <CustomImage
            src={`${ImagePath}/game/${data.image}.jpg`}
            className="img-fluid blur-up lazyload bg-img"
            alt="game"
          />
          <a href={Href} className="btn btn-solid">
            play
          </a>
        </div>
        <div className="game-content">
          <h4>ludo club</h4>
          <h5>moonfrog labs</h5>
          <p>Petey and other 15 friends play</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
