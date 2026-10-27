import React from 'react'
import logo from "../../assets/images/logo.png"
import './navbar.css'
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Image from '../../components/Image';
import Anchor from '../../components/Anchor';

const data =[
    {
        id: 1,
        label: "home",
        url: "#"
    },
    {
        id: 2,
        label: "pages",
        url: "#"
    },
    {
        id: 3,
        label: "travel",
        url: "#"
    },
    {
        id: 4,
        label: "blog",
        url: "#"
    },
    {
        id: 5,
        label: "shop",
        url: "#"
    },
    {
        id: 6,
        label: "lements",
        url: "#"
    },
]

const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <Anchor href="/">
                        <Image src={logo} alt="logo" className="" />
                    </Anchor>
                </div>
                <div className="menu">
                    <ul>
                        {data.map((item, index)=>(
                            <li key={index}>
                                <Anchor href={item.url}>
                                    {item.label}
                                </Anchor>
                            </li>
                        ))

                        }
                    </ul>
                </div>
                <div className="nav_actions">
                    <Anchor href="/" className="nav_action_items">
                        <FaMessage />
                    </Anchor>
                    <Anchor href="/" className="nav_action_items">
                        <FaLocationArrow />
                    </Anchor>
                    <Anchor href="/" className="nav_action_items">
                        <FaHeart />
                    </Anchor>
                    <Anchor href="/" className="nav_action_items">
                        <FaPlus />
                    </Anchor>
                </div>
            </div>
        </div>
     </nav>
  )
}

export default Navbar