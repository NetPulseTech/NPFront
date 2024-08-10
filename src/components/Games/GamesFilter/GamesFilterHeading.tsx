import { gamesTypes } from "@/Data/Games";
import { FC } from "react";
import { Button } from "reactstrap";

const GamesFilterHeading: FC<GamesFilterHeadingInterFace> = ({setGame,game}) => {
  return (
    <div className="card-title">
      <h3>All Games</h3>
      <div className="button-group filters-button-group">
        {gamesTypes.map((data, index) => (
          <Button
            key={index}
            className={`button ${game === data ? "is-checked" : ""}`}
            onClick={() => setGame(data)}
          >
            {data}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GamesFilterHeading;
