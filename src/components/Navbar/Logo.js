import React from 'react';
import logo from './logo.png';

console.log(logo)
function obskurLogo() {
    const logoLink = '/Home';
    return <a href={logoLink}><img src={logo} alt="OBSKUR MUSIC Logo" width="100px" height="100px"/></a>
};

export default obskurLogo;