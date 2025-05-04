import { useLocation } from 'react-router-dom';
import './Destination.css';
import Navbar from './Navbar';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultImage from '../../public/Images/default-image.jpg';

const Destination = () => {
    const location = useLocation();
    const place = location.state?.place;
    const suggestions = location.state?.suggestions || [];

    if (!place) return <div>Không tìm thấy thông tin địa điểm</div>;

    useEffect(() => {
      if (!place) return;

      const fetchSuggestions = async () => {
          try {
              const response = await axios.post('http://localhost:5000/suggestions', {
                  name: place["Tên địa điểm"],
                  province: place["Tỉnh thành"]
              });
              setSuggestions(response.data);
          } catch (error) {
              console.error("Lỗi khi gọi API:", error);
          }
      };

      fetchSuggestions();
  }, [place]);

    return (
        <div>
            <Navbar />
            <div className="destination-container">
                <div className="destination-card">
                <img
                  src={`https://drive.google.com/thumbnail?id=${place["ID Ảnh URL địa điểm"]}`}
                  alt={place["Tên địa điểm"]}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />

                    <h1>{place["Tên địa điểm"]}</h1>
                    <p><strong>Tỉnh thành:</strong> {place["Tỉnh thành"]}</p>
                    <p><strong>Mô tả:</strong> {place["Mô tả"]}</p>
                    <iframe src={place["Link google map"]}
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="suggestions-container">
                  <h2>Gợi ý điểm đến cho bạn</h2>
                  {suggestions.length === 0 ? (
                      <p>Không có gợi ý phù hợp.</p>
                  ) : (
                    suggestions.map((place, index) => (
                      <div className="suggestion-card" key={index}>
                        <img
                          src={`https://drive.google.com/thumbnail?id=${place["ID Ảnh URL địa điểm"]}`}
                          alt={place["Tên địa điểm"]}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                          }}
                        />
                        <div className="info">
                          <h3>{place["Tên địa điểm"]}</h3>
                          <p><strong>{place["Thể loại"]}</strong></p>
                          <p>{place["Mô tả"]}</p>
                        </div>
                        <div className="rating">⭐ 4.5</div> 
                        <button className="save-button">Save</button>
                      </div>
                    ))
                    
                  )}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Destination;