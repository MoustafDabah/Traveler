import React from "react";
import "./Timeline.scoped.css";


import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleFourFill } from "react-icons/pi";
import { PiNumberCircleFiveFill } from "react-icons/pi";
import { PiNumberCircleSixFill } from "react-icons/pi";


const Timeline =()=>{
    return(
        <div className="tt">
            
            <div className="Timeline">
                <div className="container-timeline left-container">
                <PiNumberCircleOneFill className="icon-timeline"/>
                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container-timeline right-container">
                <PiNumberCircleTwoFill className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                        <span className="right-container-arrow"></span>

                    </div>
                </div>
                <div className="container-timeline left-container">
                <PiNumberCircleThreeFill className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container-timeline right-container">
                <PiNumberCircleFourFill className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="right-container-arrow"></span>

                    </div>
                </div>
                <div className="container-timeline left-container">
                <PiNumberCircleFiveFill className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="left-container-arrow"></span>

                    </div>
                </div>
                <div className="container-timeline right-container">
                <PiNumberCircleSixFill className="icon-timeline"/>
                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="right-container-arrow"></span>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Timeline;