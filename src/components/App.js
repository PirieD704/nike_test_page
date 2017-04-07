import React from 'react';
import Header from './Header';
import BannerSection from './BannerSection';
import SectionTwo from './SectionTwo';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<BannerSection />
				<SectionTwo />
    		</div>
  		)
	}
}


export default App;