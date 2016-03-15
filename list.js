import React from 'react';
require('./styles.css');

class List extends React.Component {
  // Called between props being passed in and rendering
  // componentWillReceiveProps (nextProps, prevProps) {
  //   console.log('NEXTPROPS', nextProps);
  // }

  constructor () {
    super();
    this.state = {
      list: ['Bar','Foo','Loo','Zoo','Moo','Too']
    };
    this.addList = this.addList.bind(this);
    this.remList = this.remList.bind(this);
  }

  addList () {
    this.state.list.push('Another Foo');
    this.setState(this.state);
  }
  remList (i) {
    this.state.list.splice(i, 1);
    this.setState(this.state);
  }

  render () {
    console.log(this.state.list);
    return (
        <div>
          <ul>
            {this.state.list.map((x, i) => {
              return <li>{x}<button onClick={this.remList.bind(null,i)}>REMOVE</button></li>;
            })}
          </ul>
          <button onClick={this.remList}>REMOVE</button>
          <button onClick={this.addList}>ADD</button>
        </div>
      );
  }
}

export default List;