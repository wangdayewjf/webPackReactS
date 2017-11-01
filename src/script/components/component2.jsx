import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    //这是因为 React.js 调用你所传给它的方法的时候，并不是通过对象方法的方式调用
    //（this.handleClickOnTitle），而是直接通过函数调用 （handleClickOnTitle），所以事件监听函数内并不能通过 this 获取到实例。
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export  default TodoApp;