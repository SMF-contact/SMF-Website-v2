import React from "react";
import ScrollAnimation from 'react-animate-on-scroll'; 
import "./style.css"
import ContentBlock from "../helper/block"
import FeatureShape from "../../imgs/feature-back.png"



function Features() {
    return (
        <div className="feature-area" id="features">
            <img src={FeatureShape} className="features-backg" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <h3>Features</h3>
                            </ScrollAnimation> 
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="AntiScamAI">
                <p>
                  Catering to all levels from beginner to expert, the Anti-Scam
                  AI analyser protect you from scams.
                  <br />
                  The algorithm help to avoid criminal's scams trying to steal
                  your hard-earned money by analysing:
                </p>
                <ul>
                  <li>Website content</li>
                  <li>Whitepaper content</li>
                  <li>Social Media posts and comments</li>
                  <li>Smart Contract code</li>
                  <li>Liquidity Lock</li>
                  <li>Dev Wallet</li>
                  <li>News Websites & Dicsussion Forum</li>
                </ul>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="AI Trading Bot">
                <p>
                  AutoTradingAI use deep learning to combine market sentiment &
                  news analysis with technical chart analysis to take trading
                  decisions.
                  <br />
                  It is an AI-powered trading system with a real-time risk
                  management engine, designed for traders of all levels.
                  <br />
                  The AutoTradingAI will help you make money no matter what the
                  market does!
                </p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="Whales AI Tracker">
                <p>
                  Whale Tracker AI is the world's first AI based whale tracker
                  that uses innovative artificial intelligence to search for
                  whales and track them, then analyses their trades on
                  blockchain in real-time to trade before the whale does.
                  <br />
                  You pre-trade the whale!
                </p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="Smart Wallet">
                <p>
                  The Smart Wallet is the latest and greatest in software-based
                  wallets. It's easy to use, flexible, and secure.
                  <br />
                  You can log in using your fingerprint or Face ID, making it
                  easier than ever before to manage your wallet on the go!
                </p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="SearchAI">
                <p>
                  SearchAI will be the next-generation Tinder as it matches all
                  your preferences with the preferences of all other users to
                  provide you with most accurate suggestions.
                  <br />
                  Because of Deep Learning it will become more and more accurate
                  over time.
                </p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="Arbitration">
                <p>
                  We are here to help people resolve their disputes in an
                  intelligent manner. Our system is based on human intelligence,
                  and it comes up with logical solutions that are acceptable for
                  all parties to dispute.
                </p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
