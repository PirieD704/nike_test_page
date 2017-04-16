import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class GreenSection extends React.Component {
	render() {
		return (
			<div className={css(styles.greenWrapper)}>
				<div className={css(styles.capitalText)}>
					DOWNLOAD & WATCH ALL TUTORIALS ON YOUR DEVICE
				</div>
				<div className={css(styles.capitalText)}>
					DESKTOP COMPUTER, IPHONE, IPAD OR APPLE DEVICE
				</div>
			</div>

		)
	}
}

const styles = StyleSheet.create({
	greenWrapper: {
		height: '300px',
		width: '100%',
		backgroundColor: '#a4d85c'
	},
	capitalText: {
		color: '#fff',
		fontFamily: 'Source Sans Pro',
		fontSize: '20px'
	}

})

export default GreenSection;