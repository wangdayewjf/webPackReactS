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

class Dianzan extends React.Component{
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
			<button onClick={this.changStatus}>

				{this.state.status==true?this.props.likedText:this.props.unlikedText}👍
				

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
	changeStateToSetDianzan(){
		this.setState({
			likedText: '取消Update',
	    	unlikedText: '点赞Update'
		});
		console.log('this',this);
	}
	render(){
		return (
			<div>
				
				<Dianzan likedText={this.state.likedText} unlikedText={this.state.unlikedText}/>
				<button onClick={this.changeStateToSetDianzan}>调试</button>
			</div>
		)
	}
}
ReactDOM.render(<Index/>, document.getElementById('root'));


