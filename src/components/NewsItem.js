import "./NewsItem.css"; // We'll create this CSS file

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, source } = props;


  return (
    <div className="news-item">
      <div className="news-card">
        {/* Image Container */}
        <div className="image-container">
          <img
            src={
              !imgUrl
                ? "https://images.unsplash.com/photo-1585829365295-ab7cd4000b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                : imgUrl
            }
            className="news-image"
            alt={title}
          />
          <span className="source-badge">{source}</span>
        </div>

        {/* Content Container */}
        <div className="news-content">
          <h3 className="news-title">{title}</h3>
          <p className="news-description">{description}</p>
          
          <div className="news-meta">
            <div className="author-date">
              <span className="author">By {!author ? "Unknown" : author}</span>
            </div>
          </div>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="read-more-btn"
          >
            Read More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;