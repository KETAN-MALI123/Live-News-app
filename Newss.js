
// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// import "./News.css"; // We'll create this CSS file

// const News = (props) => {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(0);

//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     };

//     const updateNews = async () => {
//         props.setProgress(10);
//         setLoading(true);
//         props.setProgress(30);

//         let data;
//         try {
//             data = await import(`../data/${props.category}.json`);
//             console.log("Loaded JSON data:", data);
//         } catch (err) {
//             console.error("Category data not found, defaulting to general");
//             data = await import(`../data/general.json`);
//         }

//         props.setProgress(60);
//         setArticles(data.articles.slice(0, props.pageSize));
//         setTotalResults(data.articles.length);
//         setLoading(false);
//         props.setProgress(100);
//     };

//     useEffect(() => {
//         document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
//         setLoading(true);

//         const timer = setTimeout(() => {
//             updateNews();
//         }, 2000);

//         return () => clearTimeout(timer);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [props.category]);

//     const fetchMoreData = async () => {
//         const nextPage = page + 1;
//         setPage(nextPage);

//         let data;
//         try {
//             data = await import(`../data/${props.category}.json`);
//         } catch (err) {
//             data = await import(`../data/general.json`);
//         }

//         const start = (nextPage - 1) * props.pageSize;
//         const end = start + props.pageSize;
//         const nextArticles = data.articles.slice(start, end);

//         if (nextArticles.length === 0) return;

//         setLoading(true);
//         setTimeout(() => {
//             setArticles(prev => [...prev, ...nextArticles]);
//             setLoading(false);
//         }, 1000);
//     };

//     // Get category icon
//     const getCategoryIcon = (category) => {
//         const icons = {
//             home: "🏠",
//             business: "💼",
//             entertainment: "🎭",
//             general: "📰",
//             health: "🏥",
//             science: "🔬",
//             sports: "⚽",
//             technology: "💻"
//         };
//         return icons[category] || "📰";
//     };

//     return (
//         <div className="news-container">
//             {/* Header Section */}
//             <div className="news-header">
//                 <div className="category-badge">
//                     <span className="category-icon">
//                         {getCategoryIcon(props.category)}
//                     </span>
//                     <span className="category-name">
//                         {capitalizeFirstLetter(props.category)}
//                     </span>
//                 </div>
//                 <h1 className="news-title">
//                     Top {capitalizeFirstLetter(props.category)} Headlines
//                 </h1>
//                 <p className="news-subtitle">
//                     Stay updated with the latest {props.category} news from around the world
//                 </p>
//             </div>

//             {/* Loading State */}
//             {loading && articles.length === 0 && (
//                 <div className="loading-container">
//                     <Spinner />
//                     <p className="loading-text">Loading latest news...</p>
//                 </div>
//             )}

//             {/* News Grid with Infinite Scroll */}
//             <InfiniteScroll
//                 dataLength={articles.length}
//                 next={fetchMoreData}
//                 hasMore={articles.length < totalResults && totalResults > 0}
//                 loader={
//                     <div className="infinite-loader">
//                         <Spinner />
//                         <p>Loading more articles...</p>
//                     </div>
//                 }
//                 style={{ overflow: "visible" }}
//                 endMessage={
//                     <div className="end-message">
//                         <p>🎉 You're all caught up! Check back later for more updates.</p>
//                     </div>
//                 }
//             >
//                 <div className="news-grid">
//                     {articles.map((element, index) => {
//                         return (
//                             <NewsItem
//                                 key={`${element.url}-${index}`}
//                                 title={
//                                     element.title
//                                         ? element.title.slice(0, 65)
//                                         : "No title available"
//                                 }
//                                 description={
//                                     element.description
//                                         ? element.description.slice(0, 120)
//                                         : "No description available"
//                                 }
//                                 imgUrl={element.urlToImage}
//                                 newsUrl={element.url}
//                                 author={element.author}
//                                 date={element.publishedAt}
//                                 source={element.source.name}
//                             />
//                         );
//                     })}
//                 </div>
//             </InfiniteScroll>

//             {/* No Articles State */}
//             {!loading && articles.length === 0 && (
//                 <div className="no-articles">
//                     <div className="no-articles-icon">📰</div>
//                     <h3>No articles found</h3>
//                     <p>Try refreshing the page or check back later for updates.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// News.defaultProps = {
//     pageSize: 12, // Changed to 12 for better grid layout
//     country: "us",
//     category: "general",
// };

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// };

// export default News;


