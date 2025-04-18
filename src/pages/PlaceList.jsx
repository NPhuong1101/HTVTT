import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import './PlaceList.css';
import dimage from '../../public/Images/default-image.jpg'

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/Info-trip.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setPlaces(results.data.slice(0, 20));
          },
        });
      });
  }, []);

  const handleClick = (place) => {
    navigate(`/destination/${place.ID}`, { state: { place } });
  };

  return (
    <div className="place-list">
      <h2>Danh sách địa điểm nổi bật</h2>
      <div className="place-grid">
        {places.map((place, idx) => (
          <div key={idx} className="place-card" onClick={() => handleClick(place)}>
            <img
              src={`https://drive.google.com/thumbnail?id=${place["ID Ảnh URL địa điểm"]}`}
              alt={place["Tên địa điểm"]}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = dimage; // ảnh mặc định khi lỗi
              }}
            />
            <h3>{place["Tên địa điểm"]}</h3>
            <p>{place["Tỉnh thành"]}</p>
            <p>{place["Thể loại"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
