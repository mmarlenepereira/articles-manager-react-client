import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArticle, updateArticle } from '../api';
import './style.css';

function EditArticle(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [published, setPublished] = useState(false);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await getArticle(id);
        setTitle(response.data.title);
        setBody(response.data.body);
        setPublished(response.data.published);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArticle();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const article = { title, body, published };
    try {
      await updateArticle(id, article);
      navigate(`/articles/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" style={{ width: "100px" }}>
            Title:
          </label>
          <div>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              style={{ width: "300px" }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="body" style={{ width: "100px" }}>
            Body:
          </label>
          <div>
            <textarea
              id="body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              style={{ width: "300px", height: "200px" }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="edit-article-field">
          <label htmlFor="published">Published:</label>
          <input type="checkbox" id="published" checked={published} onChange={(event) => setPublished(event.target.checked)} />
        </div>
        </div>
        <div className="form-group">
          <button type="submit" style={{ marginLeft: "100px" }}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditArticle;













