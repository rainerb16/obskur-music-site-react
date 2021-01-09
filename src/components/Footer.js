import React from 'react';
import '../styles/footer.css';


function HomePage() {
    const links = {
        facebook:'https://www.facebook.com/obskurtechno',
        instagram: 'http://www.instagram.com/obskurtechno',
        twitter: 'http://www.twitter.com/obskurtechno',
        soundcloud: 'http://www.soundcloud.com/obskurtechno',
        youtube: 'https://www.youtube.com/channel/UCxDJSJSOWXxIVxknr0B2r1g',
    }

	return (
		<div>
			<div className="footer-container">
                <a href={links.facebook} target="_blank"><i class="fab fa-facebook-f" /></a>
                <a href={links.instagram} target="_blank"><i class="fab fa-instagram" /></a>
                <a href={links.twitter} target="_blank"><i class="fab fa-twitter" /></a>
                <a href={links.soundcloud} target="_blank"><i class="fab fa-soundcloud" /></a>
                <a href={links.youtube} target="_blank"><i class="fab fa-youtube" /></a>
			</div>
		</div>
	);
}

export default HomePage;