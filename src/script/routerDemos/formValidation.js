import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

const PreventingTransitionsExample = () => (
    <div>
      <ul>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
      </ul>
      <Route path="/" exact component={Form}/>
      <Route path="/one" render={() => <h3>One</h3>}/>
      <Route path="/two" render={() => <h3>Two</h3>}/>
    </div>
)

class Form extends React.Component {
	state = {
	    isBlocking: false
	  }
	  //问：什么时候是基本赋值，什么时候是指针赋值呀？
	render(){
		const {isBlocking} = this.state;
		return(
			<form onSubmit={event=>{
				 event.preventDefault();//问：这什么意思？
          		 event.target.reset();//问：这什么意思？
          		 this.setState({
          		 	isBoocking:false
          		 });
			}}>
			<Prompt 

				 when={isBlocking}
		         message={location => {

		         	return (
		            `Are you sure you want to go to ${location.pathname}`
		          )
		         }}

		          //问：这里获取了location也组件不需要用withRouter包裹，是全局的么？
		          //Prompt 好像只是在页面跳转时候回渲染？ Used to prompt the user before navigating away from a page. 
		          //问：那这样的话，每个组件大概是按照state更新而渲染，但是并不全是？
			/>
				<p>Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}</p>
				<p>
					
					<input size='50'
						   placeholder="type something to block transitions"
				           onChange={event => {
				              this.setState({
				                isBlocking: event.target.value.length > 0
				              })
				            }}
					/>
				</p>
				 <p>
		          <button>Submit to stop blocking</button>
		        </p>
			</form>


			);
	}


}
export default PreventingTransitionsExample;