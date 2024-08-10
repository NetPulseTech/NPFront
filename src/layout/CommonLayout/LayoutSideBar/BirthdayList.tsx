import SvgIconCommon from "@/Common/SvgIconCommon";
import { Birthday } from "../../../utils/constant";
import Link from "next/link";

const BirthdayList = () => {
  return (
    <li>
      <Link href="/birthday">
        <SvgIconCommon className="bar-icon fill-white" iconName="cake" />
        <div className="tooltip-cls">
          <span>{Birthday}</span>
        </div>
      </Link>
    </li>
  );
};

export default BirthdayList;
