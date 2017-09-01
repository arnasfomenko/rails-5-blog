import React from 'react';
import {CommentsList} from './CommentsList'
import CommentForm from './CommentForm'
import {addComment} from '../../../../actions/comment'

export class Comments extends React.Component {
  constructor(props) {
    super(props)
  }

  submit = (values) => {
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

  isFormAvailable() {
    if(typeof App.State.User == 'undefined') {
      return (
        <div
         className="alert alert-light"
         role="alert"
        >
          {'Please go to '}
          <a
            className="alert-link"
            href="/users/sign_in"
          >
            {'Login page '}
          </a>
          to add a comment
        </div>
      )
    } else {
      return (
        <CommentForm onSubmit={this.submit} />
      )
    }
  }

  render () {
    return(
      <div>
        <CommentsList comments={this.props.comments} />
        {this.isFormAvailable()}
      </div>
    )
  }
}
