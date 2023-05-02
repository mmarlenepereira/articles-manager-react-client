import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import CreateArticle from './components/CreateArticle';
import ArticleDetail from './components/ArticleDetail';
import EditArticle from './components/EditArticle';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/new" element={<CreateArticle />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/articles/:id/edit" element={<EditArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



