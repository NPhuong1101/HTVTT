import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json
import sys
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
csv_path = os.path.join(current_dir, "Info-trip.csv")

data = pd.read_csv(csv_path, encoding="utf-8")

data.rename(columns={
    "Tên địa điểm": "title",
    "Mô tả": "description",
    "Thể loại": "category",
    "Tỉnh thành": "location",
    "ID Ảnh URL địa điểm": "image",
    "Link google map": "map_link"
}, inplace=True)

data["content"] = data["description"].fillna("") + " " + data["category"].fillna("") + " " + data["location"].fillna("")

# TF-IDF
vectorizer = TfidfVectorizer(stop_words="english")
tfidf_matrix = vectorizer.fit_transform(data["content"])
cosine_sim = cosine_similarity(tfidf_matrix)

if len(sys.argv) < 2:
    print(json.dumps([]))
    sys.exit()

input_title = sys.argv[1]
input_title_clean = input_title.strip().lower()
titles = data["title"].str.strip().str.lower()

if input_title_clean in titles.values:
    index = titles[titles == input_title_clean].index[0]
    sim_scores = list(enumerate(cosine_sim[index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[1:6]
    recommended = data.iloc[[i[0] for i in sim_scores]]
    result = recommended[["title", "description", "category", "location", "image", "map_link"]].to_dict(orient="records")
    print(json.dumps(result, ensure_ascii=False))
else:
    print(json.dumps([]))
