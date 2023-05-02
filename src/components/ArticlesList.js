import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getArticle, updateArticle, deleteArticle } from '../api';
import './style.css';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [publishedFilter, setPublishedFilter] = useState('');

  const navigate = useNavigate(); // Define the useNavigate hook, because useStory is not supported in React6

  const fetchArticles = useCallback(async () => {
    const queryParams = publishedFilter ? { published: publishedFilter } : {};
    const response = await getArticle(queryParams);
    setArticles(response.data);
  }, [publishedFilter]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleDelete = async (id) => {
    await deleteArticle(id);
    fetchArticles();
  };

  const handleTogglePublish = async (id, published) => {
    await updateArticle(id, { published: !published });
    fetchArticles();
  };

  const handlePublishedFilterChange = (event) => {
    const filterValue = event.target.value;
    setPublishedFilter(filterValue);
    const searchParams = new URLSearchParams({ published: filterValue });
    const search = searchParams.toString() ? `?${searchParams.toString()}` : '';
    window.history.replaceState(null, '', search);
  };

  // Navigate to the edit page when the button is clicked
  const navigateToEditPage = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div>
      <h2>Articles List</h2>
      <div>
        <label htmlFor="publishedFilter">Filter by Published/Unpublished:</label>
        <select id="publishedFilter" value={publishedFilter} onChange={handlePublishedFilterChange}>
          <option value="">All</option>
          <option value="true">Published</option>
          <option value="false">Unpublished</option>
        </select>
      </div>
      <button onClick={() => navigate('/articles/new')} className="new-article-button" >Create New Article</button>
      {articles.map((article) => (
        <div key={article.id} className="articles-list-item">
          <h3>Article# {article.id}</h3>
          <p>Title: {article.title}</p>
          <p>Description: {article.body}</p>
          <p>Published: {article.published ? 'Yes' : 'No'}</p>
          <div>
            <button onClick={() => handleTogglePublish(article.id, article.published)} className="button-margin">{article.published ? 'Unpublish' : 'Publish'}</button>
            <button onClick={() => navigateToEditPage(article.id)} className="button-margin"> View/Edit</button>
            <button onClick={() => handleDelete(article.id)} className="button-margin">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;






