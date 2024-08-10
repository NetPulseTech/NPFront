import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../utils/constant";
import Link from "next/link";
import { FC } from "react";

const RightOption: FC = () => {
  return (
    <div className="right-option">
      <ul>
        <li>
          <Link href="/messanger">
            <DynamicFeatherIcon iconName="Maximize" className="iw-16 ih-16" />
          </Link>
        </li>
        <li>
          <a href={Href}>
            <DynamicFeatherIcon iconName="Edit" className="iw-16 ih-16" />
          </a>
        </li>
        <li>
          <a href={Href}>
            <DynamicFeatherIcon iconName="MoreHorizontal" className="iw-16 ih-16"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightOption;
