import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            query: ""
        }
    }
    getAPIData = async (query = "All") => {
        this.setState({ query: query })
        // let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=${this.props.language}&pageSize=14&sortBy=publishedAt&apiKey=709dfd81e04e40b08bfa00e4f2575546`)
        // let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=${this.props.language}&page=1&pageSize=13&from=2023-12-18&sortBy=publishedAt&apiKey=06a0d425ab014588ab46921ec7fb2ecf`)
        let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=${this.props.language}&page=1&pageSize=13&from=2023-12-19&sortBy=publishedAt&apiKey=12097e7f39844e1ba882f04870b3f3cc`)
        response = await response.json()
        this.setState({
            articles: response.articles.filter((item) => item.title !== "[Removed]"),
            totalResults: response.totalResults
        })
    }
    fetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&pageSize=13&from=2023-12-18&sortBy=publishedAt&apiKey=06a0d425ab014588ab46921ec7fb2ecf`)

        response = await response.json()
        this.setState({
            articles: this.state.articles.concat(response.articles.filter((item) => item.title !== "[Removed]"))

        })

    }
    componentDidMount() {
        this.getAPIData()
    }
    componentDidUpdate(old) {
        if (this.props !== old) {
            if (this.props.search === "" || this.props.search === old.search)
                this.getAPIData(this.props.q)
            else {
                this.getAPIData(this.props.search)
            }
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <h5 className='background p-2 text-light text-center my-2 text-capitalize'>{this.state.query} Trending News</h5>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={
                        <div className='w-100 text-center p-5'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>

                        </div>

                    }>
                    <div className="row">
                        {
                            this.state.articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    pic={item.urlToImage}
                                    title={item.title}
                                    description={item.description}
                                    url={item.url}
                                    source={item.source.name}
                                    date={item.publishedAt}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </ div>
        )
    }
}
