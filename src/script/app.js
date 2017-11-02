

//es6语法,乱测demo。
/*

document.write( require("./js/runoob1.js"));
import App  from './components/component1';
import greenCss from '../css/green.css';
import testScss from '../scss/test.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import greenO from './jQplugins/jqGreen';
import TodoApp from './components/component2';
import PropTypes from 'prop-types';
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

class Dianzan extends React.Component{
	 //强制参数类型,而且可以从这里大概知道一个组件的参数，必填参数，可选参数。
	 static propTypes = {
	    comment: PropTypes.object.isRequired
	  }
	 static defaultProps = {
	    likedText: '取消',
	    unlikedText: '点赞'
	 }
	 constructor () {
	    super();
	    this.state={status:false};
	    this.changStatus = this.changStatus.bind(this);
	}

	changStatus(e){

		this.setState({
			status:!this.state.status
		});
		if(this.props.onClick){
			this.props.onClick();
			//111
		}
	}
	render(){

		return (
			<button id='dianzanButton' onClick={this.changStatus}>

				{this.state.status==true?this.props.likedText:this.props.unlikedText}👍
				
				{this.props.children}
			</button>

			)
				}
}

class Index extends React.Component{
	constructor () {
		super();
		this.state={
			likedText: '取消FromIndex',
	    	unlikedText: '点赞FromIndex'
		}
		this.changeStateToSetDianzan = this.changeStateToSetDianzan.bind(this);
	}
	getTopDiv(temDom){
		this.divDom = temDom;
	}
	componentDidMount () {
		console.log($(this.divDom).find('#dianzanButton'));  	
	}
	changeStateToSetDianzan(){
		this.setState({
			likedText: '取消Update',
	    	unlikedText: '点赞Update'
		});
		console.log('this',this);
	}
	render(){
		return (
			<div ref={this.getTopDiv.bind(this)}>
				
				<Dianzan comment={{a:1,b:2}} likedText={this.state.likedText} unlikedText={this.state.unlikedText}>
					<div>
						测试props.children;
					</div>
				</Dianzan>
				<button onClick={this.changeStateToSetDianzan}>调试</button>
			</div>
		)
	}
}


//添加dom操作
class AutoFocusInput extends React.Component {
  componentDidMount () {
  	$(this.input).focus();
  }

  render () {
    return (
      <input ref={(input) => this.input = input}  value='value'/>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

*/

//评论demo
import React from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './components/CommentApp'
import '../css/index.css';

ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
);


