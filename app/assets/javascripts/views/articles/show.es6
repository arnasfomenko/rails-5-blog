import React from 'react'
import {Article} from './components/Article/Article'
import {Comments} from './components/Comments/Comments'
import {setComments} from '../../actions/comment'
import { connect } from 'react-redux'

class Show extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    fetch(`/articles/${ArticlesShowView.articleId}/comments`)
    .then(response => response.json())
    .then(data => {
      App.Store.dispatch(setComments(data))
    })
  }

    render() {
      return (
        <div>
          <Article />
          <Comments comments={this.props.comments} />
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments
  }
}

const ShowView = connect(mapStateToProps)(Show)

export default () => {
    App.ReactRender(<ShowView />)
}
