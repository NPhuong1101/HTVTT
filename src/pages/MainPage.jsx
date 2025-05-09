import React, { useRef } from 'react';
import './MainPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const destinations = [
  {
      image: 'Images/danang.jpg',
      title: 'Da Nang City',
      description: 'Discover the stunning beauty of Da Nang with its pristine My Khe Beach, iconic Dragon Bridge, and magical Ba Na Hills',
  },
  {
      image: 'Images/hanoi.jpg',
      title: 'Ha Noi Capital',
      description: 'Explore the thousand-year-old capital, a vibrant city renowned for Hoan Kiem Lake, its charming Old Quarter, and exquisite cuisine.',
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

const suggestions = [
  {
    image: 'src/assets/NhaTrang.jpg',
    title: 'Nha Trang Beach',
    description: 'Famous for its turquoise waters, coral reefs, and lively coastal atmosphere.',
  },
  {
    image: 'src/assets/halongbay.jpg',
    title: 'Ha Long Bay',
    description: 'A UNESCO World Heritage site known for its emerald waters and thousands of towering limestone islands.',
  },
  {
    image: 'src/assets/sapa.jpg',
    title: 'Sapa Highlands',
    description: 'Escape to the misty mountains and vibrant culture of ethnic minority groups.',
  },
  {
    image: 'src/assets/phuyen.jpg',
    title: 'Phu Yen Province',
    description: 'A hidden gem with untouched beaches, Ganh Da Dia, and peaceful countryside vibes.',
  },
  {
    image: 'src/assets/Hue.jpg',
    title: 'Hue Imperial City',
    description: 'Dive into the rich history of Vietnam’s former imperial capital.',
  },
];


const MainPage = () => {
  const popularRef = useRef(null);
  const suggestionRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: 'smooth' });
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
          <button className="nav-button" onClick={() => scrollLeft(popularRef)}>◀</button>
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
          <button className="nav-button" onClick={() => scrollRight(popularRef)}>▶</button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Suggestions for You</h2>
        <div className="carousel">
          <button className="nav-button" onClick={() => scrollLeft(suggestionRef)}>◀</button>
          <div className="item-list" ref={suggestionRef}>
            {suggestions.map((place, index) => (
              <div className="item card" key={index}>
                <img src={place.image} alt={place.title} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{place.title}</h3>
                  <p className="card-description">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-button" onClick={() => scrollRight(suggestionRef)}>▶</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
