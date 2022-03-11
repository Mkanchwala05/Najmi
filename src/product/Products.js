import React, { Component } from 'react'

import Breadcumb from './Breadcumb'
import ShopGridAreaSection from './ShopGridAreaSection'

class Products extends Component {
	render() {
		return (
			<div>
				<Breadcumb category={this.props.params.id}/>
				<ShopGridAreaSection/>
			  
	  	</div>
		)
	}
}

export default Products