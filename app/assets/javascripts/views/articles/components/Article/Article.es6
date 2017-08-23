import React from 'react'

export class Article extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <h4>
              {ArticlesShowView.articleTitle}
            </h4>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <p>
              {ArticlesShowView.articleDate}
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <p>
              {ArticlesShowView.articleBody}
            </p>
          </div>
        </div>
        <hr />
      </div>
  )}
}
