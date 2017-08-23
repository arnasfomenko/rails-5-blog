import React from 'react';
import {Form} from './Form.es6';

export class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentWillMount(){
    fetch(`/articles/${ArticlesShowView.articleId}/comments/`)
      .then(response => response.json())
      .then(comments => {
          this.setState({comments})
      })
    }

    canDelete() {


      <p>
        <a
          className="btn btn-danger"
          href={ArticlesShowView.articleId + '/comments/' + comment.id}
          data-method="delete"
        >
          Delete Comment
        </a>
      </p>
    }

    isFormAvailable() {
      if(typeof App.State.User == 'undefined') {
        return (
          <div className="alert alert-light" role="alert">
            Please go to with <a href="/users/sign_in" className="alert-link">Login page</a> to add a comment
          </div>
        )
      } else {
        return (
          <div>
            <Form onNewComment={comment => this.setState({ comments: this.state.comments.concat(comment)})}/>
          </div>
        )
      }
    }

  render () {
    return(
      <div>
        {this.state.comments.map((comment, index) => {
          return (
            <div key={index}>
              <p style={{'fontSize':'14px'}}>
                <strong>Author: </strong>
                {comment.commenter.user_email}
              </p>

              <p style={{'fontSize':'10px'}}>
                <strong>Created At: </strong>
                {comment.date}
              </p>

              <p style={{'fontSize':'14px'}}>
              <strong>Comment: </strong>
                {comment.body}
              </p>

              <p>
                <a
                  className="btn btn-danger"
                  href={ArticlesShowView.articleId + '/comments/' + comment.id}
                  data-method="delete"
                >
                  Delete Comment
                </a>
              </p>
              <hr />
            </div>
            )
        })}
        {this.isFormAvailable()}
      </div>
    )
  }
}
