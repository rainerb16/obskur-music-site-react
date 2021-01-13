import React from 'react';
import HomepageContent from '../components/HomepageContent';
import TopContentImage from '../components/TopContentImage';
import Podcasts from '../components/Podcasts';
import Footer from '../components/Footer';
import '../styles/homePage.css';


function HomePage() {
	return (
		<div>
			<HomepageContent />
			<TopContentImage />
            <Podcasts />
			<Footer />
		</div>
	);
}

export default HomePage;