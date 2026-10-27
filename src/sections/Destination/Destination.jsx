import React from 'react'
import './destination.css'
import videothumbnail from '../../assets/images/videothumbnail.jpg'
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from '../../components/Image';
import Paragraph from '../../components/Paragraph';


const Destination = () => {
  return (
    <section id="destination">
        <div className="container">
            <div className="destination_wrapper">
                <div className="destination_content">
                    <h4 className="sec_subtitle">
                        FEATURED DESTINATION
                    </h4>
                    <h2 className="sec_title">
                        CHOOSE <br/> THE PERFECT ACCODOMATION.
                    </h2>
                    <Paragraph className="para" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."/>
                </div>
                <div className="destination_video">
                    <Image src={videothumbnail} alt="destinaion_vid_thumbnail" />
                    <a href="#" className="destination_video_icon">
                        <FaPlay />
                    </a>
                </div>
            </div>
            <div className="book_now">
                <div className="location_price">
                    <div className="location">
                        <h4>TRAVEL LOCATION</h4>
                        <div className="star_wrapper">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className="price">
                        <p className="para">Tour Guide</p>
                        <span>$125,99</span>
                    </div>
                </div>
                <a className="book_now_btn" href="#"> Book Now</a>
            </div>
        </div>
    </section>
  )
}

export default Destination