import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


import "./style.css"
import RoadMapBackg from "../../imgs/roadmap.png"


function RoadMap() {
    return (
        <div className="roadmap-area" id="roadmap">
            <img src={RoadMapBackg} className="RoadMapBackgrond" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                                <h3>ROADMAP</h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                            <div className="roadmap_slider">
                                <Swiper
                                    slidesPerView={2}
                                    direction={"vertical"}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk">
                                                <h2>2021-Q4</h2>
                                                <ul>
                                                    <li>Concept Design</li>
                                                    <li>Architectural Design</li>
                                                    <li>Marketing Strategy</li>
                                                    <li>Business Plan</li>
                                                    <li>Website v1 Launch</li>
                                                    <li>Whitepaper v1 Release</li>
                                                    <li>Social Media Channel Creation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk">
                                                <h2>2022-Q1</h2>
                                                <ul>
                                                    <li>1.000 Social Media User </li>
                                                    <li>Smart Contract Audit</li>
                                                    <li>Identity Rebranding</li>
                                                    <li>Whitepaper v2 Release</li>
                                                    <li>DaPP Interface Design</li>
                                                    <li class="roundShape" >Presale Launch</li>
                                                    <li class="roundShape" >Pancakeswap Listing</li>
                                                    <li class="roundShape" >CMC/CG Listing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk">
                                                <h2>2022-Q2</h2>
                                                <ul>
                                                    <li class="roundShape" >Airdrop</li>
                                                    <li class="roundShape" >Marketplace Interface design</li>
                                                    <li class="roundShape" >Dapp Audit</li>
                                                    <li class="roundShape" >Dapp Launch </li>
                                                    <li class="roundShape" >AntiScamAI Beta Launch</li>
                                                    <li class="roundShape" >SmartStake</li>
                                                    <li class="roundShape" >SmartDEX Launch</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk">
                                                <h2>2022-Q3</h2>
                                                <ul>
                                                    <li class="roundShape" >Marketplace Beta </li>
                                                    <li class="roundShape" >Exchange Listings</li>
                                                    <li class="roundShape" >Loyalty Program Announcement</li>
                                                    <li class="roundShape" >Marketplace Audit</li>
                                                    <li class="roundShape" >Marketplace Launch</li>
                                                    <li class="roundShape" >AntiScamAI Launch</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk">
                                                <h2>2022-Q4</h2>
                                                <ul>
                                                    <li class="roundShape" >SearchAI Learning</li>
                                                    <li class="roundShape" >Arbitration Beta</li>
                                                    <li class="roundShape" >Smart Wallet Beta</li>
                                                    <li class="roundShape" >AutoTradingAI Beta</li>
                                                    <li class="roundShape" >WhaleTrackerAI Beta</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="roadmapWrp">
                                            <div className="roadmapWrp-blk">
                                                <h2>2023-Q1</h2>
                                                <ul>
                                                    <li class="roundShape" >SearchAI Launch</li>
                                                    <li class="roundShape" >Arbitration Launch</li>
                                                    <li class="roundShape" >Smart Wallet Launch</li>
                                                    <li class="roundShape" >AutoTradingAI Launch</li>
                                                    <li class="roundShape" >WhaleTrackerAI Launch</li>
                                                    <li class="roundShape" >WhaleTrackerAI Feature Copy</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoadMap;
