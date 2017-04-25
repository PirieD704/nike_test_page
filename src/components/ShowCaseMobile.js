import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ShoeDesc from './ShoeDesc'

const textDescContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class ShowCaseMobile extends React.Component {
	render() {
		return (
			<div className={css(styles.mobileWrapper)}>
				<div className="bigCircle">
					
					<div className={css(styles.carousel)}>
						<img className={css(styles.bigCircle)} src='../images/circle-bg.png' />
						<div className="owl-carousel owl-theme">
							<div className={css(styles.shoes)}>
								<img className={css(styles.shoeImageLeft)} src='../images/big-left.png' />
								<div className={css(styles.lastWrapper)}>
									<ShoeDesc header="BLANDIT TINCIDUNT METUS" content={textDescContent}/>
								</div>						
							</div>
							<div className={css(styles.shoes)}>
								<img className={css(styles.shoeImageRight)} src='../images/big-right.png'/>
								<div className={css(styles.lastWrapper)}>
									<ShoeDesc header="METUS PELLENTESQUE" content={textDescContent}/>
								</div>
							</div>
							<div className={css(styles.shoes)}>
								<img className={css(styles.shoeImageBottom)} src='../images/big-bottom.png' />
								<div className={css(styles.lastWrapper)}>
									<ShoeDesc header="BLANDIT TINCIDUNT METUS" content={textDescContent}/>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


const styles = StyleSheet.create ({
	mobileWrapper: {
		display: 'none',
		'@media (max-width: 768px)': {
			display: 'block',
			height: '710px'		
		}		
	},
	bigCircle: {
		width: '300px',
		height: '300px',
		margin: 'auto',
		paddingTop: '50px',
		'@media (max-width: 320px)': {
			width: '280px',
			height: '280px'
		}
	},
	carousel: {
		margin: 'auto',
		position: 'relative'
	},
	shoes: {
		width: '260px',
		margin: 'auto',
		'@media (max-width: 320px)': {
			width: '240px'
		}		
	},
	shoeImageLeft: {
		marginLeft: '-24px',
		paddingBottom: '50px'
	},
	shoeImageRight: {
		marginLeft: '24px',
		paddingBottom: '80px'
	},
	shoeImageBottom: {
		marginTop: '30px',
		paddingBottom: '125px'
	},
	lastWrapper: {
		marginLeft: '-20px'
	}
})

export default ShowCaseMobile;