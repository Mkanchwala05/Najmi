import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ProductCard from './ProductCard'

class NewArrivalSection extends Component{
	constructor(){
    super()
    this.state = {
    	card:[]
    }
  }
	componentDidMount(){
		fetch('http://192.168.88.73:8000/api/getpopularproducts')
    // .then(response => response.json())
    .then(data => {
        console.log(data)
        //card:data
    })
	}
	render(){
		return(
			<section className="new_arrivals_area section-padding-80 clearfix">
			  <div className="container">
					<div className="row">
					  <div className="col-12">
						<div className="section-heading text-center">
						  <h2>Popular Products</h2>
						</div>
					  </div>
					</div>
			  </div>
			  <div className="container">
					<div className="row">
					  <div className="col-12">
							<OwlCarousel className="owl-theme" loop margin={10} nav>
							  <ProductCard
							  	productImage = "img/product-img/product-1.jpg"
							  	productHoverImage = "img/product-img/product-2.jpg"
							  	offer=""
							  	brand = "topshop"
							  	description = "Knot Front Mini Dress"
							  	price = "$80.00"
							  	oldPrice = ""
							  />
							  <ProductCard
							  	productImage = "img/product-img/product-2.jpg"
							  	productHoverImage = "img/product-img/product-3.jpg"
							  	offer=""
							  	brand = "topshop"
							  	description = "Poplin Displaced Wrap Dress"
							  	price = "$80.00"
							  	oldPrice = ""
							  />
							  <ProductCard
							  	productImage = "img/product-img/product-3.jpg"
							  	productHoverImage = "img/product-img/product-4.jpg"
							  	offer="-30%"
							  	brand = "mango"
							  	description = "PETITE Crepe Wrap Mini Dress"
							  	price = "$80.00"
							  	oldPrice = "$75.00"
							  />
							  <ProductCard
							  	productImage = "img/product-img/product-4.jpg"
							  	productHoverImage = "img/product-img/product-5.jpg"
							  	offer="New"
							  	brand = "mango"
							  	description = "PETITE Belted Jumper Dress"
							  	price = "$80.00"
							  	oldPrice = ""
							  />
							</OwlCarousel>
					  </div>
					</div>
			  </div>
			</section>
		)
	}
}

export default NewArrivalSection