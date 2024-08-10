import { FC, useState } from "react";
import TopGamesCardTitle from "./TopGamesCardTitle";
import { gamesTableData, gamesTableDataInterFace } from "@/Data/Games";
import { Media } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const TopGames: FC = () => {
  const [gameList, setGameList] = useState(gamesTableData);
  const handleActiveClick = (item: gamesTableDataInterFace) => {
    if (item.active) {
      const withoutActiveData = gameList.map((data) =>data.gameName === item.gameName ? { ...data, active: false } : data);
      setGameList(withoutActiveData);
    } else {
      const withActiveData = gameList.map((data) =>data.gameName === item.gameName ? { ...data, active: true } : data);
      setGameList(withActiveData);
    }
  };
  return (
    <div className="playlist-sec">
      <TopGamesCardTitle />
      <div className="table-sec theme-scrollbar">
        <table className="table table-hover">
          <tbody>
            {gameList.map((data, index) => (
              <tr key={index}>
                <td>
                  <Media>
                    <div className="img-sec bg-size blur-up lazyloaded">
                      <CustomImage src={`${ImagePath}/game/${index + 1}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
                    </div>
                    <Media body>
                      <h5>{data.gameName}</h5>
                    </Media>
                  </Media>
                </td>
                <td>
                  <h6>{data.type}</h6>
                </td>
                <td>
                  <h5 className="d-flex align-items-center">
                    <DynamicFeatherIcon iconName="User" className="me-1 iw-16 ih-16"/>
                    {data.users}
                  </h5>
                </td>
                <td>
                  <div onClick={() => handleActiveClick(data)} className={`favourite-btn ${data.active ? "active" : ""}`}>
                    <DynamicFeatherIcon className="icon-dark iw-14 ih-14" iconName="Heart"/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopGames;
