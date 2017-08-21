import React from 'react'

class Show extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        comments: []
      }
    }

    componentWillMount(){
      const url = document.URL + "/comments.json";
      fetch(url)
        .then(response => response.json()) // Transform the data into json
        .then(data => {

         this.setState({comments: data})
        })
    }

    componentDidMount(){
        var form = document.querySelector('form')

        fetch('/comments', {
          method: 'POST',
          body: new FormData(form)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({comments: this.state.comments.concat(document.getElementById('comment').value)})
    }


    render() {
        const link = window.location.pathname + "/comments/";
        return (
            <div>
                {this.state.comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <p style={{'font-size':'14px'}}>
                            <strong>Author: </strong>
                              {comment.commenter}<br/>
                            </p>

                            <p style={{'font-size':'14px'}}>
                            <strong>Comment: </strong>
                              {comment.body}
                            </p>
                            <p><a className="btn btn-danger" href={link + comment.id} data-method="delete"> Delete Comment </a></p>
                            <hr />
                        </div>
                    )
                })}
                <form action={link} method="post">
                    <p><h4>Add New Comment : </h4></p>
                    <p><input type="hidden" name="comment[commenter]" value={ArticlesShowView.userEmail} /></p>
                    <p><textarea id="comment" type="text" name="comment[body]" className="form-control"/></p>

                    <p><button className="btn btn-secondary" type="submit">Submit a Comment</button></p>
                </form>
            </div>
        )
    }
}


export default () => {
    App.ReactRender(<Show />, 'comments')
}
