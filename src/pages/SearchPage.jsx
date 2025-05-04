import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState('destinations');
  const navigate = useNavigate();

  const allDestinations = [
    { 
      id: 1, 
      name: 'Hà Nội', 
      country: 'Vietnam', 
      image: 'src/assets/HaNoi.jpg',
      description: 'Thủ đô ngàn năm văn hiến',
      activities: ['Hồ Hoàn Kiếm', 'Văn Miếu', 'Phố cổ']
    },
    { 
      id: 2, 
      name: 'Hải Phòng', 
      country: 'Vietnam', 
      image: 'src/assets/haiphong.jpg',
      description: 'Thành phố hoa phượng đỏ',
      activities: ['Cát Bà', 'Đồ Sơn', 'Chợ Sắt']
    },
    { 
      id: 3, 
      name: 'Quảng Ninh', 
      country: 'Vietnam', 
      image: 'src/assets/quangninh.png',
      description: 'Vịnh Hạ Long kỳ vĩ',
      activities: ['Vịnh Hạ Long', 'Bãi Cháy', 'Tuần Châu']
    },
    { 
      id: 4, 
      name: 'Bắc Ninh', 
      country: 'Vietnam', 
      image: 'src/assets/bacninh.jpg',
      description: 'Quê hương quan họ',
      activities: ['Làng quan họ', 'Chùa Dâu', 'Đền Đô']
    },
    { 
      id: 5, 
      name: 'Lạng Sơn', 
      country: 'Vietnam', 
      image: 'src/assets/langson.jpg',
      description: 'Xứ sở thạch nhũ',
      activities: ['Ải Chi Lăng', 'Động Nhị Thanh', 'Chợ Kỳ Lừa']
    },
    { 
      id: 6, 
      name: 'Thái Nguyên', 
      country: 'Vietnam', 
      image: 'src/assets/thainguyen.jpg',
      description: 'Thủ phủ chè Việt Nam',
      activities: ['Hồ Núi Cốc', 'Đồi chè Tân Cương', 'ATK Định Hóa']
    },
    { 
      id: 7, 
      name: 'Nam Định', 
      country: 'Vietnam', 
      image: 'src/assets/namdinh.jpg',
      description: 'Đất học xứ Nam',
      activities: ['Phủ Dầy', 'Biển Quất Lâm', 'Chùa Cổ Lễ']
    },
    { 
      id: 8, 
      name: 'Ninh Bình', 
      country: 'Vietnam', 
      image: 'src/assets/ninhbinh.jpg',
      description: 'Vịnh Hạ Long trên cạn',
      activities: ['Tràng An', 'Tam Cốc', 'Chùa Bái Đính']
    },
    { 
      id: 9, 
      name: 'Thanh Hóa', 
      country: 'Vietnam', 
      image: 'src/assets/thanhhoa.jpeg',
      description: 'Xứ sở Lam Kinh',
      activities: ['Biển Sầm Sơn', 'Thành nhà Hồ', 'Pù Luông']
    },
    { 
      id: 10, 
      name: 'Nghệ An', 
      country: 'Vietnam', 
      image: 'src/assets/nghean.jpg',
      description: 'Quê hương Bác Hồ',
      activities: ['Kim Liên', 'Cửa Lò', 'Pù Mát']
    },
    { 
      id: 11, 
      name: 'Hà Tĩnh', 
      country: 'Vietnam', 
      image: 'src/assets/hatinh.jpeg',
      description: 'Địa linh nhân kiệt',
      activities: ['Kỳ Anh', 'Hồ Kẻ Gỗ', 'Đèo Ngang']
    },
    { 
      id: 12, 
      name: 'Quảng Bình', 
      country: 'Vietnam', 
      image: 'src/assets/quangbinh.jpg',
      description: 'Vương quốc hang động',
      activities: ['Động Phong Nha', 'Động Thiên Đường', 'Biển Nhật Lệ']
    },
    { 
      id: 13, 
      name: 'Quảng Trị', 
      country: 'Vietnam', 
      image: 'src/assets/quangtri.jpg',
      description: 'Địa đầu giới tuyến',
      activities: ['Thành cổ Quảng Trị', 'Cầu Hiền Lương', 'Đảo Cồn Cỏ']
    },
    { 
      id: 14, 
      name: 'Thừa Thiên - Huế', 
      country: 'Vietnam', 
      image: 'src/assets/thuathienhue.jpg',
      description: 'Cố đô Việt Nam',
      activities: ['Đại Nội', 'Lăng tẩm', 'Chùa Thiên Mụ']
    },
    { 
      id: 15, 
      name: 'Đà Nẵng', 
      country: 'Vietnam', 
      image: 'src/assets/da-nang.jpg',
      description: 'Thành phố đáng sống',
      activities: ['Cầu Rồng', 'Bà Nà', 'Biển Mỹ Khê']
    },
    { 
      id: 16, 
      name: 'Quảng Nam', 
      country: 'Vietnam', 
      image: 'src/assets/quangnam.jpg',
      description: 'Nơi hội tụ di sản',
      activities: ['Hội An', 'Mỹ Sơn', 'Cù Lao Chàm']
    },
    { 
      id: 17, 
      name: 'Quảng Ngãi', 
      country: 'Vietnam', 
      image: 'src/assets/quangngai.jpg',
      description: 'Xứ sở đường thốt nốt',
      activities: ['Lý Sơn', 'Sa Kỳ', 'Thiên Ấn']
    },
    { 
      id: 18, 
      name: 'Bình Định', 
      country: 'Vietnam', 
      image: 'src/assets/binhdinh.jpg',
      description: 'Đất võ trời văn',
      activities: ['Quy Nhơn', 'Kỳ Co', 'Tháp Chăm']
    },
    { 
      id: 19, 
      name: 'Khánh Hòa', 
      country: 'Vietnam', 
      image: 'src/assets/khanhhoa.jpg',
      description: 'Xứ trầm biển ngọc',
      activities: ['Nha Trang', 'Vinpearl', 'Đảo Hòn Tằm']
    },
    { 
      id: 20, 
      name: 'Ninh Thuận', 
      country: 'Vietnam', 
      image: 'src/assets/ninhthuan.jpg',
      description: 'Xứ sở nho và cừu',
      activities: ['Vịnh Vĩnh Hy', 'Đồi cát Nam Cương', 'Tháp Chăm']
    },
    { 
      id: 21, 
      name: 'Bình Thuận', 
      country: 'Vietnam', 
      image: 'src/assets/bìnhthuan.jpg',
      description: 'Vương quốc hoa giấy',
      activities: ['Mũi Né', 'Đồi cát bay', 'Hòn Rơm']
    },
    { 
      id: 22, 
      name: 'Phú Yên', 
      country: 'Vietnam', 
      image: 'src/assets/phuyen.jpg',
      description: 'Xứ hoa vàng cỏ xanh',
      activities: ['Gành Đá Đĩa', 'Đầm Ô Loan', 'Mũi Điện']
    },
    { 
      id: 23, 
      name: 'Đắk Lắk', 
      country: 'Vietnam', 
      image: 'src/assets/daklak.jpg',
      description: 'Thủ phủ cà phê',
      activities: ['Buôn Ma Thuột', 'Hồ Lắk', 'Thác Dray Nur']
    },
    { 
      id: 24, 
      name: 'Đắk Nông', 
      country: 'Vietnam', 
      image: 'src/assets/daknong.jpeg',
      description: 'Xứ sở của những thác nước',
      activities: ['Thác Gia Long', 'Hồ Tà Đùng', 'Căn cứ địa']
    },
    { 
      id: 25, 
      name: 'Gia Lai', 
      country: 'Vietnam', 
      image: 'src/assets/gialai.jpg',
      description: 'Vùng đất đại ngàn',
      activities: ['Pleiku', 'Biển Hồ', 'Chùa Bửu Minh']
    },
    { 
      id: 26, 
      name: 'Kon Tum', 
      country: 'Vietnam', 
      image: 'src/assets/kontum.jpg',
      description: 'Nơi bắt đầu Trường Sơn',
      activities: ['Nhà thờ gỗ', 'Ngục Kon Tum', 'Đắk Bla']
    },
    { 
      id: 27, 
      name: 'Lâm Đồng', 
      country: 'Vietnam', 
      image: 'src/assets/lamdong.jpg',
      description: 'Thành phố ngàn hoa',
      activities: ['Đà Lạt', 'Langbiang', 'Thác Prenn']
    },
    { 
      id: 28, 
      name: 'Hồ Chí Minh', 
      country: 'Vietnam', 
      image: 'src/assets/hochiminh.jpg',
      description: 'Sài Gòn hoa lệ',
      activities: ['Bến Nhà Rồng', 'Chợ Bến Thành', 'Phố đi bộ']
    },
    { 
      id: 29, 
      name: 'Bình Dương', 
      country: 'Vietnam', 
      image: 'src/assets/binhduong.jpg',
      description: 'Thành phố công nghiệp',
      activities: ['Làng tre', 'Cù lao Rùa', 'Chùa Hội Khánh']
    },
    { 
      id: 30, 
      name: 'Đồng Nai', 
      country: 'Vietnam', 
      image: 'src/assets/dongnai.jpg',
      description: 'Cửa ngõ miền Đông',
      activities: ['KDL Vườn Xoài', 'Thác Giang Điền', 'Trảng Bom']
    },
    { 
      id: 31, 
      name: 'Bà Rịa - Vũng Tàu', 
      country: 'Vietnam', 
      image: 'src/assets/vungtau.jpg',
      description: 'Thành phố biển',
      activities: ['Bãi Sau', 'Núi Lớn', 'KDL Hồ Mây']
    },
    { 
      id: 32, 
      name: 'Long An', 
      country: 'Vietnam', 
      image: 'src/assets/longan.png',
      description: 'Cửa ngõ Đồng bằng',
      activities: ['Làng nổi Tân Lập', 'Chùa Tôn Thạnh', 'KDL sinh thái']
    },
    { 
      id: 33, 
      name: 'Tiền Giang', 
      country: 'Vietnam', 
      image: 'src/assets/tiengiang.jpg',
      description: 'Xứ sở trái cây',
      activities: ['Chợ nổi Cái Bè', 'Cù lao Thới Sơn', 'Biển Tân Thành']
    },
    { 
      id: 34, 
      name: 'Bến Tre', 
      country: 'Vietnam', 
      image: 'src/assets/bentre.jpg',
      description: 'Xứ dừa',
      activities: ['Cồn Phụng', 'Cồn Ốc', 'Sông Tiền']
    },
    { 
      id: 35, 
      name: 'Trà Vinh', 
      country: 'Vietnam', 
      image: 'src/assets/travinh.jpg',
      description: 'Xứ sở chùa Khmer',
      activities: ['Chùa Âng', 'Biển Ba Động', 'Ao Bà Om']
    },
    { 
      id: 36, 
      name: 'Vĩnh Long', 
      country: 'Vietnam', 
      image: 'src/assets/vinhlong.png',
      description: 'Châu thổ sông Cửu Long',
      activities: ['Cù lao An Bình', 'Chợ nổi', 'Vườn cây ăn trái']
    },
    { 
      id: 37, 
      name: 'Đồng Tháp', 
      country: 'Vietnam', 
      image: 'src/assets/dongthap.jpg',
      description: 'Quê hương sen hồng',
      activities: ['Làng hoa Sa Đéc', 'Tràm Chim', 'Chợ nổi']
    },
    { 
      id: 38, 
      name: 'An Giang', 
      country: 'Vietnam', 
      image: 'src/assets/angiang.jpg',
      description: 'Xứ sở chùa miếu',
      activities: ['Núi Sam', 'Châu Đốc', 'Rừng tràm Trà Sư']
    },
    { 
      id: 39, 
      name: 'Kiên Giang', 
      country: 'Vietnam', 
      image: 'src/assets/kiengiang.jpg',
      description: 'Xứ sở biển đảo',
      activities: ['Phú Quốc', 'Hà Tiên', 'Rạch Giá']
    },
    { 
      id: 40, 
      name: 'Hậu Giang', 
      country: 'Vietnam', 
      image: 'src/assets/haugiang.jpg',
      description: 'Trung tâm Đồng bằng',
      activities: ['Chợ nổi Ngã Bảy', 'KDL Lung Ngọc Hoàng', 'Công viên']
    },
    { 
      id: 41, 
      name: 'Sóc Trăng', 
      country: 'Vietnam', 
      image: 'src/assets/soctrang.png',
      description: 'Xứ sở chùa Khmer',
      activities: ['Chùa Dơi', 'Chùa Đất Sét', 'KDL Mỏ Ó']
    },
    { 
      id: 42, 
      name: 'Bạc Liêu', 
      country: 'Vietnam', 
      image: 'src/assets/baclieu.jpg',
      description: 'Xứ sở công tử',
      activities: ['Nhà công tử', 'Cánh đồng điện gió', 'Vườn nhãn']
    },
    { 
      id: 43, 
      name: 'Cà Mau', 
      country: 'Vietnam', 
      image: 'src/assets/camau.jpg',
      description: 'Đất mũi Tổ quốc',
      activities: ['Mũi Cà Mau', 'Rừng U Minh', 'Chợ nổi Cà Mau']
    }
  ];

  const getSuggestions = () => {
    if (!searchQuery) return [];
    return [
      `Best time to visit ${searchQuery}`,
      `Top attractions in ${searchQuery}`,
      `${searchQuery} travel itinerary`,
      `Cultural experiences in ${searchQuery}`,
      `Local cuisine in ${searchQuery}`,
    ];
  };

  const performSearch = (query) => {
    const results = allDestinations.filter(dest =>
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.country.toLowerCase().includes(query.toLowerCase()) ||
      dest.description.toLowerCase().includes(query.toLowerCase()) ||
      dest.activities.some(act => act.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(results);
    setSearchQuery(query);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const handleSuggestionClick = (suggestion) => {
    const query = suggestion.replace(/^Best time to visit |Top attractions in | travel itinerary|Cultural experiences in |Local cuisine in /g, '');
    performSearch(query);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <h1 className="search-title">Explore Travel Destinations</h1>
        
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="Search for destinations, activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </form>

        {searchQuery && searchResults.length === 0 && (
          <div className="search-suggestions">
            <h3>Search Suggestions</h3>
            <ul>
              {getSuggestions().map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="search-tabs">
        <button 
          className={`tab-button ${activeTab === 'destinations' ? 'active' : ''}`}
          onClick={() => setActiveTab('destinations')}
        >
          Destinations
        </button>
        <button 
          className={`tab-button ${activeTab === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          Activities
        </button>
      </div>

      <div className="search-results">
        {searchResults.length > 0 ? (
          activeTab === 'destinations' ? (
            <>
              <h2 className="section-title">Search Results for "{searchQuery}"</h2>
              <div className="destination-grid">
                {searchResults.map(destination => (
                  <div 
                    key={destination.id} 
                    className="destination-card"
                    onClick={() => navigate(`/destination/${destination.id}`)}
                  >
                    <div 
                      className="destination-image" 
                      style={{ backgroundImage: `url(${destination.image})` }}
                    ></div>
                    <div className="destination-info">
                      <h3>{destination.name}</h3>
                      <p>{destination.country}</p>
                      <p className="destination-desc">{destination.description}</p>
                    </div>
                    <div className="destination-overlay">
                      <h3>{destination.name}</h3>
                      <p>{destination.country}</p>
                      <p>{destination.description}</p>
                      <div>
                        <p>Popular activities:</p>
                        <ul>
                          {destination.activities.slice(0, 4).map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                          {destination.activities.length > 4 && <li>and more...</li>}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="activities-results">
              <h2 className="section-title">Activities in "{searchQuery}"</h2>
              <div className="activity-grid">
                {searchResults.flatMap(dest => 
                  dest.activities.map((activity, index) => (
                    <div key={`${dest.id}-${index}`} className="activity-card">
                      <h3>{activity}</h3>
                      <p>Available in {dest.name}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )
        ) : searchQuery ? (
          <div className="no-results">
            <p>No results found for "{searchQuery}"</p>
            <p>Try different keywords or check our suggestions above</p>
          </div>
        ) : activeTab === 'destinations' ? (
          <>
            <h2 className="section-title">Popular Destinations</h2>
            <div className="destination-grid">
              {allDestinations.map(destination => (
                <div 
                  key={destination.id} 
                  className="destination-card"
                  onClick={() => navigate(`/destination/${destination.id}`)}
                >
                  <div 
                    className="destination-image" 
                    style={{ backgroundImage: `url(${destination.image})` }}
                  ></div>
                  <div className="destination-info">
                    <h3>{destination.name}</h3>
                    <p>{destination.country}</p>
                    <p className="destination-desc">{destination.description}</p>
                  </div>
                  <div className="destination-overlay">
                    <h3>{destination.name}</h3>
                    <p>{destination.country}</p>
                    <p>{destination.description}</p>
                    <div>
                      <p>Popular activities:</p>
                      <ul>
                        {destination.activities.slice(0, 4).map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                        {destination.activities.length > 4 && <li>and more...</li>}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="activities-section">
            <h2 className="section-title">Popular Activities</h2>
            <div className="activity-grid">
              {Array.from(new Set(allDestinations.flatMap(dest => dest.activities)))
                .slice(0, 6)
                .map((activity, index) => (
                  <div key={index} className="activity-card">
                    <h3>{activity}</h3>
                    <p>Available in multiple destinations</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;