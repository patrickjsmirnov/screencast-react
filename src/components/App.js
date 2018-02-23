import React, {PureComponent} from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures';

class App extends PureComponent {
  state = {
    reverted: false
  }


  render() {
    console.log('---', 'render', this.state);
    return (
      <div>
        <h1>
          App Name
          <button onClick = {this.revert}>Revert</button>
        </h1>
        <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
      </div>
    )
  }

  revert = () => {
      this.setState({
        reverted: !this.state.reverted
      })
  }

}

export default App;
