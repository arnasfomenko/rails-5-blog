import React from 'react';
import {Form} from './Form.es6';
import {CommentsList} from './CommentsList.es6'

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
          <div
           className="alert alert-light"
           role="alert"
          >
            Please go to&nbsp;
            <a
              href="/users/sign_in"
              className="alert-link"
            >
              Login page&nbsp;
            </a>
            to add a comment
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
        <CommentsList comments={this.state.comments}/>
        {this.isFormAvailable()}
      </div>
    )
  }
}
