import {useState, useEffect} from 'react'
import { getHeadlines } from '../api/newsApi.ts';
import { NewsCard } from '../components/NewsCard.tsx';

export function HomePage(  ) {
  const [articles, setArticles] = useState( [] );

  useEffect(() => {
    getHeadlines().then(setArticles)
  }, [])
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {articles.map((article, idx) => (
        <NewsCard key={idx} article={article} />
      ))}
    </div>
  );
}