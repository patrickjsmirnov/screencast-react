import React, {PureComponent} from 'react';
import ArticleList from './ArticleList';
import Modal from './Modal';
import articles from '../fixtures';

class App extends PureComponent {
  state = {
    reverted: false,
    modalIsOpen: false
  }


  render() {
    console.log('---', 'render', this.state);
    return (
      <div>
        <h1>
          App Name
          <button onClick = {this.revert}>Revert</button>
        </h1>
        <button onClick = {this.modalOpen}>Modal</button>
        <Modal
          modalIsOpen = {this.state.modalIsOpen}
          title = "title of modal window" />
        <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
      </div>
    )
  }

  modalOpen = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  revert = () => {
      this.setState({
        reverted: !this.state.reverted
      })
  }

}

export default App;
