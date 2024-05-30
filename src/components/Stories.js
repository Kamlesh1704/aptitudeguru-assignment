import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import './Stories.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boy from '../img/boy.png'

import Slider from "react-slick";

export default function Stories() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "flex",alignItems:"center",justifyContent:"center", background: "black", height:"35px",width:"35px"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,display: "flex",alignItems:"center",justifyContent:"center", background: "black", height:"35px",width:"35px"}}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }
  return (
    <div className='stories-div'>
      <h1 className='storyheaind'>Customer Stories</h1>
      <Slider {...settings} className='Slider'>
        <div className='slider-card'>
            <BiSolidQuoteAltLeft className='icon'/>
            <div className='slidercontent'>
                <div>
                    <p>There are many different animals in<br/> the zoo, but I liked the giraffe the<br/>
                        most. He is very kind and sociable.<br/> I will come to the giraffe every week.</p>
                    <h1>John Clark</h1>
                </div>
                    <img src={boy} alt="" className='boy'/>
            </div>
        </div>
        <div className='slider-card'>
            <BiSolidQuoteAltLeft className='icon'/>
            <div className='slidercontent'>
                <div>
                    <p>There are many different animals in<br/> the zoo, but I liked the giraffe the<br/>
                        most. He is very kind and sociable.<br/> I will come to the giraffe every week.</p>
                    <h1>John Clark</h1>
                </div>
                    <img src={boy} alt="" className='boy'/>
            </div>

        </div>
        <div className='slider-card'>
            <BiSolidQuoteAltLeft className='icon'/>
            <div className='slidercontent'>
                <div>
                    <p>There are many different animals in<br/> the zoo, but I liked the giraffe the<br/>
                        most. He is very kind and sociable.<br/> I will come to the giraffe every week.</p>
                    <h1>John Clark</h1>
                </div>
                    <img src={boy} alt="" className='boy'/>
            </div>

        </div>
        <div className='slider-card'>
            <BiSolidQuoteAltLeft className='icon'/>
            <div className='slidercontent'>
                <div>
                    <p>There are many different animals in<br/> the zoo, but I liked the giraffe the<br/>
                        most. He is very kind and sociable.<br/> I will come to the giraffe every week.</p>
                    <h1>John Clark</h1>
                </div>
                    <img src={boy} alt="" className='boy'/>
            </div>

        </div>
        <div className='slider-card'>
                <BiSolidQuoteAltLeft className='icon'/>
            <div className='slidercontent'>
                <div>
                    <p>There are many different animals in<br/> the zoo, but I liked the giraffe the<br/>
                        most. He is very kind and sociable.<br/> I will come to the giraffe every week.</p>
                    <h1>John Clark</h1>
                </div>
                    <img src={boy} alt="" className='boy'/>
            </div>

        </div>
        <div className='slider-card'>
        <BiSolidQuoteAltLeft className='icon'/>
        <div className='slidercontent'>
                <div>
                    <p>There are many different animals in<br/> the zoo, but I liked the giraffe the<br/>
                        most. He is very kind and sociable.<br/> I will come to the giraffe every week.</p>
                    <h1>John Clark</h1>
                </div>
                    <img src={boy} alt="" className='boy'/>
            </div>
        </div>
    </Slider>
      </div>
  )
}
