import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo';


class Header extends React.Component {
	render() {
			// grab window height to adjust svg size in header
		const vw = window.innerWidth;
		// build out our functions to manipulate the width and height respectively
		const svgWidth = (width) => {
			return width >= 667 ? '200' : '100';
		} 
		const svgHeight = (width) => {
			return width >= 667 ? '72' : '36';
		}

		return (
		  <div className={css(styles.headerWrapper)}>
		  	<div className={css(styles.swoosh)}><Logo width={svgWidth(vw)} height={svgHeight(vw)} fillColor="000" /></div>
			<div className={css(styles.menuLinks)}>ABOUT</div>
			<div className={css(styles.menuLinks)}>SERVICES</div>
			<div className={css(styles.menuLinks)}>INVOLVEMENT</div>
	    </div>

		)
	}
}


const styles = StyleSheet.create({
	headerWrapper: {
		display: 'inline-flex',
		backgroundColor: '#25272b',
		width: '100%'
	},
	swoosh: {
		padding: '20px 140px 20px 140px',
		backgroundColor: '#a4d85c',
		marginRight: '12%',
		swooshWidth: '200',
		swooshHeight: '72',
		'@media (max-width: 768px)': {
			padding: '10px',
			marginRight: '5%',
			swooshWidth: '100',
			swooshHeight: '36'
		}
	},
	menuLinks: {
		color: '#fff',
		padding: '20px',
		fontFamily: 'Source Sans Pro',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		'@media (max-width: 768px)': {
			display: 'none'
		}
	}
})


export default Header;