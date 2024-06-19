import React, { useState } from 'react';
import axios from 'axios';
import NewsDetail from './NewsDetail';
import { Link } from 'react-router-dom';


const FetchNews = () => {
          const [news, setNews] = useState([])
          const [selectedNews, setSelectedNews] = useState(null)
          

          const fetchNews = () => {
                    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=3f29d0e0d0d548789b8b6ad97497f02f")
                              .then((response) => {
                                        console.log(response)
                                        setNews(response.data.articles)
                              })
          };
        
          const handleNewsClick = (news) => {
                    setSelectedNews(news.id);
                  };

          return (
                    <>
                              <div className="container my-3">
                                        <div className="row">
                                                  <div className="col-4">
                                                            <button onClick={fetchNews} className='btn btn-primary' >FetchNews</button>
                                                  </div>
                                        </div>
                              </div>

                              <hr/>

                              <div className='container'>
                                        <div className='row'>
                                                {
                                                  news.map((value, index) => {
                                                            return(
                                                                      <div className='col-4' key={index}>
                                                                      <div className="card" style={{ width: "18rem" }}>
                                                                                <img src={value.urlToImage} className="card-img-top"  alt="..." />
                                                                                <div className="card-body">
                                                                                          <h5 className="card-title">{value.title}</h5>
                                                                                          <p className="card-text">{value.description}</p>
                                                                                          <Link to={`/NewsDetail/${value.id}`}>
  <button onClick={() => handleNewsClick(value)} className='btn btn-primary'>Go Somewhere</button>
</Link>                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            );
                                                  })
                                                }
                                        </div>
                              </div>
                              {selectedNews && <NewsDetail news={selectedNews}/>}
                    </>
                  
          )

}



export default FetchNews