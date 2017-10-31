document.write( require("./js/runoob1.js"));

//es6语法
import App  from './components/component1';
import greenCss from '../css/green.css';
import testScss from '../scss/test.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import greenO from './jQplugins/jqGreen';
import TodoApp from './components/component2';
const element=<App/>;
$('#green').green();

class MyFirstCompont extends React.Component{
    render(){
        return(
        	<div>
	        	<img src={require('../img/testImage.jpg')}/>
	        	<TodoApp/>
	        </div>
        	)
    }
}

ReactDOM.render(<MyFirstCompont />, document.getElementById('root'));


//es5语法
// var React = require("react");
// var ReactDOM = require('react-dom');
// var App = require('./components/component1');
// var Welcome = React.createClass({
//     propTypes: {//定义传入props中的属性各种类型
//         initialValue: React.PropTypes.string
//     },
//     defaultProps: { //组件默认的props对象
//         initialValue: ''
//     },
//     // 设置 initial state
//     getInitialState: function() {//组件相关的状态对象
//         return {
//             text: this.props.initialValue || 'placeholder'
//         };
//     },
//     handleChange: function(event) {
//         this.setState({ //this represents react component instance
//             text: event.target.value
//         });
//     },
//     render: function() {
//         return (
//             <div>
//                 Type something:
//                 <input onChange={this.handleChange} value={this.state.text} />
//             </div>
//         );
//     }
// });

//ReactDOM.render(<Welcome name="Sara"/>, document.getElementById('root'));
