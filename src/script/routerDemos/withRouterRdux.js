import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {editRouterReduxComment} from '../reducers/comments'
class WithRouterRedux extends  Component {
	_handelChange(value){
		let currentVal = this.props.withRouterReduxState
		this.props.stateChange(currentVal+"change ");
	}
	render (){

		return (

			<div>
				<p>
					{this.props.withRouterReduxState}	
				</p>
				
				<button onClick={this._handelChange.bind(this)}> 修改存在redux中的state</button>
			</div>

			)
	};

}


//从store中取的state
const stateStoreToProps = (state) => {
  return {
    withRouterReduxState: state.withRouterReduxState
  }
}



//修改store中state的接口
const changeStateToProps = (dispatch) => {
  return {
    stateChange:(value)=>{
    	dispatch(editRouterReduxComment(value));
    }
  }
}
WithRouterRedux = withRouter(connect(stateStoreToProps,changeStateToProps)(WithRouterRedux));

/*// This gets around shouldComponentUpdate
withRouter(connect(...)(MyComponent))

// This does not
connect(...)(withRouter(MyComponent))*/
//这里有缺，好像是渲染函数触发的问题。

export default WithRouterRedux;