import { ImagePath, MutualFriend } from "../../../utils/constant";
import Image from "next/image";
import { Media } from "reactstrap";

const FriendList = () => {
  let imagesName = [9, 12, 15];
  return (
    <ul className="friend-list">
      {imagesName.map((data, index) => (
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
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
