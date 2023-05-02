import { useState } from 'react';
import { createArticle } from '../api';
import { useNavigate } from 'react-router-dom';
import './style.css';

const CreateArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const article = { title, body, published };
    await createArticle(article);
    navigate('/articles');
  };

  return (
    <div>
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(event) => setBody(event.target.value)} />
        </div>
        <div>
          <label htmlFor="published">Published:</label>
          <input type="checkbox" id="published" checked={published} onChange={(event) => setPublished(event.target.checked)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateArticle;



