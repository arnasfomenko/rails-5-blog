import React from 'react';

export class CommentsList extends React.Component {
  constructor(props) {
    super(props)
  }

  canDelete(id,commenter) {
    if(typeof App.State.User !== 'undefined') {
      if(App.State.User.id === commenter) {
        return (
          <div>
            <p>
              <a
                className="btn btn-danger"
                href={ArticlesShowView.articleId +'/comments/' + id}
                data-method="delete"
              >
                Delete Comment
              </a>
            </p>
          </div>
        )
      }
    }
  }

  render() {
    if (this.props.comments[0] === undefined) {
      return (
        <div>
          <p>There are no comments {'for this'} post.</p>
        </div>
      )
    } else {
      return(
        <div>
        {this.props.comments.map((comments, index) => {
          return (
            <div key={index}>
              <p style={{'fontSize':'14px'}}>
                <strong>Author: </strong>
                {comments.commenter.user_email}
              </p>

              <p style={{'fontSize':'10px'}}>
                <strong>Created At: </strong>
                {comments.date}
              </p>

              <p style={{'fontSize':'14px'}}>
              <strong>Comment: </strong>
                {comments.body}
              </p>
                {this.canDelete(comments.id,comments.commenter.user_id)}
              <hr />
            </div>
            )
        })}
        </div>
      )
  }
  }
}
