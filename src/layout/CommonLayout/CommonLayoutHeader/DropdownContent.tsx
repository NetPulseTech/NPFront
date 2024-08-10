import { Confirm, Delete, ImagePath, MutualFriend } from "../../../utils/constant";
import Image from "next/image";
import { FC } from "react";
import { Button, Media } from "reactstrap";

const DropdownContent:FC = () => {
  const imageNames = [5, 6, 7, 2];

  return (
    <div className="dropdown-content">
      <ul className="friend-list">
        {imageNames.map((data, index) => (
          <li key={index}>
            <Media>
              <Image width={40} height={40} src={`${ImagePath}/user-sm/${data}.jpg`} alt="user"/>
              <Media body>
                <div>
                  <h5 className="mt-0">Paige Turner</h5>
                  <h6> 1 {MutualFriend}</h6>
                </div>
              </Media>
            </Media>
            <div className="action-btns">
              <Button color="solid">{Confirm}</Button>
              <Button outline  className="ms-1">{Delete}</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownContent;
  