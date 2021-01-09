import React from 'react';
import TopContentImage from '../components/TopContentImage';
import Podcasts from '../components/Podcasts';
import Footer from '../components/Footer';
import '../styles/homePage.css';


function HomePage() {
	return (
		<div>
			<div className="main-content">
				<div className="top-content">
					<h4>OBSKUR MUSIC is an independent and DIY Canadian underground Techno label Founded in September of 2016 by producer's/DJ's Kloves & Nomad Black. Our goal is to focus on the darker dimensions of Techno, staying underground while showcasing established & upcoming Techno artists world-wide especially with a focus on LGBTQ+ & POC folks. Although OBSKUR MUSIC will never turn down good techno.</h4>
				</div>
				<TopContentImage />
                <Podcasts />
			</div>
			<Footer />
		</div>
	);
}

export default HomePage;