import React, {Component} from 'react'

class Breadcumb extends Component{
	render(){
		return(
			<div className="breadcumb_area bg-img" style={{backgroundImage: 'url(/img/bg-img/breadcumb.jpg)', marginTop:'86px'}}>
			  <div className="container h-100">
					<div className="row h-100 align-items-center">
					  <div className="col-12">
						<div className="page-title text-center">
						  <h2>{this.props.category}</h2>
						</div>
					  </div>
					</div>
			  </div>
			</div>
		)
	}
}

export default Breadcumb