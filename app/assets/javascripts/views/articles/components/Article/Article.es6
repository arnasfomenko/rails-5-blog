import React from 'react'

export class Article extends React.Component {
  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header">
            {ArticlesShowView.articleTitle}<br/>
            <small>
              {ArticlesShowView.articleDate}
            </small>
          </div>
          <div className="card-body">
            <p className="card-text">{ArticlesShowView.articleBody}</p>
          </div>
        </div>
        <hr />
      </div>
  )}
}
