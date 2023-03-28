import './index.css'
import Logo from '../../Images/logo.png'
import { FaBars } from "react-icons/fa";
function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="inner-wrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <div className="inner-logo">
                                        <a href="/">
                                            <img src={Logo} alt="logo"/>
                                        </a>
                                    </div>
                                    <div className="inner-menu">
                                        <ul>
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <a href="/">About</a>
                                            </li>
                                            <li>
                                                <a href="/">Work Process</a>
                                            </li>
                                            <li>
                                                <a href="/">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="/">Pricing Tables</a>
                                            </li>
                                            <li>
                                                <a href="/">Blog Entries</a>
                                            </li>
                                            <li>
                                                <a href="/">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="inner-bars">
                                        <a href="/">
                                            <FaBars />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;