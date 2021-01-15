import React, { useEffect } from 'react';
import promoImage from '../images/promo.jpg';
import '../styles/homePage.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function TopContentImage() {
    // initialize animate on scroll
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="dual-image-container" data-aos="fade-left">
            <img className="dual-image" src={promoImage} alt="OBSKUR MUSIC Founders" />
        </div>
    );
}

export default TopContentImage;