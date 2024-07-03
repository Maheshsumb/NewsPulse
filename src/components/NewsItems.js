import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div class="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://i.ytimg.com/vi/vzchjdTNWa0/maxresdefault.jpg"} class="card-img-top" alt="Failed to load" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              class="btn btn-sm btn-primary"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
