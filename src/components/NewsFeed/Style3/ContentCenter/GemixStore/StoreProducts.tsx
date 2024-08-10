import CustomImage from '@/Common/CustomImage';
import { onlineStore } from '@/Data/SliderOptions';
import { Discount, Href, ImagePath } from '../../../../../utils/constant';
import { FC } from 'react';
import Slider from 'react-slick';

const StoreProducts:FC = () => {
  let images = [1, 2, 3, 1, 2, 3];

  return (
    <div className="img-wrapper">
          <div className="slider-section">
            <Slider {...onlineStore} className='newsfeed1-slide ratio_landscape default-space no-arrow '>
                {images.map((data,index)=><div key={index}>
                <div>
                  <div>
                    <div className="slider-wrapper">
                      <a href={Href} className="img-part">
                        <div className="image bg-size blur-up lazyloaded">
                          <CustomImage src={`${ImagePath}/products/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="img"/>
                        </div>
                        {index === 1 &&  <div className="label-ribbon"><span>{Discount}</span></div>}
                      </a>
                      <div className="slider-content">
                        <h5>
                          <span>Natural juice</span> Fresh and natural, Orange
                          Juice. -50%
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Slider>
          </div>
        </div>
  )
}

export default StoreProducts