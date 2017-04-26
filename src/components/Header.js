import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo';

let tick = 0;

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

		let dropClass = css(styles.dropDown);  //logic not quite finished here; probably need to tie it to state.

		function handleClick(e) {
			e.preventDefault;
			console.log('this worked');
			tick ? tick = 0 : tick = 1;
			const className = css(
				tick ? styles.dropDown : styles.dropDown,
				tick ? styles.dropDownToggle : styles.filler
			)
			console.log(className);
			return className;
		}

		return (
		  <div className={css(styles.headerWrapper)}>
		  	<div className={css(styles.swoosh)}><Logo width={svgWidth(vw)} height={svgHeight(vw)} fillColor="000" /></div>
			<div className={css(styles.menuLinks)}><a className={css(styles.link)} href="##">ABOUT</a></div>
			<div className={css(styles.menuLinks)}><a className={css(styles.link)} href="##">SERVICES</a></div>
			<div className={css(styles.menuLinks)}><a className={css(styles.link)} href="##">INVOLVEMENT</a></div>
			<a className={css(styles.hamburgLink)} href="##">
				<div className={css(styles.hamburg)} onClick={handleClick}>
					<div className={css(styles.burgerBars)}></div>
					<div className={css(styles.burgerBars)}></div>
					<div className={css(styles.burgerBars)}></div>
				</div>
			</a>
			<div className={dropClass}>
				<div className={css(styles.dropOptions)}>ABOUT</div>
				<div className={css(styles.dropOptions)}>SERVICES</div>
				<div className={css(styles.dropOptions)}>INVOLVEMENT</div>
			</div>
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
	link: {
		textDecoration: 'none',
		color: '#fff',
		':hover': {
			textDecoration: 'underline'
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
	},
	hamburgLink: {
		preventDefault: 'true',
		display: 'none',
		'@media (max-width: 768px)': {
			display: 'block',
			marginRight: '0px',
			position: 'absolute',
			right: '16px'
		}
	},
	hamburg: {
		'@media (max-width: 768px)': {
			display: 'flex',
			backgroundColor: '#25272b',
			width: '30px',
			height: '30px',
			marginTop: '14px',
			flexDirection: 'column'
			
		}		
	},
	burgerBars: {

		width: '100%',
		height: '6px',
		backgroundColor: 'white',
		margin: '3px 0px'
	},
	dropDown: {
		height: '111px',
		width: '0px',
		color: '#fff',
		position: 'absolute',
		right: '0px',
		top: '60px',
		fontFamily: 'Source Sans Pro',
		fontSize: '13px',
		textAlign: 'center',
		overflow: 'hidden'
	},
	dropOptions: {
		padding: '10px 5px',
		backgroundColor: '#444',
		opacity: '.9',
		':hover': {
			textDecoration: 'underline'
		}
	},
	dropDownToggle: {
		transform: 'translateX(100px), 0.3s',
		width: '102px'

	},
	filler: {

	}
})


export default Header;