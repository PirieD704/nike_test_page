import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class GreenSection extends React.Component {
	render() {
		return (
			<div className={css(styles.greenWrapper)}>
				<div className={css(styles.inBetweenGreen)}>
					<div className={css(styles.capitalText)}>
						DOWNLOAD & WATCH ALL TUTORIALS ON YOUR DEVICE
					</div>
					<div className={css(styles.capitalText)}>
						DESKTOP COMPUTER, IPHONE, IPAD OR APPLE DEVICE
					</div>
					<div className={css(styles.regText)}>
						Sed facilisis quis sapien et facilisis. Maecenas rutrum augue ut nisl hendrerit facilisis. Donec sagittis sit amet odio id adipiscing. Fusce porttitor fermentum nidh. Aenean malesuada velit lectus, ve ullamcorper lacus ullamcorper et.
					</div>
					<div className={css(styles.bottomText)}>
						Proin et tortor at justo vulputate tincidunt non sed justo. Vivamus scelerisque arcu at pretium pellentesque.
					</div>
					<button className={css(styles.theButton)}>JOIN</button>
				</div>
			</div>

		)
	}
}

const styles = StyleSheet.create({
	greenWrapper: {
		height: '300px',
		width: '100%',
		backgroundColor: '#a4d85c',
		color: '#fff',
		fontFamily: 'Source Sans Pro'
	},
	inBetweenGreen: {
		width: '975px',
		margin: 'auto',
		paddingTop: '30px'
	},
	capitalText: {
		fontSize: '18px',
		paddingTop: '8px'
	},
	regText: {
		fontSize: '14px',
		paddingTop: '35px'
	},
	bottomText: {
		fontSize: '14px',
		paddingTop: '35px'
	},
	theButton: {
		padding: '11px 40px',
		border: '0px',
		borderRadius: '4px',
		backgroundColor: '#fff',
		color: '#a4d85c',
		marginTop: '25px',
		fontSize: '13px'
	}

})

export default GreenSection;