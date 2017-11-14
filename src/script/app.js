

//评论demo
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './components/CommentApp'
import { connect } from 'react-redux'
import '../css/index.css';

class App extends Component {

	_handleShowState(){
		console.log(this.props.appState);
	}
	_handleChangeState(){
		let appState = this.props.appState;
		this.props.onChangeStoreState(appState+"x");
	}
	render(){
		return (
			<div>
				<CommentApp />
				<button onClick={this._handleShowState.bind(this)}>
					测试显示redux state按钮
				</button>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<button onClick={this._handleChangeState.bind(this)}>
					测试修改redux state按钮
				</button>
			</div>
			
			)
		
	}
}

//从store中取的state
const AppStateFromStateStoreToProps = (state) => {
  return {
    appState: state.appState
  }
}

//修改store中state的接口
const AppChangeStateToProps = (dispatch) => {
  return {
    onChangeStoreState: (appState) => {
      dispatch({ type: 'APP_STATE', appState: appState })
    }
  }
}
App = connect(AppStateFromStateStoreToProps,AppChangeStateToProps)(App);

export default App;

