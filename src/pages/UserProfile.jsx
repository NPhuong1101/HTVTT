import React, { useState } from "react";
import "./UserProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HaNoi from '../assets/HaNoi.jpg';
import DaNang from '../assets/DaNang.jpg';
import PhuQuoc from '../assets/PhuQuoc.jpg';
import Avatar from '../assets/user1.png';
import NhaTrang from '../assets/NhaTrang.jpg';
import DaLat from '../assets/DaLat.jpg';
import Hue from '../assets/Hue.jpg';
import MocChau from '../assets/MocChau.jpg';


const travelHistory = [
  { id: 1, location: "Đà Nẵng", category: "Biển" },
  { id: 2, location: "Sapa", category: "Núi" },
  { id: 3, location: "Hội An", category: "Văn hóa" }
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

function getSuggestions(history, destinations) {
  const preferredCategories = history.map((h) => h.category);
  return destinations.filter((d) => preferredCategories.includes(d.category));
}

export default function UserProfile() {
  const user = {
    name: "Nguyễn Văn A",
    dob: "01/01/1990",
    gender: "Nam",
    email: "nguyenvana@gmail.com",
    avatar: Avatar,
  };

  const [travelHistory, setTravelHistory] = useState([
    {
      id: 1,
      name: "Hà Nội",
      date: "2024-03-10",
      rating: "⭐⭐⭐⭐⭐",
      review: "Nơi tuyệt vời để khám phá lịch sử và ẩm thực.",
      image: HaNoi
    },
    {
      id: 2,
      name: "Đà Nẵng",
      date: "2023-12-15",
      rating: "⭐⭐⭐⭐",
      review: "Biển đẹp, thành phố sạch sẽ và đáng sống.",
      image: DaNang,
    },
    {
      id: 3,
      name: "Phú Quốc",
      date: "2023-07-20",
      rating: "⭐⭐⭐⭐⭐",
      review: "Hòn đảo tuyệt đẹp với nhiều bãi biển hoang sơ.",
      image: PhuQuoc,
    },
  ]);

  return (
    <div>
      <Navbar />
      <div className="user-profile">
        <div>
          <div className="profile-card">
            <img src={user.avatar} alt="Avatar" className="avatar" />
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>Ngày sinh: {user.dob}</p>
              <p>Giới tính: {user.gender}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>

          <div className="recommend">
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

        <div className="travel-history">
          <h3>Lịch sử du lịch</h3>
          <div className="timeline">
            {travelHistory.map((place) => (
              <div className="timeline-item" key={place.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{place.date}</span>
                  <img src={place.image || "https://via.placeholder.com/100"} alt="Địa điểm" className="timeline-image" />
                  <div className="timeline-text">
                    <div className="timeline-header">
                      <strong className="timeline-location">{place.name}</strong>
                      <p className="timeline-rating">{place.rating}</p>
                    </div>
                    <p className="timeline-review">{place.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}