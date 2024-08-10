import { FC, Fragment, useState } from "react";
import GamesFilterHeading from "./GamesFilterHeading";
import { Row } from "reactstrap";
import { differentGameCards } from "@/Data/Games";
import GameCard from "./common/GameCard";

const GamesFilter: FC = () => {
  const [game, setGame] = useState("show all");
  return (
    <>
      <GamesFilterHeading setGame={setGame} game={game} />
      <div className="filter-content">
        <Row className="grid  ratio2_3">
          {differentGameCards.map((data, index) => (
            <Fragment key={index}>
              {game === "show all" ? (<GameCard data={data} />) : game === data.type ? (<GameCard data={data} />) : ("")}
            </Fragment>
          ))}
        </Row>
      </div>
    </>
  );
};

export default GamesFilter;
