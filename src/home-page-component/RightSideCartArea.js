import React, {Component} from 'react'
import $ from 'jquery';

class RightSideCartArea extends Component{
	componentDidMount(){
		var cartbtn1 = $('#essenceCartBtn');
    var cartOverlay = $(".cart-bg-overlay");
    var cartWrapper = $(".right-side-cart-area");
    var cartbtn2 = $("#rightSideCart");
    var cartOverlayOn = "cart-bg-overlay-on";
    var cartOn = "cart-on";

    cartbtn1.on('click', function (e) {
      e.preventDefault()
      cartOverlay.toggleClass(cartOverlayOn);
      cartWrapper.toggleClass(cartOn);
    });
    cartOverlay.on('click', function (e) {
      e.preventDefault()
      $(this).removeClass(cartOverlayOn);
      cartWrapper.removeClass(cartOn);
    });
    cartbtn2.on('click', function (e) {
      e.preventDefault()
      cartOverlay.removeClass(cartOverlayOn);
      cartWrapper.removeClass(cartOn);
    });
	}
	render(){
		return(
			<div className="right-side-cart-area">
			  <div className="cart-button">
					<a href="" id="rightSideCart"><img src="/img/core-img/bag.svg" alt="" /> <span>3</span></a>
			  </div>
			  <div className="cart-content d-flex">
					<div className="cart-list">
					  <div className="single-cart-item">
						<a href="" className="product-image">
						  <img src="/img/product-img/product-1.jpg" className="cart-thumb" alt="" />
						  <div className="cart-item-desc">
							<span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
							<span className="badge">Mango</span>
							<h6>Button Through Strap Mini Dress</h6>
							<p className="size">Size: S</p>
							<p className="color">Color: Red</p>
							<p className="price">$45.00</p>
						  </div>
						</a>
					  </div>
					  <div className="single-cart-item">
						<a href="" className="product-image">
						  <img src="/img/product-img/product-2.jpg" className="cart-thumb" alt="" />
						  <div className="cart-item-desc">
							<span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
							<span className="badge">Mango</span>
							<h6>Button Through Strap Mini Dress</h6>
							<p className="size">Size: S</p>
							<p className="color">Color: Red</p>
							<p className="price">$45.00</p>
						  </div>
						</a>
					  </div>
					  <div className="single-cart-item">
						<a href="" className="product-image">
						  <img src="/img/product-img/product-3.jpg" className="cart-thumb" alt=""/>
						  <div className="cart-item-desc">
							<span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
							<span className="badge">Mango</span>
							<h6>Button Through Strap Mini Dress</h6>
							<p className="size">Size: S</p>
							<p className="color">Color: Red</p>
							<p className="price">$45.00</p>
						  </div>
						</a>
					  </div>
					</div>
					<div className="cart-amount-summary">
					  <h2>Summary</h2>
					  <ul className="summary-table">
						<li><span>subtotal:</span> <span>$274.00</span></li>
						<li><span>delivery:</span> <span>Free</span></li>
						<li><span>discount:</span> <span>-15%</span></li>
						<li><span>total:</span> <span>$232.00</span></li>
					  </ul>
					  <div className="checkout-btn mt-100">
						<a href="checkout.html" className="btn essence-btn">check out</a>
					  </div>
					</div>
			  </div>
			</div>
		)
	}
}

export default RightSideCartArea
