import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Header extends React.Component {
	render() {
		return (
		  <div className={css(styles.headerWrapper)}>
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
		backgroundColor: '#a4d85c',
		width: '100%'
	},
	menuLinks: {
		padding: '20px'
	}
})


export default Header;