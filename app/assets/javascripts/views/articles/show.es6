import React from 'react';
import {Article} from './components/Article/Article';
import {Comments} from './components/Comments/Comments.es6';

class Show extends React.Component {
    render() {
      return (
        <div>
          <Article />
          <Comments />
        </div>
      )
    }
}

export default () => {
    App.ReactRender(<Show />)
}
