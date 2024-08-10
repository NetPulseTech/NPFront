import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { userMenuData } from "@/Data/Layout";
import { LogOut } from "../../../utils/constant";
import Link from "next/link";
import { FC } from "react";
import { Media } from "reactstrap";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const UserProfileMenu: FC = () => {
  const router = useRouter();

  const handleLogOut = () => {
    Cookies.remove('token')
    router.push("/authentication/login");
  };
  return (
    <ul className="friend-list">
      {userMenuData.map((data, index) => (
        <li key={index}>
          <Link href={data.navigate}>
            <Media>
              <DynamicFeatherIcon iconName={data.icon} />
              <Media body>
                <div>
                  <h5 className="mt-0">{data.heading}</h5>
                  <h6>{data.headingDetail}</h6>
                </div>
              </Media>
            </Media>
          </Link>
        </li>
      ))}
      <li onClick={handleLogOut}>
        <a>
          <Media>
            <DynamicFeatherIcon iconName="LogOut" />
            <Media body>
              <div>
                <h5 className="mt-0">{LogOut}</h5>
              </div>
            </Media>
          </Media>
        </a>
      </li>
    </ul>
  );
};

export default UserProfileMenu;
