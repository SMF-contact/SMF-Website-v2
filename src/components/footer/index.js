import React from "react";
import "./style.css"
import WhiteLogo from "../../imgs/WhiteLogo.png"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-top">
                            <a href="#" className="footer-logo"><img src={WhiteLogo} alt="" /></a>
                            <div className="footer-social">
                                <a href="https://twitter.com/SmartFinance_AI" target="_blank" rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM30.6308 13.738C31.6765 13.6128 32.6735 13.3357 33.6 12.9241C32.907 13.9606 32.0301 14.8711 31.0189 15.6018C31.0298 15.8227 31.034 16.0461 31.034 16.2704C31.034 23.1017 25.8339 30.9795 16.3249 30.9795C13.4052 30.9795 10.688 30.1228 8.4 28.6562C8.80401 28.7049 9.21558 28.7293 9.63388 28.7293C12.0563 28.7293 14.2855 27.902 16.0544 26.5161C13.7924 26.4741 11.8824 24.979 11.2247 22.9253C11.5405 22.9858 11.8648 23.0185 12.1982 23.0185C12.6694 23.0185 13.1264 22.9547 13.5598 22.8371C11.1962 22.3608 9.41297 20.2719 9.41297 17.7664V17.7017C10.111 18.0889 10.9072 18.3216 11.7556 18.3484C10.3671 17.4211 9.45581 15.8387 9.45581 14.0454C9.45581 13.098 9.71031 12.2101 10.1555 11.4466C12.7056 14.5746 16.5147 16.6333 20.8119 16.8483C20.7237 16.4695 20.6775 16.0747 20.6775 15.6699C20.6775 12.8149 22.9923 10.5 25.8473 10.5C27.3332 10.5 28.6779 11.1283 29.6212 12.1329C30.7979 11.9002 31.9058 11.471 32.9037 10.878C32.5182 12.085 31.6984 13.0979 30.6308 13.738Z" fill="#79C043"/>
                                    </svg>
                                </a>
                                <a href="https://t.me/SmartFinance_SMF_AI" target="_blank" rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM29.4438 10.623L8.04723 20.0173C7.27684 20.3555 7.33319 21.5224 8.1322 21.7768L12.5447 23.182C13.3869 23.4502 14.2988 23.3115 15.0342 22.8035L24.9825 15.9304C25.2825 15.7231 25.6094 16.1497 25.3531 16.4139L18.1922 23.797C17.4975 24.5132 17.6354 25.7267 18.471 26.2507L26.4884 31.2784C27.3877 31.8423 28.5445 31.2759 28.7127 30.1892L31.4798 12.3132C31.6669 11.105 30.5181 10.1513 29.4438 10.623Z" fill="#79C043"/>
                                    </svg>
                                </a>
                                <a href="https://discord.gg/QBkVH5R5" target="_blank" rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7737 24.7515C14.3768 24.7515 13.2258 23.5252 13.2258 22.0192C13.2258 20.5132 14.3545 19.2869 15.7737 19.2869C17.204 19.2869 18.3438 20.5239 18.3214 22.0192C18.3214 23.5252 17.1928 24.7515 15.7737 24.7515ZM25.1938 24.7515C23.797 24.7515 22.646 23.5252 22.646 22.0192C22.646 20.5132 23.7746 19.2869 25.1938 19.2869C26.6242 19.2869 27.7639 20.5239 27.7416 22.0192C27.7416 23.5252 26.6242 24.7515 25.1938 24.7515Z" fill="#79C043"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M42 21C42 32.598 32.598 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21ZM24.5289 10.6586C26.5549 10.9931 28.4925 11.5773 30.2995 12.3701C30.3151 12.3765 30.3285 12.3873 30.3363 12.4023C33.5378 16.9053 35.119 21.9847 34.5279 27.8323C34.5257 27.8571 34.5123 27.8797 34.491 27.8947C32.0662 29.5975 29.7173 30.6313 27.4008 31.3165C27.3639 31.3273 27.3237 31.3144 27.3013 31.2843C26.7661 30.5721 26.28 29.8213 25.8542 29.0328C25.8296 28.9866 25.852 28.9306 25.9023 28.9123C26.6744 28.6337 27.4086 28.3002 28.1148 27.9055C28.1707 27.8743 28.1741 27.7979 28.1227 27.7613C27.9729 27.6548 27.8243 27.5429 27.6824 27.4311C27.6556 27.4106 27.6198 27.4063 27.5896 27.4203C23.0047 29.4459 17.9817 29.4459 13.3421 27.4203C13.3119 27.4074 13.2761 27.4117 13.2504 27.4321C13.1085 27.544 12.9599 27.6548 12.8112 27.7613C12.7598 27.7979 12.7643 27.8743 12.8202 27.9055C13.5264 28.2927 14.2606 28.6337 15.0316 28.9134C15.0819 28.9317 15.1054 28.9866 15.0808 29.0328C14.664 29.8224 14.1779 30.5732 13.6326 31.2853C13.6091 31.3144 13.57 31.3273 13.5331 31.3165C11.2278 30.6313 8.87892 29.5975 6.45403 27.8947C6.43392 27.8797 6.41939 27.856 6.41716 27.8313C5.92324 22.7733 6.93007 17.6518 10.6054 12.4013C10.6143 12.3873 10.6277 12.3765 10.6434 12.3701C12.4514 11.5762 14.3891 10.9921 16.4139 10.6586C16.4508 10.6532 16.4877 10.6694 16.5067 10.7006C16.757 11.1244 17.0431 11.6676 17.2364 12.1119C19.3707 11.7999 21.5386 11.7999 23.7176 12.1119C23.9109 11.6773 24.187 11.1244 24.4362 10.7006C24.4552 10.6683 24.492 10.6522 24.5289 10.6586Z" fill="#79C043"/>
                                    </svg>
                                </a>
                                <a href="https://www.reddit.com/user/SmartFinanceToken" target="_blank" rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 42C9.4017 42 0 32.5983 0 21C0 9.4017 9.4017 0 21 0C32.5983 0 42 9.4017 42 21C42 32.5983 32.5983 42 21 42ZM35.007 21C34.9854 20.4089 34.7933 19.8367 34.4538 19.3523C34.1143 18.8679 33.6419 18.4921 33.0936 18.2701C32.5453 18.0481 31.9446 17.9895 31.3637 18.1012C30.7829 18.213 30.2468 18.4904 29.82 18.9C27.4311 17.2761 24.6229 16.379 21.735 16.317L23.1 9.765L27.594 10.71C27.6474 11.2066 27.8761 11.6679 28.239 12.0111C28.6019 12.3543 29.0752 12.5569 29.5741 12.5826C30.0729 12.6083 30.5645 12.4553 30.9607 12.1512C31.3569 11.847 31.6317 11.4116 31.7358 10.9231C31.8399 10.4346 31.7665 9.92497 31.5287 9.48571C31.291 9.04646 30.9044 8.70633 30.4385 8.52639C29.9726 8.34645 29.4577 8.33848 28.9864 8.5039C28.5152 8.66933 28.1183 8.99732 27.867 9.429L22.722 8.4C22.6379 8.38154 22.5509 8.37996 22.4661 8.39536C22.3814 8.41076 22.3005 8.44283 22.2282 8.48971C22.156 8.53659 22.0937 8.59735 22.0451 8.66847C21.9965 8.73958 21.9625 8.81964 21.945 8.904L20.391 16.191C17.4676 16.2351 14.6208 17.1329 12.201 18.774C11.8773 18.4694 11.4912 18.2388 11.0695 18.0983C10.6478 17.9577 10.2006 17.9105 9.75881 17.96C9.31707 18.0095 8.89136 18.1544 8.5112 18.3848C8.13103 18.6151 7.80549 18.9253 7.55715 19.294C7.30881 19.6627 7.14359 20.0809 7.07296 20.5198C7.00233 20.9586 7.02796 21.4076 7.14809 21.8356C7.26822 22.2635 7.47996 22.6603 7.76866 22.9983C8.05735 23.3362 8.41608 23.6074 8.82 23.793C8.79635 24.1005 8.79635 24.4095 8.82 24.717C8.82 29.421 14.301 33.243 21.063 33.243C27.825 33.243 33.306 29.421 33.306 24.717C33.3296 24.4095 33.3296 24.1005 33.306 23.793C33.8242 23.5354 34.2589 23.1365 34.56 22.6422C34.861 22.148 35.016 21.5786 35.007 21ZM14.007 23.1C14.007 22.543 14.2282 22.0089 14.6221 21.6151C15.0159 21.2213 15.55 21 16.107 21C16.664 21 17.1981 21.2213 17.5919 21.6151C17.9858 22.0089 18.207 22.543 18.207 23.1C18.207 23.657 17.9858 24.1911 17.5919 24.5849C17.1981 24.9788 16.664 25.2 16.107 25.2C15.55 25.2 15.0159 24.9788 14.6221 24.5849C14.2282 24.1911 14.007 23.657 14.007 23.1ZM26.208 28.875C24.7181 29.9978 22.885 30.5692 21.021 30.492C19.157 30.5692 17.3239 29.9978 15.834 28.875C15.7447 28.7662 15.6991 28.6281 15.706 28.4875C15.7129 28.3469 15.7718 28.2139 15.8714 28.1144C15.9709 28.0148 16.1039 27.9559 16.2445 27.949C16.3851 27.9421 16.5232 27.9877 16.632 28.077C17.8946 29.0031 19.4357 29.4699 21 29.4C22.5662 29.4852 24.1145 29.0333 25.389 28.119C25.4427 28.0588 25.5082 28.0104 25.5815 27.9766C25.6547 27.9429 25.7341 27.9245 25.8147 27.9228C25.8953 27.921 25.9755 27.9358 26.0501 27.9663C26.1248 27.9968 26.1923 28.0424 26.2486 28.1001C26.3049 28.1579 26.3487 28.2266 26.3774 28.302C26.406 28.3774 26.4188 28.4578 26.415 28.5384C26.4111 28.6189 26.3908 28.6979 26.3552 28.7702C26.3196 28.8426 26.2695 28.9068 26.208 28.959V28.875ZM25.83 25.284C25.4147 25.284 25.0086 25.1608 24.6633 24.9301C24.318 24.6993 24.0488 24.3714 23.8899 23.9876C23.7309 23.6039 23.6893 23.1817 23.7703 22.7743C23.8514 22.367 24.0514 21.9928 24.3451 21.6991C24.6388 21.4054 25.0129 21.2054 25.4203 21.1244C25.8277 21.0433 26.2499 21.0849 26.6336 21.2439C27.0174 21.4028 27.3453 21.672 27.5761 22.0173C27.8068 22.3626 27.93 22.7687 27.93 23.184C27.9414 23.4685 27.8948 23.7524 27.7931 24.0184C27.6913 24.2844 27.5366 24.5269 27.3382 24.7312C27.1398 24.9354 26.9019 25.0972 26.639 25.2067C26.3762 25.3162 26.0938 25.3711 25.809 25.368L25.83 25.284Z" fill="#79C043"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/smartfinance.token/" target="_blank" rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM14.5356 21.0059C14.5356 17.4325 17.4324 14.5357 21.0058 14.5357C24.5793 14.5357 27.4761 17.4325 27.4761 21.0059C27.4761 24.5794 24.5793 27.4762 21.0058 27.4762C17.4324 27.4762 14.5356 24.5794 14.5356 21.0059ZM21.0058 25.2059C18.6862 25.2059 16.8058 23.3255 16.8058 21.0059C16.8058 18.6863 18.6862 16.8059 21.0058 16.8059C23.3254 16.8059 25.2058 18.6863 25.2058 21.0059C25.2058 23.3255 23.3254 25.2059 21.0058 25.2059ZM29.2434 14.2761C29.2434 15.1111 28.5664 15.7881 27.7313 15.7881C26.8963 15.7881 26.2194 15.1111 26.2194 14.2761C26.2194 13.441 26.8963 12.7641 27.7313 12.7641C28.5664 12.7641 29.2434 13.441 29.2434 14.2761ZM15.805 8.47582C17.149 8.4145 17.578 8.4 21 8.4C24.422 8.4 24.851 8.4145 26.195 8.47582C27.5361 8.53699 28.452 8.75001 29.2535 9.06146C30.082 9.38346 30.7847 9.81429 31.4852 10.5148C32.1857 11.2153 32.6165 11.9179 32.9385 12.7465C33.25 13.548 33.463 14.4639 33.5242 15.805C33.5855 17.1489 33.6 17.578 33.6 20.9999C33.6 24.4219 33.5855 24.851 33.5242 26.1949C33.463 27.536 33.25 28.452 32.9385 29.2534C32.6165 30.082 32.1857 30.7846 31.4852 31.4852C30.7847 32.1856 30.082 32.6165 29.2535 32.9384C28.452 33.2499 27.5361 33.4629 26.195 33.5241C24.851 33.5854 24.422 33.5999 21 33.5999C17.578 33.5999 17.149 33.5854 15.805 33.5241C14.4639 33.4629 13.548 33.2499 12.7465 32.9384C11.918 32.6165 11.2153 32.1856 10.5148 31.4852C9.8143 30.7846 9.38346 30.082 9.06151 29.2534C8.75001 28.452 8.53699 27.536 8.47582 26.1949C8.4145 24.851 8.4 24.4219 8.4 20.9999C8.4 17.578 8.4145 17.1489 8.47582 15.805C8.53699 14.4639 8.75001 13.548 9.06151 12.7465C9.38346 11.9179 9.8143 11.2153 10.5148 10.5148C11.2153 9.81429 11.918 9.38346 12.7465 9.06146C13.548 8.75001 14.4639 8.53699 15.805 8.47582ZM21 10.6703C24.3643 10.6703 24.7629 10.6831 26.0915 10.7437C27.32 10.7997 27.9871 11.005 28.4311 11.1776C29.0193 11.4061 29.439 11.6792 29.8799 12.1201C30.3208 12.561 30.5938 12.9807 30.8224 13.5689C30.995 14.0129 31.2002 14.68 31.2563 15.9085C31.3169 17.2371 31.3297 17.6356 31.3297 20.9999C31.3297 24.3643 31.3169 24.7628 31.2563 26.0914C31.2002 27.3199 30.995 27.9871 30.8224 28.431C30.5938 29.0192 30.3208 29.4389 29.8799 29.8798C29.439 30.3207 29.0193 30.5938 28.4311 30.8223C27.9871 30.9949 27.32 31.2002 26.0915 31.2562C24.7631 31.3168 24.3646 31.3297 21 31.3297C17.6354 31.3297 17.237 31.3168 15.9085 31.2562C14.68 31.2002 14.0129 30.9949 13.5689 30.8223C12.9807 30.5938 12.561 30.3207 12.1201 29.8798C11.6792 29.4389 11.4061 29.0192 11.1776 28.431C11.005 27.9871 10.7998 27.3199 10.7437 26.0914C10.6831 24.7628 10.6703 24.3643 10.6703 20.9999C10.6703 17.6356 10.6831 17.2371 10.7437 15.9085C10.7998 14.68 11.005 14.0129 11.1776 13.5689C11.4061 12.9807 11.6792 12.561 12.1201 12.1201C12.561 11.6792 12.9807 11.4061 13.5689 11.1776C14.0129 11.005 14.68 10.7997 15.9085 10.7437C17.2371 10.6831 17.6357 10.6703 21 10.6703Z" fill="#79C043"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/SmartFinanceToken-com" target="_blank" rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7859 39.7133C15.7861 39.7304 15.7862 39.7474 15.7864 39.7643L15.7859 39.7133Z" fill="#C4C4C4"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M42 21.5315C42 26.6683 40.2456 31.3849 37.3176 35.0859C37.253 35.1675 37.1879 35.2486 37.1222 35.3292C37.0571 35.4092 36.9914 35.4886 36.9251 35.5675C34.4677 38.4959 31.2551 40.7389 27.5973 41.979L27.5447 41.9788C27.5791 41.9737 27.6143 41.9676 27.6502 41.9605L26.9434 41.9607C26.4108 41.823 26.2063 41.3482 26.2063 40.9242C26.2063 40.6911 26.2091 40.2817 26.2129 39.7341L26.2129 39.7309L26.2129 39.7294C26.2206 38.619 26.2321 36.9429 26.2321 35.0184C26.2321 33.0093 25.5604 31.6954 24.8063 31.0306C29.4847 30.4979 34.3952 28.6778 34.3952 20.4059C34.3952 18.0558 33.5817 16.1339 32.2358 14.6284C32.4524 14.0838 33.173 11.8949 32.0269 8.93008C32.0269 8.93008 30.2672 8.35113 26.2579 11.1375C24.5807 10.6603 22.7836 10.4211 21.0006 10.4131C19.2151 10.4211 17.418 10.6603 15.7434 11.1375C11.7315 8.35113 9.96789 8.93008 9.96789 8.93008C8.82568 11.8949 9.54633 14.0838 9.76291 14.6284C8.41959 16.1339 7.60097 18.0558 7.60097 20.4059C7.60097 28.6566 12.5037 30.5045 17.1666 31.0477C16.5659 31.5857 16.0244 32.5348 15.8336 33.9266C14.6373 34.4765 11.5948 35.4269 9.72166 32.1369C9.72166 32.1369 8.61297 30.0709 6.50517 29.9176C6.50517 29.9176 4.45409 29.8912 6.36078 31.2275C6.36078 31.2275 7.73762 31.8897 8.6929 34.376C8.6929 34.376 9.92535 38.5635 15.7666 37.2629C15.7714 38.1063 15.778 38.8525 15.7836 39.4596L15.7859 39.7111L15.7859 39.7133L15.7864 39.7643C15.7913 40.2966 15.795 40.6954 15.795 40.9242C15.795 41.3512 15.5809 41.8307 15.0336 41.963L14.3614 41.9632C14.4138 41.973 14.4646 41.9807 14.5138 41.9863H14.4246C9.96436 40.4799 6.16468 37.4827 3.58647 33.5699C3.40957 33.3014 3.23842 33.0286 3.0732 32.7517C3.04016 32.6964 3.00735 32.6408 2.97479 32.5851C1.08587 29.3539 0 25.5727 0 21.5315C0 9.63996 9.40202 0 21 0C32.598 0 42 9.63996 42 21.5315Z" fill="#79C043"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="other_pages">
                                <Link to="/privacy-policy">Privacy policy</Link>
                                <Link to="/term-of-use">Term & Conditions</Link>
                            </div>
                            <p>© 2022 Smart Finance. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
