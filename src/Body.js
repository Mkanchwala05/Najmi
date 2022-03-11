import React, { Component } from 'react'


import WelcomeAreaSection from './home-page-component/WelcomeAreaSection'
import TopCategoryArea from './home-page-component/TopCategoryArea'
import CtaArea from './home-page-component/CtaArea'
import NewArrivalSection from './home-page-component/NewArrivalSection'
import BrandArea from './home-page-component/BrandArea'

class Body extends Component {
	render() {
		return (
			<div>
				<WelcomeAreaSection/>
				<TopCategoryArea/>
				<CtaArea/>
				<NewArrivalSection/>
				<BrandArea/>
	  	</div>
		)
	}
}

export default Body