import { Swiper, SwiperSlide } from 'swiper/react';
import EventsCard from "../NewsFeed/Style1/ContentRight/EventsCard";
import {FC} from 'react';
import Slider from 'react-slick';
import { eventSlider } from '@/Data/SliderOptions';

const EventSlider:FC = () => {
    const images =[3,2,1,3,2,1]
  return (
    <div className="event-section">
      <Slider className="event_category no-arrow default-space"  {...eventSlider}>
        {images.map((data,index)=><div key={index}><EventsCard eventImage={data} /></div>)}
      </Slider>
    </div>
  );
};

export default EventSlider;
