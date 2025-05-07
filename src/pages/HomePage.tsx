import {useState, useEffect} from 'react'
import { getHeadlines } from '../api/newsApi.ts';
import { NewsCard } from '../components/NewsCard.tsx';
import type { Article }      from '../types/types.ts';

export function HomePage(  ) {
  const [articles, setArticles] = useState( [] );
  const [filtered, setFiltered] = useState<Article[]>([]);
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    getHeadlines().then(setArticles, setFiltered)
  }, []);

  useEffect(() => {
    let result = [...articles];

    if (search.trim()) {
      result = result.filter((article: Article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (dateFilter) {
      result = result.filter((article: Article): boolean =>
        article.publishedAt.startsWith(dateFilter)
      );
    }

    setFiltered(result);
  }, [search, dateFilter, articles]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">News</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-1/2"
        />

        <input
          type="date"
          value={dateFilter}
          onChange={e => setDateFilter(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-1/3"
        />
      </div>

      {filtered.length === 0 ? (
        <p>Nothing was found</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}