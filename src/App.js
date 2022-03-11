
import React,{Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import './css/core-style.css'

import Body from './Body'
import Root from './Root'
import Products from './product/Products'
import Product from './product/Product'

class App extends Component{
	render(){
		return(
			<Router history={browserHistory}>
  			<Route path="/" component={Root}>
					<IndexRoute component={Body}/>
					<Route path={"product"} component={Product}/>
					<Route path={"products/:id"} component={Products}/>
				</Route>
  		</Router>
		)
	}
}

export default App

