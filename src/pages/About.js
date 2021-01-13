import React from 'react';
import '../styles/about.css';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import Kloves from '../components/Kloves';
import Em from '../components/Em';



function About() {
	return (
		<div>
			<AboutContent />
			<div className="founders-grid">
				<Kloves />
				<Em />
			</div>
			<Footer />
		</div>
	);
}

export default About;