import React from 'react';
import Header from './Header';
import BannerSection from './BannerSection';
import SectionTwo from './SectionTwo';
import ShowCase from './ShowCase';

class App extends React.Component {
	constructor() {

		super();

		this.changeShoe = this.changeShoe.bind(this);

		//getInitialState
		this.state = {
			bigShoe: {
				source: '../images/big-left.png',
				shoe: 'left'
			}
		};
	}

	changeShoe(shoe) {
		// update state
		const bigShoe = this.state.bigShoe;
		// change our shoe image
		bigShoe.source = `../images/big-${shoe}.png`;
		bigShoe.shoe = shoe;
		console.log(bigShoe.shoe)
		this.setState({ bigShoe });
	}

	render() {
		return (
			<div>
				<Header />
				<BannerSection />
				<SectionTwo />
				<ShowCase bigShoe={this.state.bigShoe} changeShoe={this.changeShoe} />
    		</div>
  		)
	}
}


export default App;