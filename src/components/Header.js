import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo';


class Header extends React.Component {
	render() {
		return (
		  <div className={css(styles.headerWrapper)}>
		  	<div className={css(styles.swoosh)}><Logo fillColor="000" /></div>
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
		marginRight: '12%' //this probably needs to be changed later
	},
	menuLinks: {
		color: '#fff',
		padding: '20px',
		fontFamily: 'Source Sans Pro',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
})


export default Header;