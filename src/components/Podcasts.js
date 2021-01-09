import React from 'react';
import '../styles/podcasts.css';


function Podcasts() {
	return (
		<div>
			<div className="podcast-content">
				<div className="podcast-content">
					<h2>OBSKUR RADIO</h2>
                    <p>OBSKUR Radio is hosted by co-founder Emerencz and showcases mixes from LGBTQ+ & POC artists worldwide.</p>
				</div>
                <div className="podcast-listen">
                    <h3>Listen</h3>
                    <iframe className="listen-widget" width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/317363429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
			</div>
		</div>
	);
}

export default Podcasts;