
// import React from "react";
// import "./NewsItem.css"; // We'll create this CSS file


// const NewsItem = (props) => {
//   let { title, description, imgUrl, newsUrl, author, date, source } = props;

//   return (
//     <div className="my-3">
//       <div className="card">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             position: "absolute",
//             right: 0,
//           }}
//         >
//           <span className="badge rounded-pill bg-danger">{source}</span>
//         </div>
//         <img
//           src={
//             !imgUrl
//               ? "https://cdn.motor1.com/images/mgl/g4gG4N/s1/2026-nissan-leaf-top.jpg"
//               : imgUrl
//           }
//           className="card-img-top"
//           alt="..."
//         />
//         <div className="card-body">
//           <h5 className="card-title">{title}...</h5>
//           <p className="card-text">{description}...</p>
//           <p className="card-text">
//             <small className="text-info">
//               By- {!author ? "Unknown" : author} On:-{" "}
//               {new Date(date).toGMTString()}
//             </small>
//           </p>
//           <a
//             href={newsUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="btn btn-sm btn-dark"
//           >
//             Read more
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;
