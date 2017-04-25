import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo';

// const swooshIcon = require('/public/images/logo.svg');

class BannerSection extends React.Component {
	render() {
		// grab window height to adjust svg size in header
		const vw = window.innerWidth;
		// build out our functions to manipulate the width and height respectively
		const svgWidth = (width) => {
			return width >= 768 ? '200' : '100';
		} 
		const svgHeight = (width) => {
			return width >= 768 ? '72' : '36';
		}		
		return (
			<div className={css(styles.bannerWrapper)}>
				<div className={css(styles.mainSwoosh)}><Logo width={svgWidth(vw)} height={svgHeight(vw)} fillColor="#a4d85c" /></div>
				<div className={css(styles.mainName)}>MERCURIAL SUPERFLY</div>
				<div className={css(styles.belowName)}>It's time to destroy defenses</div>
			</div>
		)
	}
}


const styles = StyleSheet.create({
	bannerWrapper: {
		display: 'flex',
		flexDirection: 'column',
		height: '900px',
		textAlign: 'center',
		justifyContent: 'center',
		width: '100%',
		backgroundImage: 'url("/images/content-1-bg.png")',
		backgroundSize: 'cover',
		'@media (max-width: 667px)': {
			height: '90vh'
		}
	},
	mainSwoosh: {
		padding: '20px'
	},
	mainName: {
		color: '#a4d85c',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '60px',
		padding: '5px',
		'@media (max-width: 667px)': { //down size the font
			fontSize: '46px'
		}
	},
	belowName: {
		color: '#fff',
		fontFamily: 'Source Sans Pro',
		fontSize: '34px',
		'@media (max-width: 667px)': { //downsize the font
			fontSize: '22px'
		}		
	}

})

export default BannerSection;