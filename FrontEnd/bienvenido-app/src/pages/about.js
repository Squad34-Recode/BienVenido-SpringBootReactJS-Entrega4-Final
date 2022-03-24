import React from 'react';
import { Link } from 'react-router-dom';
import AboutTxt from '../components/AboutComponents/AboutTxt';
import SlideSwiper from '../components/AboutComponents/SlideSwiper';

import '../styles/SlideSwiper.css';

const about = () => {
    return (
        <>
            <section className='breadcrumb-title'>
                <h1>Acerca de</h1>
                <ul class="breadcrumb">
                    <li><Link to='/' className='breadcrumb-link'>Comienzo</Link></li>
                    <li>/</li>
                    <li>Acerca de</li>
                </ul>
            </section>
            <AboutTxt />
            <section className='teachers'>
                <h1 className='heading'>← organizadores →</h1>
            </section>
            <SlideSwiper />
        </ >
    )
}
export default about;