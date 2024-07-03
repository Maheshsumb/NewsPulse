import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class news extends Component {
    articles= []
    constructor(){
        super()
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    async componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca0f526767b4911b8ba38586ddff81d'
        let data= await fetch(url)
        let parsedData= await data.json()
        this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsPulse - Top 30 Headlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div key={element.url} className="col-md-3">
            <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          })}
        </div>
      </div>
    );
  }
}

export default news;
