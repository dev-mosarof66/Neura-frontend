import React, { useEffect } from 'react';
import Navbar from '../../components/public/nav';
import Tabs from '../../components/public/tabs';
import '../../css/public/Landing.css'
import Hero from '../../components/public/hero'
const Landing = () => {
    useEffect(() => {
        document.title = `Neura`
    }, [])
    return (
        <div>
            <Hero />
        </div>
    );
};

export default Landing;