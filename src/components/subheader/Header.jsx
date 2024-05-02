import  { useState } from 'react';
import { gsap } from "gsap";
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            if (window.innerWidth < 991) {
                closeMenu();
            }
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };


    var tl = gsap.timeline();






    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* Logo */}
                            <a href="index.html" className="logo">
                                Techavtar WebGuru
                            </a>
                            {/* Menu */}
                            <ul className={`nav ${menuOpen ? 'active' : ''}`} style={{ display: menuOpen ? 'block' : 'none', transition: 'all 0.2s ease' }}>
                                <li className="scroll-to-section"><a href="#top" className="active" onClick={scrollToSection}>Home</a></li>
                                <li><a href="meetings.html">Courses</a></li>
                                <li className="scroll-to-section"><a href="#apply" onClick={scrollToSection}>About Us</a></li>
                                <li className="has-sub">
                                    <a href="javascript:void(0)" onClick={() => setMenuOpen(true)}>Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="meetings.html">Upcoming Courses</a></li>
                                        <li><a href="meeting-details.html">Courses Details</a></li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section"><a href="#contact" onClick={scrollToSection}>Contact Us</a></li>
                            </ul>
                            {/* Menu Trigger */}
                            <a className='menu-trigger' onClick={toggleMenu}>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
