import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo'

class WhiteSection extends React.Component {
	render() {
		return (
			<div className="whiteSectionWrapper">
				<div className={css(styles.inBetweenWhite)}>
					<div className="text1">
						<ul className={css(styles.listText)}>
							<li className={css(styles.topText)}>WEB DESIGN STUDIO TUTORIALS</li>
							<li>Design a creative Blog</li>
							<li>Design a iPad Website</li>
							<li>Single Page sales portfolio</li>
							<li>Flat product website in Photoshop</li>
							<li>Design a creative Blog</li>
							<li>Design a iPad Website</li>
							<li>Single Page sales portfolio</li>
						</ul>
					</div>
					<div className="text2">
						<ul className={css(styles.listText)}>
							<li className={css(styles.topText)}>STEP BY STEP WEB DESIGN TUTORIALS</li>
							<li>Design a creative Blog</li>
							<li>Design a iPad Website</li>
							<li>Single Page sales portfolio</li>
							<li>Flat product website in Photoshop</li>
							<li>Design a creative Blog</li>
						</ul>
					</div>
					<div className={css(styles.text3)}>
						<ul className={css(styles.listText)}>
							<li className={css(styles.topText)}>DESIGNERS</li>
							<li>Blaz Robar</li>
							<li>Nick Toranto</li>
							<li>Joisp Kelava</li>
							<li>David Pirie</li>
						</ul>
					</div>
					<div className="text4">
						<ul className={css(styles.listText)}>
							<li className={css(styles.topText)}>BLAZROBAR.COM</li>
							<li>About</li>
							<li>Web Design Video Tutorials</li>
							<li>Sign up</li>
							<li>Sign in</li>
							<li>Contact</li>
						</ul>
					</div>
				</div>	
				<div className={css(styles.swooshSection)}>
					<div className={css(styles.swoosh)}>
						<Logo fillColor='#111' width="85" height="30" />
					</div>
					<div className={css(styles.swooshText)}>
						Copyright NIKE 2015
					</div>
				</div>											
			</div>
		)
	}
}

const styles = StyleSheet.create({
	inBetweenWhite: {
		display: 'flex',
		margin: 'auto',
		width: '1050px',
		paddingTop: '40px',
		'@media (max-width: 768px)': { //use flex wrap to sit properly
			width: 'auto',
			flexDirection: 'row',
			flexWrap: 'wrap'
		}
	},
	listText: {
		listStyle: 'none',
		color: '#777',
		fontFamily: 'Source Sans Pro',
		lineHeight: '24px',
		fontSize: '12px',
		'@media (max-width: 768px)': { //set width to make text boxes quadrants
			width: '120px'
		}
	},
	topText: {
		fontWeight: 'bolder',
		fontSize: '11px',
		fontFamily: 'Roboto'
	},
	text3: {
		padding: '0px 40px 0px 180px',
		'@media (max-width: 768px)': { //remove padding
			padding: '0px'
		}
	},
	swooshSection: {
		display: 'block',
		width: '90px',
		margin: 'auto',
		paddingTop: '40px'
	},
	swoosh: {
		paddingBottom: '10px'
	},
	swooshText: {
		color: '#777',
		fontFamily: 'Source Sans Pro',
		fontSize: '10px'
	}

})

export default WhiteSection;