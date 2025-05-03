import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json
import sys
import os

# Đường dẫn tới file CSV
current_dir = os.path.dirname(os.path.abspath(__file__))
csv_path = os.path.join(current_dir, "Info-trip.csv")

# Đọc dữ liệu
data = pd.read_csv(csv_path, encoding="utf-8")

# Đổi tên cột
data.rename(columns={
    "Tên địa điểm": "title",
    "Mô tả": "description",
    "Thể loại": "category",
    "Tỉnh thành": "location",
    "ID Ảnh URL địa điểm": "image",
    "Link google map": "map_link"
}, inplace=True)

# Tạo cột nội dung để vector hóa
data["content"] = data["description"].fillna("") + " " + data["category"].fillna("") + " " + data["location"].fillna("")

# Tính TF-IDF và ma trận cosine similarity
vectorizer = TfidfVectorizer(stop_words="english")
tfidf_matrix = vectorizer.fit_transform(data["content"])
cosine_sim = cosine_similarity(tfidf_matrix)

# Nhận đầu vào từ dòng lệnh
input_titles = sys.argv[1:]  # Danh sách tên địa điểm
input_titles_clean = [t.strip().lower() for t in input_titles if t.strip()]
titles = data["title"].str.strip().str.lower()

# Lấy chỉ số các địa điểm hợp lệ
input_indices = [titles[titles == t].index[0] for t in input_titles_clean if t in titles.values]

# Nếu không có địa điểm nào hợp lệ thì trả về danh sách rỗng
if not input_indices:
    print(json.dumps([]))
    sys.exit()

# Tính trung bình điểm tương đồng
similarities = cosine_sim[input_indices]
avg_similarity = similarities.mean(axis=0)

# Loại bỏ địa điểm đầu vào và sắp xếp theo độ tương đồng
sim_scores = list(enumerate(avg_similarity))
sim_scores = [s for s in sim_scores if s[0] not in input_indices]
sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[:5]

# Lấy danh sách tên địa điểm gợi ý
recommended = data.iloc[[i[0] for i in sim_scores]]
result = recommended["title"].tolist()

# In ra kết quả JSON
print(json.dumps(result, ensure_ascii=False))