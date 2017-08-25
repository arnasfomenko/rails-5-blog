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
          <Form onNewComment={comment => this.setState({ comments: this.state.comments.concat(comment)})}/>
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
