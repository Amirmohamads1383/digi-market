import React, { useEffect, useState } from "react";
import BlogItems from "./Component/BlogItems";
import BlogItem from "./Component/BlogItem";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch("/data/article.json");

        if (!response.ok) {
          throw new Error("خطا در دریافت مقالات");
        }
        const data = await response.json();
        setArticles(data);
        if (data.length > 0) {
          setSelectedArticle(data[0]);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    getArticles();
  }, []);

  return (
    <section dir="rtl" className="container pt-8 lg:pt-16">
      <div className="flex flex-col lg:flex-row-reverse items-stretch gap-5 lg:gap-8 w-full">
        {/* Articles List */}
        <div className="w-full lg:w-2/6 shrink-0">
          <BlogItems
            articles={articles}
            selectedArticle={selectedArticle}
            onSelectArticle={setSelectedArticle}
          />
        </div>
        {/* Main Article*/}
        <div className="w-full lg:w-4/6">
          <BlogItem article={selectedArticle} />
        </div>
      </div>
    </section>
  );
}
