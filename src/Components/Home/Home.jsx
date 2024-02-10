import React from "react";
import "./Home.scoped.css";
import Navbar from "../NavBar/Navbar";
import Middle from "../Middle/Middle";
import Timeline from "../Timeline/Timeline";
import Ready from "../Ready/Ready";
import Testimation from "../Testimation/Testimation";
import Footer from "../Footer/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Icons
import { HiArrowNarrowRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Images
import img1 from "../../im&ve/1.jpg";
import img2 from "../../im&ve/2.jpg";
import img3 from "../../im&ve/3.jpg";
import img4 from "../../im&ve/4.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
    return (
        <div className="home App">
            {/* <Navbar /> */}

            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "30px",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={30}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                rewind={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <div className="text-content">
                        <h2 className="title">
                            Sea <span>Season</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                            ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
                            tempore maiores necessitatibus voluptamodi amet nostrum totam
                            vitae laudantium. Quae asperiores corporis nesciunt
                            adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
                            tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
                        </p>
                        <button className="read-btn">
                            Read More <HiArrowNarrowRight className="iIcon" />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img2} alt="" />
                    <div className="text-content">
                        <h2 className="title">
                            Pyramids <span>Season</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                            ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
                            tempore maiores necessitatibus voluptamodi amet nostrum totam
                            vitae laudantium. Quae asperiores corporis nesciunt
                            adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
                            tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
                        </p>
                        <button className="read-btn">
                            Read More <HiArrowNarrowRight className="iIcon" />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img3} alt="" />
                    <div className="text-content">
                        <h2 className="title">
                            Islamic <span>Season</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                            ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
                            tempore maiores necessitatibus voluptamodi amet nostrum totam
                            vitae laudantium. Quae asperiores corporis nesciunt
                            adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
                            tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
                        </p>
                        <button className="read-btn">
                            Read More <HiArrowNarrowRight className="iIcon" />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img4} alt="" />
                    <div className="text-content">
                        <h2 className="title">
                            Sea <span>Season</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                            ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
                            tempore maiores necessitatibus voluptamodi amet nostrum totam
                            vitae laudantium. Quae asperiores corporis nesciunt
                            adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
                            tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
                        </p>
                        <button className="read-btn">
                            Read More <HiArrowNarrowRight className="iIcon" />
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <Middle />
            <Timeline />
            <Ready />
            <Testimation />
            <Footer /> */}
        </div>
    );
};
export default Home;
