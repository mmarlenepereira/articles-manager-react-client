import React from 'react';
import { render, fireEvent, screen, getByRole } from '@testing-library/react';
import { BrowserRouter, MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';
import ArticlesList from '../components/ArticlesList';
import CreateArticle from '../components/CreateArticle';
import EditArticle from '../components/EditArticle';
import { getArticle, createArticle, deleteArticle } from '../api';
import { createMemoryHistory } from 'history';
import axios from "axios";


test('renders back to list and edit article links', () => {
  const article = { id: 63, title: 'Test article', body: 'Test body', published: true };
  const { getByText } = render(
    <Router initialEntries={[`/articles/${article.id}`]}>
      <Routes>
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );

  const backToListLink = getByText('Back to List of Articles');
  expect(backToListLink).toBeInTheDocument();

  const editArticleLink = getByText('Edit Article');
  expect(editArticleLink).toBeInTheDocument();
});

