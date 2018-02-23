import React, {Component, PureComponent} from 'react';
import './style.css';

class Article extends PureComponent {
  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate(nextProps,nextState) {
  //   return this.state.isOpen !== nextState.isOpen;
  // }

  componentWillMount() {
    console.log('---', 'mounting');
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('---', 'will receive props');
  //   if (nextProps.defaultOpen !== this.props.defultOpen) {
  //     this.setState({
  //       isOpen: nextProps.defaultOpen
  //     })
  //   }
  // }

  componentWillUpdate() {
    console.log('---', 'will update');
  }

  render() {
    const {article, isOpen, onButtonClick} = this.props;
    const body = isOpen && <section>{article.text}</section>;
    return (
      <div className="article-item">
        <div className="article-header">
          <h2>
            {article.title}
            <button className={isOpen ? 'button-close': 'button-open'} onClick={onButtonClick}>
            {isOpen ? 'close': 'open'}
            </button>
          </h2>
        </div>
        <div className="article-body">
          {body}
          <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
      </div>
    )
  }
}



export default Article;
