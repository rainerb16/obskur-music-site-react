import React from 'react';
import '../styles/radio.css';
import radioexample from '../assets/radio-show/radioexample2.png'

function RadioContent() {
	return (
		<div>
			<hr />
			<div className="radio-content">
                <h1 className="radio-title animate__animated animate__fadeInRight animate__delay-1s">OBSKUR RADIO</h1>
				<h4 className="content animate__animated animate__fadeInRight animate__delay-1s">
                    OBSKUR RADIO is a month to month curated radio podcast, hosted by co-founder Nomad Black hosted on our <a href="http://www.soundcloud.com/obskurtechno">Soundcloud</a>. OBSKUR uses this platform to showcase Queer / Femme artists exploring the deeper dimensions of music. These hand-selected up & coming artists that have no boundaries to what style they want to share on this platform. Be sure to subscribe on Apple Podcasts for for an archive of past shows.
				</h4>
			</div>

            <h3 className="shows-main-title">SHOWS</h3>

            {/* Shows Grid (with artwork etc) goes here */}
            <div className="podcast-grid-container">
                <div className="podcast-show-item">
                    <h4 className="show-title">OBSKRRD000</h4>
                    <img src={radioexample} alt="A Silver Bag, podcast episode" className="show-img"/>
                    <p className="show-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="podcast-show-item">
                    <h4 className="show-title">OBSKRRD000</h4>
                    <img src={radioexample} alt="A Silver Bag, podcast episode" className="show-img"/>
                    <p className="show-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="podcast-show-item">
                    <h4 className="show-title">OBSKRRD000</h4>
                    <img src={radioexample} alt="A Silver Bag, podcast episode" className="show-img"/>
                    <p className="show-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
		</div>
	);
}

export default RadioContent;