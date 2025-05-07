import { useLocation, useNavigate } from 'react-router-dom';
import type { Article } from '../types/types.ts';

export function ArticlePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = (location.state as { article: Article })?.article;

  if (!article) {
    return <p className="text-center text-red-600">Nothing was found</p>;
  }
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 hover:underline">← Назад</button>
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {article.author && `Автор: ${article.author}, `}
        {new Date(article.publishedAt).toLocaleString()}
      </p>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-auto rounded mb-4" />
      )}
      <p className="text-lg">{article.content || article.description}</p>
      <a href={article.url} target="_blank" className="text-blue-600 underline mt-4 inline-block">Открыть источник</a>
    </div>
  );
}
