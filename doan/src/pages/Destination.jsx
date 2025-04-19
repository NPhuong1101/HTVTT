import React from 'react';
import './Destination.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import HaNoi from '../assets/HaNoi.jpg';
import DaNang from '../assets/DaNang.jpg';
import PhuQuoc from '../assets/PhuQuoc.jpg';
import Avatar from '../assets/user1.png';
import NhaTrang from '../assets/NhaTrang.jpg';
import DaLat from '../assets/DaLat.jpg';
import Hue from '../assets/Hue.jpg';
import MocChau from '../assets/MocChau.jpg';

const Destination = () => {
    const [visibleMapIndex, setVisibleMapIndex] = useState(null);

    const toggleMap = (index) => {
        console.log('Toggling map visibility for index:', index);
        setVisibleMapIndex(visibleMapIndex === index ? null : index); 
    };

    const destinations = [
        {
            id: 1,
            name: 'Công viên Châu Á (Asia Park)',
            address: '1 Phan Bá Vành, Đà Nẵng',
            imgSrc: 'Images/congvienchaua.jpg',
            description: '📌 Công viên Châu Á là một trong những công viên giải trí lớn nhất Việt Nam, với nhiều trò chơi cảm giác mạnh và các hoạt động văn hóa độc đáo. Đặc biệt, bạn sẽ không thể bỏ qua vòng quay Sun Wheel – một trong những vòng quay cao nhất thế giới.',
            rating: '4.5 ⭐ (7,000 đánh giá)',
            activities: ['Trò chơi cảm giác mạnh', 'Tham quan văn hóa', 'Chụp hình với các biểu tượng nổi tiếng'],
            userReviews: [
                { username: '@The1230071972', date: 'January 2023', text: 'Bãi biển tuyệt vời, rất sạch sẽ và cảm giác ấm cúng...' },
                { username: '@Navigator29712', date: 'December 2024', text: 'Đó là một trải nghiệm không giống bất kỳ trải nghiệm nào khác...' }
            ],
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.46736884762!2d108.22305827459947!3d16.041219040188203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219e7a191cc17%3A0xe60f91d4055e3074!2sDA%20NANG%20DOWNTOWN!5e0!3m2!1svi!2s!4v1743322697659!5m2!1svi!2s"
        },
        // {
        //     id: 2,
        //     name: 'Bảo Tàng Điêu Khắc Chăm (Museum of Cham Sculpture)',
        //     address: '2 Hùng Vương, Đà Nẵng',
        //     imgSrc: 'Images/baotangdieukhac.jpg',
        //     description: '📌 Bảo tàng này chứa đựng bộ sưu tập các tác phẩm điêu khắc nổi tiếng của nền văn hóa Chăm, mang đến cái nhìn sâu sắc về lịch sử và nghệ thuật của người Chăm cổ đại.',
        //     rating: '4.7 ⭐ (890 đánh giá)',
        //     activities: ['Tham quan triển lãm', 'Tham gia workshop nghệ thuật'],
        //     userReviews: [
        //         { username: '@BeachLover123', date: 'February 2023', text: 'Một trải nghiệm vô cùng thú vị với gia đình trong kì nghỉ này!' }
        //     ],
        //     mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.099882427713!2d108.22069277459981!3d16.060305839677778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219cdb3006a2d%3A0x62ca993f60c3a12c!2zQuG6o28gdMOgbmcgxJBpw6p1IGto4bqvYyBDaMSDbSDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1743325911808!5m2!1svi!2s"
        // },
    ];

    const allDestinations = [
      {
        id: 4,
        location: "Nha Trang",
        category: "Biển",
        description: "Thành phố biển với những bãi cát trắng và nước trong xanh.",
        image: NhaTrang || defaultImage,
        rating: 4.5,
        ratingCount: 250
      },
      {
        id: 5,
        location: "Đà Lạt",
        category: "Núi",
        description: "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm.",
        image: DaLat || defaultImage,
        rating: 4.7,
        ratingCount: 100
      },
      {
        id: 6,
        location: "Huế",
        category: "Văn hóa",
        description: "Cố đô với nhiều di tích lịch sử và nét đẹp văn hóa cổ kính.",
        image: Hue || defaultImage,
        rating: 4.8,
        ratingCount: 150
      },
      {
        id: 7,
        location: "Phú Quốc",
        category: "Biển",
        description: "Hòn đảo thiên đường với những bãi biển tuyệt đẹp và hải sản tươi ngon.",
        image: PhuQuoc || defaultImage,
        rating: 4.6,
        ratingCount: 200
      },
      {
        id: 8,
        location: "Mộc Châu",
        category: "Núi",
        description: "Thiên đường của hoa cải, đồi chè và khí hậu trong lành.",
        image: MocChau || defaultImage,
        rating: 4.4,
        ratingCount: 300
      }
    ];
    

    return (
        <div>
            <Navbar />
            <div className="destination-container">
                {destinations.map((destination, index) => (
                    <div className="destination-card" key={destination.id}>
                        <img src={destination.imgSrc} alt={destination.name} className="destination-image" />
                        <div className="info-suggestion-wrapper">
                            <div className="destination-info">
                                <h1>{destination.name}</h1>
                                <p onClick={() => toggleMap(index)} style={{ cursor: 'pointer', color: 'blue' }}>
                                    📍 {destination.address}
                                </p>
                                {visibleMapIndex === index && (
                                    <div className="map-container">
                                        <iframe
                                            src={destination.mapSrc}
                                            width="600"
                                            height="450"
                                            style={{ border: '0' }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                )}
                                <p>{destination.description}</p>
                                <div className="rating">{destination.rating}</div>
                                <div className="activities">
                                    <h3>Những hoạt động thú vị</h3>
                                    <ul>
                                        {destination.activities.map((activity, idx) => (
                                            <li key={idx}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="user-reviews">
                                    <h3>Bình luận</h3>
                                    {destination.userReviews.map((review, idx) => (
                                        <div key={idx} className="review">
                                            <p><strong>{review.username}</strong> - {review.date}</p>
                                            <p>{review.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="suggestions-container">
                                <h2>Gợi ý điểm đến cho bạn</h2>
                                {allDestinations.map((place) => (
                                    <div className="suggestion-card" key={place.id}>
                                        <img src={place.image} alt={place.location} />
                                        <div className="info">
                                            <h3>{place.location}</h3>
                                            <p><strong>{place.category}</strong></p>
                                            <p>{place.description}</p>
                                        </div>
                                        <div className="rating">
                                        ⭐ {place.rating} <span className="rating-count">({place.ratingCount})</span>
                                        </div>
                                        <button className="save-button">Save</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};


export default Destination;