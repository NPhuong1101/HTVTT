# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer

# data = pd.read_csv(filepath_or_buffer:"data.csv", encoding="latin-1", sep=",", usecols=["title", "genré"])
# user_input = "Twelve Monkey (1995)"
# data["genres"].apply(lambda s: s.replace("|", " "))

# vectorizer = TfidVectorizer(ngram_range=(1, 1))
# tfidf_matrix = vectorizer.fit_transform(data["genres"])

# tfidf_matrix_dense = pd.DataFrame(tfidf_matrix.todense(), columns=vectorizer.get_feature_names_out(), index=data["title"])

# cosine_sim = cosine_similarity(tfidf_matrix)
# cosine_sim_dense = pd.DataFrame(cosine_sim, columns=data["title"], index=data["title"])
# user_input = "Twelve Monkey (1995)"
# top_k = 30
# relevant_data = cosine_sim_dense.loc[user_input].sort_values(ascending=False)[:top_k]

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Đọc dữ liệu từ file CSV
data = pd.read_csv("Info-trip.csv", encoding="utf-8")

# Kiểm tra các cột trong CSV để xem đúng tên cột nào
print(data.columns)

# Đổi tên cột nếu cần thiết
data.rename(columns={"Tên địa điểm": "title", "Mô tả": "content"}, inplace=True)

# Xử lý dữ liệu mô tả (có thể thêm bước xử lý văn bản nếu cần)
data["content"] = data["content"].fillna("")

# Áp dụng TF-IDF lên cột mô tả
vectorizer = TfidfVectorizer(ngram_range=(1, 1), stop_words="english")
tfidf_matrix = vectorizer.fit_transform(data["content"])

# Tính độ tương đồng cosine
cosine_sim = cosine_similarity(tfidf_matrix)

# Tạo bảng similarity theo tên địa điểm
cosine_sim_df = pd.DataFrame(cosine_sim, index=data["title"], columns=data["title"])

# Địa điểm cần tìm tương tự
user_input = "Chùa Một Cột"

# Kiểm tra xem tên địa điểm có trong dữ liệu không
if user_input in cosine_sim_df:
    top_k = 5  # số lượng địa điểm tương tự muốn lấy
    recommendations = cosine_sim_df[user_input].sort_values(ascending=False)[1:top_k+1]  # bỏ chính nó
    print(f"Địa điểm tương tự với '{user_input}':")
    print(recommendations)
else:
    print(f"Không tìm thấy địa điểm '{user_input}' trong dữ liệu.")
