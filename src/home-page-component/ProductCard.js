import React, {Component} from 'react'

class ProductCard extends Component{
	constructor(props){
		super()
	}
	render(){
		let offerClass
		if(this.props.offer == "New"){
			offerClass = "product-badge new-badge"
		}
		else{
			offerClass = "product-badge offer-badge"
		}
		return(
			<div className="single-product-wrapper">
				<div className="product-img">
					<img src={this.props.productImage} alt="" />
					<img className="hover-img" src={this.props.productHoverImage} alt="" />
					<div className={offerClass} style={{display:this.props.offer? 'block':'none'}}>
						<span>{this.props.offer}</span>
					</div>
					{this.props.offer? ``: ''}
					<div className="product-favourite">
						<a href="" className="favme fa fa-heart"></a>
					</div>
				</div>
				<div className="product-description">
					<span>{this.props.brand}</span>
					<a href="">
						<h6>{this.props.description}</h6>
					</a>
					<p className="product-price"><span className="old-price" style={{display:this.props.oldPrice? 'inlineBlock':'none',}}>{this.props.oldPrice}</span>{this.props.price}</p>
					<div className="hover-content">
						<div className="add-to-cart-btn">
							<a className="btn essence-btn">Add to Cart</a>
						</div>
					</div>
				</div>
		  </div>
		)
	}
}

export default ProductCard

