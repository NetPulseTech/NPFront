import SvgIconCommon from "@/Common/SvgIconCommon";
import { sideBarGame } from "@/Data/SliderOptions";
import { Games, Href, ImagePath } from "../../../utils/constant";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';

const GamesList: FC = () => {
 
  const numbers = [1, 2, 3, 4 ,1, 2, 3, 4];
  return (
    <li className="inner-list">
      <Link href="/games">
        <SvgIconCommon iconName={"game-controller"} className="bar-icon fill-white"/>
        <div className="tooltip-cls">
          <span>{Games}</span>
        </div>
      </Link>
      <span className="count">2</span>
      <Slider  className="vertical-slide-3 no-arrow" {...sideBarGame}>
        {numbers.map((data, index) => (
          <div key={index}>
            <div >
              <a href={Href}>
                <Image src={`${ImagePath}/icon/game/${data}.jpg`} alt="image" width={21} height={21}/>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </li>
  );
};

export default GamesList;
