import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArticlesList from "./ArticlesList";
import "./style.css";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      const response = await axios.get(`http://localhost:3000/articles/${id}`);
      setArticle(response.data);
    }

    fetchArticle();
  }, [id]);

  return (
    <div>
      <h2>Details of the article #{article.id}</h2>
      <p>Title: {article.title}</p>
      <p>Description: {article.body}</p>
      <p>Published: {article.published ? "Yes" : "No"}</p>
      <button className="button-margin">
        <a href="/articles">Back to List of Articles</a>
      </button>
      <button className="button-margin">
        <a href={`/articles/${article.id}/edit`}>Edit Article</a>
      </button>
    </div>
  );
}

export default ArticleDetail;




