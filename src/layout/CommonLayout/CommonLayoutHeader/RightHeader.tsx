import { FC } from "react"
import OptionList from "./OptionList"
import PostStats from "./PostStats"

const RightHeader:FC = () => {
  return (
    <div className="header-right">
        <PostStats />
        <OptionList/>
    </div>
  )
}

export default RightHeader