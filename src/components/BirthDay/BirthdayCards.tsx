import { birthdayCardData } from "@/Data/BirthDay";
import { FC, Fragment } from "react";
import { Container, Media } from "reactstrap";
import { CreateCard, Href, ImagePath } from "../../utils/constant/index";
import CustomImage from "@/Common/CustomImage";
import Link from "next/link";

const BirthdayCards: FC = () => {
  return (
    <Fragment>
      {birthdayCardData.map((data, index) => (
        <div className="friend-list-box birthday-list section-b-space" key={index}>
          <div className="card-title">
            <h3>{data.title}</h3>
          </div>
          <Container fluid>
            <div className="friend-list friend-page-list">
              <ul>
                {data.cards.map((item, i) => (
                  <li key={i}>
                    <div className="friend-box">
                      <Media>
                        <Link href={"/profile/friend"} className="user-img bg-size blur-up lazyloaded">
                          <CustomImage src={`${ImagePath}/user-sm/${item.image}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
                          <span className="available-stats" />
                        </Link>
                        <Media body>
                          <Link href={"/profile/friend"}>
                            <h5 className="user-name">{item.title}</h5>
                          </Link>
                          {item.detail && <h6>{item.detail}</h6>}
                        </Media>
                      </Media>
                      <a href={Href} className="btn btn-outline">
                        {CreateCard}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      ))}{" "}
    </Fragment>
  );
};

export default BirthdayCards;
