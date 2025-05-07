import type { Article } from '../types/types.ts';
import { Link }         from 'react-router-dom';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps ) {
  const { title, description, urlToImage, publishedAt } = article;
  const encodedArticle = encodeURIComponent(JSON.stringify(article));

  return (
    <Link to={`/article/${encodedArticle}`} className="block rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-white">
      {urlToImage && (
        <img src={urlToImage} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{new Date(publishedAt).toLocaleDateString()}</p>
        <p className="text-gray-700 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
