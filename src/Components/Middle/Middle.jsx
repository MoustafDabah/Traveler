import React from "react";
import './Middle.css' 
import { TbWorld } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import { IoIosFlag } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { useSpring,animated } from "react-spring";
function Number({n}){
        const {number}=useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:1,tension:20,friction:10},
        });
        return(
            <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
        );
}
const Middle =()=>{
    return(
        <div className="middle section1">
            <div className="secContainer container">
                <div className="grid">
                    <div className="Text">
                            <h1>
                                we focus on ehat is important to you and use our technology experties to slove your biggest challanges.
                            </h1>
                    </div>
                    <div className="Dispflex">
                        <span className="flex1">
                            <TbWorld className="icon1" />
                            <h2 className="dispflex"><Number n={100}/><sub>+</sub></h2>
                            <p>Global Clients</p>
                        </span>
                        <span className="flex1">
                            <MdMoreTime className="icon1" />
                            <h2 className="dispflex"><Number n={17}/><sub>+</sub></h2>
                            <p>Years of innovation</p>
                        </span>
                        <span className="flex1">
                        <IoIosFlag className="icon1" />

                        <h2 className="dispflex"><Number n={180}/><sub>+</sub></h2>
                            <p>Countries</p>
                        </span>
                        <span className="flex1">
                        <RiTeamFill className="icon1" />

                        <h2 className="dispflex"><Number n={20}/><sub>+</sub></h2>
                            <p>Team of experts</p>
                        </span>
                        <span className="flex1">
                        <FaHandshake className="icon1" />

                        <h2 className="dispflex"><Number n={190}/><sub>+</sub></h2>
                            <p>Partners</p>
                        </span>
                        <span className="flex1">
                        <IoPeopleCircleOutline className="icon1"/>
                        <h2 className="dispflex"><Number n={2}/><sub>lakhs+</sub></h2>

                            <p>Travel Agents</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Middle;