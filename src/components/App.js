import React from 'react';
import Header from './Header';
import BannerSection from './BannerSection';
import SectionTwo from './SectionTwo';
import ShowCase from './ShowCase';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<BannerSection />
				<SectionTwo />
				<ShowCase />
    		</div>
  		)
	}
}


export default App;