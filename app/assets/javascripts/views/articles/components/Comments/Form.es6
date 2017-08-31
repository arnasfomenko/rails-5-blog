import React from 'react';
import {addComment} from '../../../../actions/comment'


export class Form extends React.Component {
  handleSubmit(event) {
      event.preventDefault();
      let body = {
        comment: {
          body: document.getElementById('body').value,
          commenter: App.State.User.id
        }
      }

      fetch(`/articles/${ArticlesShowView.articleId}/comments/`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: "same-origin",
          body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
        })
        .then(response => response.json())
        .then(data => {
          App.Store.dispatch(addComment(data))
        })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Email :
          </label>
          <div className="col-sm-10">
            <input
              className="form-control-plaintext"
              id="staticEmail"
              readOnly
              type="text"
              value={App.State.User.email}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Enter your comment :
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="body"
              name="comment[body]"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10"></div>
          <div className="col-sm-2">
            <button
              className="btn btn-secondary"
              name="submit"
              type="submit"
            >
              Submit a Comment
            </button>
          </div>
        </div>
      </form>
    )
  }
}
