import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ShoeDesc from './ShoeDesc';

const textDescContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class ShowCase extends React.Component {
	render() {
		return (
			<div className={css(styles.showCaseWrapper)}>
				<div className={css(styles.shoeDisplayWrapper)}>
					<div className={css(styles.leftSide)}>
						<div className={css(styles.leftText)}>
							<span className={css(styles.nikeText)}>NIKE</span> SUPERFLY FG
						</div>
						<div className={css(styles.littleLeft, styles.leftShoes)}>
							<img src="../images/left-view.png" />
						</div>
						<div className={css(styles.littleRight, styles.leftShoes)}>	
							<img src="../images/right-view.png" />
						</div>
						<div className={css(styles.littleBottom, styles.leftShoes)}>
							<img src="../images/bottom-view.png" />
						</div>
					</div>
					<div className={css(styles.middleSideWrapper)}>
						<img className={css(styles.bigCircle)} src="../images/circle-bg.png" />
						<img className={css(styles.bigShoe)} src="../images/big-left.png" />
					</div>
					<div className={css(styles.rightHidden)}>
					</div>
				</div>
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
		height: '1250px',
		width: '100%',
		backgroundColor: '#27292b',
		backgroundImage: 'url("/images/content-2-bg.png")',
		backgroundRepeat: 'repeat-y',
		textAlign: 'center'		
	},
	shoeDisplayWrapper: {
		paddingTop: '100px',
		display: 'inline-flex',
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
		display: 'inline-flex'
	},
	bigCircle: {
		marginLeft: '100px'
	},
	bigShoe: {
		position: 'absolute',
		width: '600px',
		marginTop: '100px'
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
		textAlign: 'left'
	}

})

export default ShowCase;