import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo';

// const swooshIcon = require('/public/images/logo.svg');

class BannerSection extends React.Component {
	render() {
		return (
			<div className={css(styles.bannerWrapper)}>
				<div className={css(styles.mainSwoosh)}><Logo fillColor="#a4d85c" /></div>
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
		backgroundSize: 'cover'
	},
	mainSwoosh: {
		padding: '20px'
	},
	mainName: {
		color: '#a4d85c',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '60px',
		padding: '5px'
	},
	belowName: {
		color: '#fff',
		fontFamily: 'Source Sans Pro',
		fontSize: '34px'
	}

})

export default BannerSection;