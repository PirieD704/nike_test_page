import React from 'react';
import { StyleSheet, css } from 'aphrodite';


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
							</div>
							<div className={css(styles.shoes)}>
								<img className={css(styles.shoeImageRight)} src='../images/big-right.png'/>
							</div>
							<div className={css(styles.shoes)}>
								<img className={css(styles.shoeImageBottom)} src='../images/big-bottom.png' />
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
			display: 'block'		
		}
	},
	bigCircle: {
		width: '300px',
		height: '300px',
		margin: 'auto',
		paddingTop: '50px'
	},
	carousel: {
		margin: 'auto',
		textAlign: 'center',
		position: 'relative'
	},
	shoes: {
		width: '260px',
		margin: 'auto',
		paddingBottom: '60px'
	},
	shoeImageLeft: {
		marginLeft: '-24px'
	},
	shoeImageRight: {
		marginLeft: '24px'
	},
	shoeImageBottom: {
		marginTop: '30px'
	}
})

export default ShowCaseMobile;