import React from 'react'
import './banner.css'
import bannerImg from '../../assets/images/banner.jpg'
import { IoMdSearch } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Paragraph from '../../components/Paragraph';

const Banner = () => {
  return (
    <section id="banner" style={{backgroundImage: `url(${bannerImg})`}}>
        <div className="container">
            <div className="banner_wrapper">
                <h1>CHOOSE <br/>THE PERFECT DESTINATIONS.</h1>
                <Paragraph className="para" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation." />
                <form> 
                    <div className="form_inner">
                        <div className="banner_search">
                            <input type="text" placeholder="Enter Your Location"/>
                            <IoMdSearch />
                        </div>
                        <div className="map_circle">
                            <FaMapMarkerAlt />
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </section>
  )
}

export default Banner
