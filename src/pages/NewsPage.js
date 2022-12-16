import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import Layout from "../component/Layout";

const NewsPage = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(props.page);

  async function getTopheadlines(params) {
    setLoading(true);
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=42ba4fe327ae48e9b974106f7e6e7706&page=${props.page}&pageSize=${props.pageSize}`
    );

    if (response.data.status === "ok") {
      setLoading(false);
      setData(response.data.articles);
    } else {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getTopheadlines();
    document.title = `Tazza Khabar - ${props.category}`;
  }, []);

  useEffect(() => {
    getTopheadlines();
  }, [page]);

  return (
    <Layout>
      <h1 style={{ textAlign: "center", padding: "10px 0" }}>
        News for - {props.category}
      </h1>
      {loading && data.length <= 0 && <h4>Loading.....</h4>}
      
      <section className="cards__container">
        {data?.map((n) => {
          return (
            <Card
              key={n.publishedAt}
              imgSrc={n.urlToImage}
              title={n.title}
              description={n.description}
              url={n.url}
            />
          );
        })}
      </section>
    </Layout>
  );
};

export default NewsPage;
