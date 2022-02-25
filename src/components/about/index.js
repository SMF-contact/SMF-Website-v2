import React from "react";
import "./style.css"
import ContentBlock from "../helper/block/"
import aboutShape from "../../imgs/about-shape.png"
import CircleBackg from "../../imgs/circles.png"
import VDefi from "../../imgs/global.svg"
import vmarketPlace from "../../imgs/networking.svg" 
import ScrollAnimation from 'react-animate-on-scroll'; 



function () {
    return (
        <div className="about-area" id="about">
            <img src={aboutShape} className="aboutShape" alt="" />
            <img src={CircleBackg} className="circleShape" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <h3>Our about</h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                            <ContentBlock>
                                <p>Smart Finance is a decentralised platform powered by Artificial Intelligence. The platform offers Defi services such as a Whale Tracker and an Anti-Scam Scanner, and a P2P Marketplace where buyers and sellers can make profitable deals. <br /><br />
                                A sophisticated artificial intelligence technology works at the back end of the Smart Finance platform. The platform has taken digital asset trading to a whole new level through the accuracy and speed of Artificial Intelligence which can increase profitability by trading smarter.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                            <ContentBlock classNames="btm_about mt-5" title="Defi App" img={VDefi}>
                                <p>Operates as a Decentralized Yield Optimizer platform, allowing users to earn compound interest on their assets.</p>
                                <p>It automatically optimizes user returns from different liquidity pools (LPs), automated market making (AMM), and other yield farming possibilities in the DeFi ecosystem using a set investment methods protected and enforced by smart contracts and powered by AI.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                            <ContentBlock classNames="btm_about mt-5" title="Marketplace" img={ vmarketPlace}>
                                <p>The P2P marketplace is where buyers and sellers meet to carry out operations involving digital goods and assets in a secure way, involving AI for searching, matching, and advising.</p>
                                <p>One of the multiple advantages is the automatic matching of users, based on a straight AI approach.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;


