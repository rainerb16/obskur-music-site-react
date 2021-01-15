import React, { useEffect } from 'react';
import '../styles/podcasts.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Podcasts() {
	// initialize animate on scroll
	useEffect(() => {
		Aos.init({duration: 1500});
	}, []);
		
	return (
		<div>
			<div className="podcast-content">
				<div className="podcast-content" data-aos="fade-right">
					<h2>OBSKUR RADIO</h2>
                    <p>OBSKUR Radio is hosted by co-founder Emerencz and showcases mixes from LGBTQ+ & POC artists worldwide.</p>
				</div>
                <div className="podcast-listen" data-aos="fade-left">
                    <h3>Listen</h3>
                    <iframe className="listen-widget" width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/317363429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
			</div>
		</div>
	);
}

export default Podcasts;