import React,{Component} from 'react'
import './css/core-style.css'

import Header from './Header' 
import Footer from './Footer'

class Root extends Component{
	render(){
		return(
			<div>
				<Header/>
				<div>
					{this.props.children}
				</div>
				<Footer/>	
		</div>
		)
	}
}
export default Root