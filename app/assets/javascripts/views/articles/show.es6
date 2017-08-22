import React from 'react'

class Show extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        comments: []
      }
    }

    componentWillMount(){
      fetch(`/articles/${ArticlesShowView.articleId}/comments/`)
        .then(response => response.json())
        .then(data => {
            this.setState({comments: data})
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let body = {
          comment: {
            body: document.getElementById('body').value,
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
            this.setState({comments: this.state.comments.concat(data)})
          })
      }


    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <p style={{'font-size':'14px'}}>
                            <strong>Author: </strong>
                              {comment.commenter}
                                <p style={{'font-size':'10px'}}>
                                <strong>Created At: </strong>
                                  {comment.created_at}
                                </p>
                            </p>


                            <p style={{'font-size':'14px'}}>
                            <strong>Comment: </strong>
                              {comment.body}
                            </p>
                            <p><a className="btn btn-danger" href={ArticlesShowView.articleId + '/comments/' + comment.id} data-method="delete"> Delete Comment </a></p>
                            <hr />
                        </div>
                    )
                })}

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <p><h4>Add New Comment : </h4></p>
                    <p><textarea id="body" type="text" name="comment[body]" className="form-control"/></p>

                    <p><button className="btn btn-secondary" name="submit" type="submit">Submit a Comment</button></p>
                </form>
            </div>
        )
    }
}


export default () => {
    App.ReactRender(<Show />, 'comments')
}
