import React, { Component } from "react";
import Layout from "../component/Layout";
import axios from "axios";
import Card from "../component/Card";
import Button from "../component/Button";

export class NewsPage extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      data: [],
      error: false,
    };
  }

  async getTopheadlines() {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42ba4fe327ae48e9b974106f7e6e7706&page=${this.props.page}&pageSize=${this.props.pageSize}`
    );

    if (response.data.status === "ok") {
      this.setState({
        loading: false,
        data: response.data.articles,
        error: false,
      });
    } else {
      this.setState({
        loading: false,
        data: [],
        error: true,
        page: this.props.page,
      });
    }
  }
  componentDidMount() {
    this.getTopheadlines();
    document.title = `Tazza Khabar- ${this.props.category}`;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);
    if (prevProps && prevProps.category !== this.props.category) {
      this.getTopheadlines();
    }
  }
  render() {
    // console.log(this.props);
    const { loading, data, error } = this.state;
    if (error) {
      return <h2>Error.... Something went wrong....</h2>;
    }

    return (
      <Layout>
        <h1 style={{ textAlign: "center", padding: "10px 0" }}>
          News for - {this.props.category}
        </h1>
        {loading && data.length <= 0 && <h4>Loading.....</h4>}
        <div>
          <Button
            buttonText="Previous"
            onClick={() => {
              this.setState({ page: page - 1 });
            }}
          />
          <Button
            buttonText="Next"
            onClick={() => {
              this.setState({
                page: page + 1,
              });
            }}
          />
        </div>
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
  }
}

export default NewsPage;
