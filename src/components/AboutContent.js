import React from 'react';
import '../styles/about.css';


function AboutContent() {
	return (
		<div>
			<hr />
			<div className="about-content">
				<h1 className="about-title animate__animated animate__fadeInRight animate__delay-1s">OBSKUR MUSIC</h1>
				<h3 className="sub-title animate__animated animate__fadeInRight animate__delay-2s">Queer Techno</h3>
				<h4 className="content animate__animated animate__fadeInRight animate__delay-3s">
				OBSKUR MUSIC is an independent and DIY Canadian underground Techno label Founded in September of 2016 by producer's/DJ's Kloves & Nomad Black. Our goal is to focus on the darker dimensions of Techno, staying underground while showcasing established & upcoming Techno artists world-wide especially with a focus on LGBTQ+ & POC folks. Although OBSKUR MUSIC will never turn down good techno.
				</h4>
			</div>
		</div>
	);
}

export default AboutContent;