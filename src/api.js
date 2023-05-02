//import axios from 'axios';
import * as axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const createArticle = async (article, callback) => {
  try {
    const response = await api.post('/articles', article);
    callback();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateArticle = (id, article) => api.put(`/articles/${id}`, article);
export const deleteArticle = (id) => api.delete(`/articles/${id}`);
export const getArticle = (published = null) => {
    let url = '/articles';
    if (published !== null) {
      url += `?published=${published}`;
    }
    return api.get(url);
  };





