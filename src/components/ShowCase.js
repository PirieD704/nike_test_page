import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ShoeDesc from './ShoeDesc';
import ShowCaseMobile from './ShowCaseMobile';

const textDescContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."



class ShowCase extends React.Component {
	constructor() {
		super();
	}
	// You need to use an anonymous function to run the onClick event
	render() {
		const shoe = this.props.bigShoe.shoe;
		const shoeImage = this.props.bigShoe.source
		function shouldBeLeft(sh) {
			return sh === 'left';
		}
		function shouldBeRight(sh) {
			return sh === 'right';
		}
		function shouldBeBottom(sh) {
			return sh === 'bottom';
		}
		// conditional use of aphrodite where a boolean is determined from the shoe selection in state
		const className1 = css(
			shouldBeLeft(shoe) ? styles.bigShoeleft : styles.bigShoeNoShow
		)
		const className2 = css(
			shouldBeRight(shoe) ? styles.bigShoeright : styles.bigShoeNoShow
		)
		const className3 = css(
			shouldBeBottom(shoe) ? styles.bigShoebottom : styles.bigShoeNoShow
		)
		

		return (
			<div className={css(styles.showCaseWrapper)}>
				<div className={css(styles.shoeDisplayWrapper)}>
					<div className={css(styles.leftSide)}>
						<div className={css(styles.leftText)}>
							<span className={css(styles.nikeText)}>NIKE</span> SUPERFLY FG
						</div>
						<div className={css(styles.littleLeft, styles.leftShoes)} onClick={() => this.props.changeShoe('left')} >
							<img src="../images/left-view.png" />
						</div>
						<div className={css(styles.littleRight, styles.leftShoes)} onClick={() => this.props.changeShoe('right')} >	
							<img src="../images/right-view.png" />
						</div>
						<div className={css(styles.littleBottom, styles.leftShoes)} onClick={() => this.props.changeShoe('bottom')} >
							<img src="../images/bottom-view.png" />
						</div>
					</div>
					<div className={css(styles.middleSideWrapper)}>
						<img className={css(styles.bigCircle)} src='../images/circle-bg.png' />
						<img className={className1} src='../images/big-left.png' />
						<img className={className2} src='../images/big-right.png'/>
						<img className={className3} src='../images/big-bottom.png' />
					</div>
					<div className={css(styles.rightHidden)}>
					</div>
				</div>
				<ShowCaseMobile />
				<div className={css(styles.shoeDescText)}>
					<ShoeDesc header="BLANDIT TINCIDUNT METUS" content={textDescContent}/>
					<ShoeDesc header="METUS PELLENTESQUE" content={textDescContent}/>
					<ShoeDesc header="BLANDIT TINCIDUNT METUS" content={textDescContent}/>					
				</div>
			</div>
		)
	}
}

const styles = StyleSheet.create({
	showCaseWrapper: {
		height: '1150px',
		width: '100%',
		backgroundColor: '#27292b',
		backgroundImage: 'url("/images/content-2-bg.png")',
		backgroundRepeat: 'repeat-y',
		textAlign: 'center',
		'@media (max-width: 768px)': { //remove height and width settings
			height: 'auto',
			width: 'auto'
		}
	},
	shoeDisplayWrapper: {
		paddingTop: '100px',
		display: 'inline-flex',
		'@media (max-width: 768px)': { //hide regular display for shoes
			display: 'none'
		}	
	},
	leftSide: {
		color: '#fff',
		fontFamily: 'Source Sans Pro',
		lineHeight: '14px',
		width: '125px'
	},
	nikeText: {
		fontSize: '12px'
	},
	leftShoes: {
		margin: '30px 0px'
	},
	leftText: {
		width: '95px',
		textAlign: 'left'
	},
	littleLeft: {
		border: '2px #27292b solid',
		':hover': {
			border: '2px #a4d35a solid'
		},
		padding: '2px 14px'
	},
	littleRight: {
		border: '2px #27292b solid',
		':hover': {
			border: '2px #a4d35a solid'
		},
		padding: '8px 14px'
	},
	littleBottom: {
		border: '2px #27292b solid',
		':hover': {
			border: '2px #a4d35a solid'
		},
		padding: '20px 10px'
	},
	middleSideWrapper: {
		display: 'inline-flex',
		position: 'relative'
	},
	bigCircle: {
		marginLeft: '100px'
	},
	bigCircleMobile: {
		display: 'none',
		'@media (max-width: 667px)': {
			width: '300px',
			height: '300px',
			margin: 'auto'
		}
	},
	bigShoeleft: {
		position: 'absolute',
		width: '600px',
		marginTop: '100px',
		'@media (max-width: 667px)': {
			width: '260px'
		}
	},
	bigShoeright: {
		position: 'absolute',
		width: '600px',
		marginTop: '100px',
		right: '-100px'
	},
	bigShoebottom: {
		position: 'absolute',
		width: '600px',
		marginTop: '100px',
		right: '10px',
		top: '100px'
	},
	rightHidden: {
		width: '125px'
	},
	shoeDescText: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '980px',
		paddingTop: '80px',
		margin: 'auto',
		textAlign: 'left',
		'@media (max-width: 768px)': { //remove width from text section
			display: 'none',
			width: 'auto',
			flexWrap: 'wrap'
		}
	},
	bigShoeNoShow: {
		display: 'none'
	}

})

export default ShowCase;