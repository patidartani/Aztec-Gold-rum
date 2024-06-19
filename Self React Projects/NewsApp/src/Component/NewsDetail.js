import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines/${id}?country=in&apiKey=3f29d0e0d0d548789b8b6ad97497f02f`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news detail:', error);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <img src={news.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          {/* Display other data */}
          <p>Author: {news.author}</p>
          <p>Published: {news.publishedAt}</p>
          <a href={news.url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const NewsDetail = () => {
//   const { id } = useParams();
//   const [news, setNews] = useState(null);

//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         const response = await axios.get(`https://newsapi.org/v2/top-headlines/${id}?country=in&apiKey=3f29d0e0d0d548789b8b6ad97497f02f`);
//         setNews(response.data);
//       } catch (error) {
//         console.error('Error fetching news detail:', error);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   if (!news) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <div className="card">
//         <img src={news.urlToImage} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{news.title}</h5>
//           <p className="card-text">{news.description}</p>
//           <a href={news.url} className="btn btn-primary">Read More</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;
