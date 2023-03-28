import './index.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWifi, FaBasketballBall } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-social">
                                <ul>
                                    <li>
                                        <a href="/">
                                            <FaFacebookF/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaTwitter/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaLinkedinIn/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaWifi/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                           <FaBasketballBall/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-text text-center">
                                <p>COPYRIGHT © 2020 SOFTY PINKO COMPANY - DESIGN: TEMPLATEMO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;