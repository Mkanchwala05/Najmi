import React, {Component} from 'react'
import {Link} from 'react-router'

class TopCategoryArea extends Component{
	render(){
		return(
			<div className="top_catagory_area section-padding-80 clearfix">
			  <div className="container">
				<div className="row justify-content-center">
				  <div className="col-12 col-sm-6 col-md-4">
					<div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(/img/bg-img/bg-2.jpg)'}}>
					  <div className="catagory-content">
					  	<Link to={'/products/rida'}>Rida</Link>
					  </div>
					</div>
				  </div>
				  <div className="col-12 col-sm-6 col-md-4">
					<div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(/img/bg-img/bg-3.jpg)'}}>
					  <div className="catagory-content">
							<Link to={'/products/kurta pajama'}>Kurta pajama</Link>
					  </div>
					</div>
				  </div>
				  <div className="col-12 col-sm-6 col-md-4">
					<div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(/img/bg-img/bg-4.jpg)'}}>
					  <div className="catagory-content">
							<Link to={'/products/tasbeeh'}>Tasbeeh</Link>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		)
	}
}

export default TopCategoryArea