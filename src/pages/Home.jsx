import React, { useRef } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell } from 'react-icons/fa';

const destinations = [
    {
        image: 'Images/danang.jpg',
        title: 'Da Nang City',
        description: 'Discover the stunning beauty of Da Nang with its pristine My Khe Beach, iconic Dragon Bridge, and magical Ba Na Hills',
    },
    {
        image: 'Images/hanoi.jpg',
        title: 'Ha Noi capital',
        description: 'Explore the thousand-year-old capital, a vibrant city renowned for Hoan Kiem Lake, its charming Old Quarter, and exquisite cuisine that will tantalize your taste buds.',
    },
    {
        image: 'Images/phuquoc.jpg',
        title: 'Phu Quoc Island',
        description: "Vietnam's gem island, featuring pristine beaches and fresh seafood.",
    },
    {
        image: 'Images/tphcm.jpg',
        title: 'Ho Chi Minh City',
        description: 'Experience the vibrant pulse of the city, known for Ben Thanh Market and an exciting nightlife.',
    },
    {
        image: 'src/assets/DaLat.jpg',
        title: 'Da Lat City',
        description: 'A romantic highland town known for its cool climate, flower gardens, and pine-covered hills.',
    },
    {
        image: 'src/assets/haiphong.jpg',
        title: 'Hai Phong City',
        description: 'A port city with colonial architecture, Do Son beach, and gateway to Cat Ba Island.',
    },
    {
        image: 'src/assets/binhdinh.jpg',
        title: 'Quy Nhon City',
        description: 'A rising beach destination with clear blue waters, Ky Co island, and peaceful coastal life.',
    },
    {
        image: 'src/assets/vungtau.jpg',
        title: 'Vung Tau City',
        description: 'A popular getaway from Saigon with beautiful beaches, lighthouse, and seafood.',
    },
];

const Home = () => {
    const popularRef = useRef(null);

    const scrollLeft = () => {
        popularRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        popularRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="overlay">
                    <h1 className="title">Explore the World with Us</h1>
                    <p className="subtitle">Discover amazing places at exclusive deals</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </div>
            
            <section className="section">
                <h2 className="section-title">Popular Destinations</h2>
                <div className="carousel">
                    <button className="nav-button" onClick={scrollLeft}>◀</button>
                    <div className="item-list" ref={popularRef}>
                        {destinations.map((city, index) => (
                            <div className="item card" key={index}>
                                <img src={city.image} alt={city.title} className="card-image" />
                                <div className="card-content">
                                    <h3 className="card-title">{city.title}</h3>
                                    <p className="card-description">{city.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="nav-button" onClick={scrollRight}>▶</button>
                </div>
            </section>
            
            <Footer />
        </>
    );
};

export default Home;