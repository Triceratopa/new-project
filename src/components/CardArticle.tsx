
import React from 'react'

interface ArticleCardProps {
  title: string;
  publishedAt: string;
  imageUrl: string;
  summary: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, publishedAt, imageUrl, summary }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <h2>{title}</h2>
      <p><strong>Published:</strong> {new Date(publishedAt).toLocaleDateString()}</p>
      <p>{summary}</p>
    </div>
  );
}

export default ArticleCard
